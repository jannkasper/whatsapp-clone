import express from "express";
// import bodyParser from "koa-body-parser";
import { validateUser, signup, authenticate } from "./controllers/users.js";

const router = express.Router();
//authentication
router.post('/signup', signup);
router.post('/authenticate', validateUser, authenticate);

export default (app) => {
    app.use("/api", router);


    app.use((req, res, next) => {
        const error = new Error("Not found");
        error.status = 404;
        next(error);
    });

    app.use((error, req, res, next) => {
        res.status(error.status || 500).json({message: error.message})
    });
}
