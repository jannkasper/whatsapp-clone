import Router from 'koa-router';
import bodyParser from "koa-body-parser";
import { listUsers } from "./controllers/users.js";

const router = new Router({ prefix: "/api"});

//users
router.get('/users', listUsers);

export default (app) => {
    app.use(bodyParser());
    app.use(router.routes());

    // app.use((ctx, next) => {
    //     const error = new Error("Not found");
    //     error.status = 404;
    //     ctx.body = {message: error.message};
    // });
}
