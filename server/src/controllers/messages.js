import { body, validationResult } from "express-validator";
import User from "../models/user.js";
import Session from "../models/session.js";
import UserSession from "../models/userSession.js";
import Message from "../models/message.js"
import shortId from "shortid";

export const loadMessages =  async  (req, res) => {
    const result = validationResult(req);

    if (!result.isEmpty()) {
        const errors = result.array({onlyFirstError: true });
        return res.status(422).json({ errors });
    }

    const userExtId = req.params.userExtId;

    if (!userExtId) {
        return res.status(400).json({ message: "There was a problem retrieve conversations."})
    }

    const user = await User.findOne({
        externalIdentifier: userExtId,
    });

    if (!user) {
        return res.status(400).json({ message: "There was a problem retrieve conversations."})
    }

    const userSessionList = await UserSession.find({
        userId : user.id,
    });

    if (!userSessionList) {
        return res.status(400).json({ message: "There was a problem retrieve conversations."})
    }

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
                    created: message.created,
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
        const { type, value, sessionExtId, userExtId, receiverExtId, createdDate } = req.body;

        if (!value || !userExtId) {
            return res.status(400).json({ message: "There was a problem saving your message."})
        }
        // Start new session
        if (!sessionExtId && receiverExtId) {
            const sender = await User.findOne({
                externalIdentifier: userExtId,
            });

            const receiver = await User.findOne({
                externalIdentifier: receiverExtId,
            });

            if ( sender && receiver) {
                const newSessions = new Session({ externalIdentifier: shortId.generate() });

                const newSenderSession = new UserSession({
                    externalIdentifier: shortId.generate(),
                    sessionId: newSessions.id,
                    userId: sender.id,
                    created: createdDate
                });
                const newReceiverSession = new UserSession({
                    externalIdentifier: shortId.generate(),
                    sessionId: newSessions.id,
                    userId: receiver.id,
                    created: createdDate
                });

                const newMessage = new Message({
                    type: type,
                    value: value,
                    sessionId: newSessions.id,
                    userId: sender.id,
                    created: createdDate
                });

                const savedSession = await newSessions.save();
                const savedSenderSession = await newSenderSession.save();
                const savedReceiverSession = await newReceiverSession.save();
                const savedMessage = await newMessage.save();


                return res.json({
                    type: savedMessage.type,
                    value: savedMessage.value,
                    sessionExtId: savedSession.externalIdentifier,
                    userExtId: sender.externalIdentifier,
                    status: savedMessage.status,
                    created: savedMessage.created,
                });

            } else {
                return res.status(400).json({ message: "There was a problem find out user data."})

            }
        } else if (sessionExtId) {
            const oldSession = await Session.findOne({
                externalIdentifier: sessionExtId
            });

            if (!oldSession) {
                return res.status(400).json({ message: "There was a problem find out session data."})

            }

            const sender = await User.findOne({
                externalIdentifier: userExtId
            });

            if (!sender) {
                return res.status(400).json({ message: "There was a problem find out user data."})

            }

            const newMessage = new Message({
                type: type,
                value: value,
                sessionId: oldSession.id,
                userId: sender.id,
                created: createdDate
            });

            const savedMessage = await newMessage.save();

            return res.json({
                type: savedMessage.type,
                value: savedMessage.value,
                sessionExtId: oldSession.externalIdentifier,
                userExtId: sender.externalIdentifier,
                status: savedMessage.status,
                created: savedMessage.created,
            });
        }

        return res.status(400).json({ message: "Missing data for saving message." });

    } catch (error) {
        return res.status(400).json({ message: "There was a problem save your message." });
    }
}