import { getIO } from './index.js';
import User from "./models/user.js";

export default class Socket {
    constructor(params) {
        const { userExtId, socket } = params;

        this._userExtId = userExtId;
        this.socket = socket;
        this.handleInit()
    }

    async handleInit() {
        User.updateOne({ externalIntermediary: this._userExtId }, { active: true });
        this.handleSocket(this.socket);
    }

    async handleSocket (socket) {

        socket.on("MESSAGE", async payload => {
            console.log("MESSAGE TRIGGER");
            const test = undefined;
        })

        socket.on('disconnect', () => this.handleDisconnect(socket));

        socket.on('USER_DISCONNECT', () => this.handleDisconnect(socket));
    }

    async handleDisconnect(socket) {
        User.updateOne({ externalIntermediary: this._userExtId }, { active: false });
        socket.disconnect(true);
    }
}