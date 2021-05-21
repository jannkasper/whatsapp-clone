import { body, validationResult } from "express-validator";
import { createSessionExtIdentifier, createNewSessions } from "../utils/authentication.js"
import User from "../models/user.js";
import Session from "../models/session.js";
import UserSession from "../models/userSession.js";
import Message from "../models/message.js"
import {determineValue} from "../utils/message.js";

export const loadMessages =  async  (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        const errors = result.array({onlyFirstError: true });
        return res.status(422).json({ errors });
    }

    const userExtId = req.params.userExtId;

    if (!userExtId) {
        return res.status(400).json({ message: "Missed userExtId in request."})
    }

    const user = await User.findOne({
        externalIdentifier: userExtId,
    });

    if (!user) {
        return res.status(400).json({ message: "There was a problem find user in database."})
    }

    const userSessionList = await UserSession.find({
        userId : user.id,
    });

    const resultArray = [];
    for(const userSession of userSessionList) {
        const messageList = await Message.find({
            sessionId : userSession.sessionId,
        }).sort("created");

        const contactUserSession = await UserSession.findOne({
            sessionId : userSession.sessionId,
            userId: { $ne: userSession.userId },
        });

        const session = await Session.findOne({
            _id : userSession.sessionId,
        });

        const contact = await User.findOne({
            _id: contactUserSession.userId
        });

        const conversationElement = {
            conversation: messageList.map(message => {
                return {
                    type: message.type,
                    value: message.value,
                    status: message.status,
                    created: Date.parse(message.created),
                    userExtId: message.userId.equals(user._id) ? user.externalIdentifier : contact.externalIdentifier
                }}),
            sessionExtId: session.externalIdentifier,
            contactExtId: contact.externalIdentifier,
        }

        resultArray.push(conversationElement);

    }

    return res.json(resultArray);

}

export const createMessage = async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        const errors = result.array({onlyFirstError: true });
        return res.status(422).json({ errors });
    }

    try {
        const { type, sessionExtId, userExtId, receiverExtId, created } = req.body;
        const { value } = (req.files.value && req.files) || req.body;

        if (!type || !value || !userExtId || !receiverExtId) {
            return res.status(400).json({ message: "Missed required values in request."})
        }

        const sender = await User.findOne({
            externalIdentifier: userExtId,
        });

        const receiver = await User.findOne({
            externalIdentifier: receiverExtId,
        });

        if (!sender || !receiver) {
            return res.status(400).json({ message: "There was a problem find user in database."})
        }

        let existingSession = await Session.findOne({
            externalIdentifier: sessionExtId || createSessionExtIdentifier(userExtId, receiverExtId),
        });

        // Start new session
        if (!existingSession) {
            existingSession = await createNewSessions(userExtId, receiverExtId);
            if (!existingSession) {
                return res.status(400).json({ message: "Problem creating new session"})
            }
        }

        const savedMessage = await new Message({
            type: type,
            value: await determineValue(type, value),
            sessionId: existingSession.id,
            userId: sender.id,
            created: created
        }).save();

        return res.json({
            type: savedMessage.type,
            value: savedMessage.value,
            sessionExtId: existingSession.externalIdentifier,
            userExtId: sender.externalIdentifier,
            status: savedMessage.status,
            created: Date.parse(savedMessage.created),
        });
    } catch (error) {
        return res.status(400).json({ message: "There was a problem save your message." });
    }
}

export const validateMessage  = [];
