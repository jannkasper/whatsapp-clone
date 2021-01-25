import jwtDecode from "jwt-decode";
import fs from "fs";
import { body, validationResult } from "express-validator";
import User from "../models/user.js"
import { createToken, verifyPassword } from "../utils/authentication.js";

export const signup = async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        const errors = result.array({onlyFirstError: true });
        return res.status(422).json({ errors });
    }

    try {
        const { phoneNumber, username, password } = req.body;
        const { avatar } = req.files;

        const userData = {
            phoneNumber: phoneNumber,
            username: username.toLowerCase(),
            password: password,
            avatar: {
                fieldName: avatar.fieldName,
                originalFilename: avatar.originalFilename,
                size: avatar.size,
                data: fs.readFileSync(avatar.path),
                contentType: avatar.type
            }
        };

        const existingUsername = await User.findOne({
            username: userData.username
        })

        if (existingUsername) {
            return res.status(400).json({ message: "Username already exists." });
        };

        const newUser = new User(userData);
        const savedUser = await newUser.save();

        if (savedUser) {
            const token = createToken(savedUser);
            const decodedToken = jwtDecode(token);
            const expiresAt = decodedToken.exp;

            const { id, username, phoneNumber, avatar, created } = savedUser;
            const userInfo = { id, username, phoneNumber, avatar, created };

            return res.json({
                message: "User created!",
                token,
                userInfo,
                expiresAt
            });


        } else {
            res.status(400).json({ message: "There was a problem creating your account."})
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
            username: username.toLowerCase()
        });
        
        if (!user) {
            return res.status(403).json({ message: "Wrong username or password."})
        }
        const passwordValid = await verifyPassword(password, user.password);

        if (passwordValid) {
            const token = createToken(user);
            const decodedToken = jwtDecode(token);
            const expiresAt = decodedToken.exp;

            const { id, username, phoneNumber, avatar, created } = user;
            const userInfo = { id, username, phoneNumber, avatar, created };

            return res.json({
                message: "Authentication successful!",
                token,
                userInfo,
                expiresAt
            });
        } else {
            res.status(403).json({ message: 'Wrong username or password.' });
        }

    } catch (error) {
        return res.status(400).json({ message: "There was a problem creating your account." });
    }
}

export const validateUser = []