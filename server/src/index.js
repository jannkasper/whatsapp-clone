import http from "http";
import https from "https";
import express from "express";
import Io from 'socket.io';
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import formData from "express-form-data"
import mongoose from "mongoose";
import config from "./config.js";
import setRoutes from "./routes.js"
import Socket from './socket.js';

const app = express();
const protocol = config.protocol === 'http' ? http : https;

app.use(cors());
app.use(morgan("dev"));
app.use(formData.parse())
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

setRoutes(app);

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

const connect = url => {
    return mongoose.connect(url, config.db.options);
};

const init = async () => {
    server.listen(config.port, () => {console.log(`Whatsapp-clone is online at port ${config.port}`);});
    connect(config.db.prod);
    mongoose.connection.on("error", console.log);
};

init();

export default connect