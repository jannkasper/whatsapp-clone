import { getIO } from './index.js';
import User from "./models/user.js";
import { createMessage } from "./utils/message.js"

export default class Socket {
    constructor(params) {
        const { userExtId, socket } = params;

        this._userExtId = userExtId;
        this.socket = socket;
        this.socket.join(userExtId);
        this.handleInit()
    }

    async handleInit() {
        User.updateOne({ externalIntermediary: this._userExtId }, { active: true });
        await this.joinSession(this._userExtId, this.socket);
        this.handleSocket(this.socket);
    }

    joinSession(userExtId, socket) {
        return new Promise((resolve, reject) => {
            socket.join(userExtId, err => {
                if (err) {
                    reject();
                }
                resolve();
            });
        });
    }

    async handleSocket (socket) {

        socket.on("MESSAGE", async payload => {
            const receiverExtId = payload.receiverExtId;

            const message = {
                type: payload.type,
                value: payload.value,
                sessionExtId: payload.externalIdentifier,
                userExtId: payload.userExtId,
                status: payload.status,
                created: payload.created,
            }

            getIO().to(receiverExtId).emit('MESSAGE', { message: message });
            createMessage(payload)
        })

        socket.on('disconnect', () => this.handleDisconnect(socket));

        socket.on('USER_DISCONNECT', () => this.handleDisconnect(socket));
    }

    async handleDisconnect(socket) {
        User.updateOne({ externalIntermediary: this._userExtId }, { active: false });
        socket.disconnect(true);
    }
}