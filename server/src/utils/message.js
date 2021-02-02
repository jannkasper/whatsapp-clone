import Session from "../models/session.js";
import { createNewSessions, createSessionExtIdentifier } from "./authentication.js";
import User from "../models/user.js";
import Message from "../models/message.js";


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