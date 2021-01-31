import jwt from "jsonwebtoken";
// import bcrypt from "bcryptjs";
import config from "../config.js";
import { fromString } from "uuidv4";
import Session from "../models/session.js";
import User from "../models/user.js";
import UserSession from "../models/userSession.js";

export const createToken = (user) => {
    return jwt.sign(
        {
            id: user._id,
            username: user.username,
            phoneNumber: user.phoneNumber
        },
        config.jwt.secret,
        { algorithm: "HS256", expiresIn: config.jwt.expiry }
    )
}

export const verifyPassword = (passwordAttempt, passwordDatabase) => {
    return passwordAttempt === passwordDatabase;
}

export const createSessionExtIdentifier = (...userExtIdArray) => {
    userExtIdArray.sort()
    const singleElement = userExtIdArray.join("");
    return fromString(singleElement);

}

export const createNewSessions = async (...userExtIdArray) => {
    const savedNewSession = await new Session({ externalIdentifier: createSessionExtIdentifier(...userExtIdArray) }).save();

    for (const userExtId of userExtIdArray) {

        const user = await User.findOne({
            externalIdentifier: userExtId,
        });

        new UserSession({
            externalIdentifier: createSessionExtIdentifier(userExtId),
            sessionId: savedNewSession.id,
            userId: user.id,
            created: savedNewSession.created
        }).save();
    }

    return savedNewSession;

}