import Session from "../models/session.js";
import { createNewSessions, createSessionExtIdentifier } from "./authentication.js";
import User from "../models/user.js";
import Message from "../models/message.js";
import fs from "fs";

export const determineValue = async (type, value) => {
    switch (type) {
        case "image":
            return { ...value, data: fs.readFileSync(value.path).toString("base64") }
        case "text":
        default:
            return value;
    }
}

export const createMessage = async (message) => {
    try {
        const { type, value, sessionExtId, userExtId, receiverExtId, created } = message;

        if (!type || !value || !userExtId || !receiverExtId) {
            return;
        }

        let existingSession = await Session.findOne({
            externalIdentifier: sessionExtId || createSessionExtIdentifier(userExtId, receiverExtId),
        });

        // Start new session
        if (!existingSession) {
            existingSession = await createNewSessions(userExtId, receiverExtId);
            if (!existingSession) {
                return;
            }
        }

        const sender = await User.findOne({
            externalIdentifier: userExtId,
        }, {function (err, result) {
                if (err || !result)
                    return;
            }});

        await new Message({
            type: type,
            value: value,
            sessionId: existingSession.id,
            userId: sender.id,
            created: created
        }).save();

    } catch (error) {
        return;
    }
}

export const createExampleConversation = async (userExtId) => {
    const defaultUser = await User.findOne({
        username: "Welcome",
    }, {function (err, result) {
            if (err || !result)
                return;
        }});

    const firstMessage = {
        type: "text",
        value: "Welcome in our Whatsapp application. " +
            "You can find all users just by starting new conversation ! " +
            "From now you can send messages and pictures to share your best moment too.",
        userExtId: defaultUser.externalIdentifier,
        receiverExtId: userExtId,
        created: Date.now(),
    }
    await createMessage(firstMessage);
}