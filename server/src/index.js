import http from "http";
import https from "https";
import Koa from "koa";
import cors from 'kcors';
import Io from 'socket.io';
import mongoose from "mongoose";
import config from "./config.js";
import setRoutes from "./routes.js"

const app = new Koa();
const protocol = config.protocol === 'http' ? http : https;

// app.use(ctx => {
//     ctx.body = 'Hello Koa';
// });

app.use(
    cors({
        origin: process.env.NODE_ENV === 'development' ? '*' : process.env.SITE_URL,
        allowMethods: ['GET', 'HEAD', 'POST'],
        credentials: true,
    }),
);

setRoutes(app);

const server = protocol.createServer(app.callback());

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