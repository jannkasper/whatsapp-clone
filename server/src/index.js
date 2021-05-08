import http from "http";
import https from "https";
import Io from 'socket.io';
import mongoose from "mongoose";
import config from "./config.js";
import Socket from './socket.js';
import app from "./app.js";

const protocol = config.protocol === 'http' ? http : https;
const server = protocol.createServer(app);

const io = Io(server, {
    pingInterval: 20000,
    pingTimeout: 5000,
});

export const getIO = () => io;

io.on('connection', async socket => {
    const userExtId = socket.handshake.query.userExtId;
    new Socket({ userExtId, socket });
});

export const connect = url => {
    return mongoose.connect(url, config.db.options);
};

const init = async () => {
    server.listen(config.port, () => {console.log(`Whatsapp-clone is online at port ${config.port}`);});
    connect(config.db.prod);
    mongoose.connection.on("error", console.log);
};

function areWeTestingWithJest() {
    return process.env.JEST_WORKER_ID !== undefined;
}
if (!areWeTestingWithJest()) {
    init();
}
