import jwt from "jsonwebtoken";
// import bcrypt from "bcryptjs";
import config from "../config.js";

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