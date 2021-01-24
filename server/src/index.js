import http from "http";
import https from "https";
import Koa from "koa";
import Io from 'socket.io';
import mongoose from "mongoose";
import config from "./config.js";
import setRoutes from "./routes.js"

const app = new Koa();
const protocol = config.protocol === 'http' ? http : https;

// app.use(ctx => {
//     ctx.body = 'Hello Koa';
// });

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