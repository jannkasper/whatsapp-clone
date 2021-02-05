import jwtDecode from "jwt-decode";
import fs from "fs";
import shortId from 'shortid';
import { body, validationResult } from "express-validator";
import User from "../models/user.js"
import { createToken, verifyPassword } from "../utils/authentication.js";
import { createExampleConversation } from "../utils/message.js";
import { getIO } from "../index.js";

export const signup = async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        const errors = result.array({onlyFirstError: true });
        return res.status(422).json({ errors });
    }

    try {
        const { phoneNumber, username, password } = req.body;

        const existingUsername = await User.findOne({ username: { $regex : new RegExp(username, "i") } })

        if (existingUsername) {
            return res.status(200).json({ hasError: true, field: "username", message: "Username already exists." });
        };

        const userData = {
            externalIdentifier: shortId.generate(),
            phoneNumber: phoneNumber,
            username: username,
            password: password,
            ...(req.files && req.files.profileImage) && { profileImage : { ...req.files.profileImage, data: fs.readFileSync(req.files.profileImage.path).toString("base64") }},
        };

        const savedUser = await new User(userData).save();

        if (savedUser) {
            const token = createToken(savedUser);
            const decodedToken = jwtDecode(token);
            const expiresAt = decodedToken.exp;

            getIO().emit("USER_ENTER", { contact: savedUser });

            await createExampleConversation(savedUser.externalIdentifier);

            const { externalIdentifier, username, phoneNumber, profileImage, created } = savedUser;
            const userInfo = { externalIdentifier, username, phoneNumber, profileImage, created };

            return res.json({
                message: "User created!",
                token,
                userInfo,
                expiresAt
            });
        } else {
            return res.status(400).json({ message: "There was a problem creating your account."})
        }

    } catch (error) {
        return res.status(400).json({ message: "There was a problem creating your account." });
    }
}

export const authenticate = async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        const errors = result.array({onlyFirstError: true });
        return res.status(422).json({ errors });
    }
    
    try {
        const { username, password } = req.body;

        const user = await User.findOne({
            username: { $regex : new RegExp(username, "i") }
        });
        
        if (!user) {
            return res.status(200).json({ hasError: true, field: "username", message: "Username doesn't exists." });
        }

        const passwordValid = await verifyPassword(password, user.password);

        if (passwordValid) {
            const token = createToken(user);
            const decodedToken = jwtDecode(token);
            const expiresAt = decodedToken.exp;

            const { externalIdentifier, username, phoneNumber, profileImage, created } = user;
            const userInfo = { externalIdentifier, username, phoneNumber, profileImage, created };

            return res.json({
                message: "Authentication successful!",
                token,
                userInfo,
                expiresAt
            });
        } else {
            return res.status(200).json({ hasError: true, field: "password", message: "Wrong password." });
        }

    } catch (error) {
        return res.status(400).json({ message: "There was a problem creating your account." });
    }
}

export const listUsers = async (req, res, next) => {
    try {
        const userExtId = req.params.userExtId;
        const users = await User.find({ externalIdentifier: {$ne: userExtId} });
        res.json(users);
    } catch (error) {
        next(error);
    }
}

export const validateUser = []