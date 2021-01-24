import User from "../models/user.js"

export const listUsers = async (ctx, next) => {
    try {
        const { sortType = "-created" } = ctx.request.body;
        const users = await User.find().sort(sortType);
        ctx = users;
    } catch (error) {
        next(error);
    }
}

export const signup = async (ctx, next) => {
    console.log("HI")
}

export const authenticate = async (ctx, next) => {

}

export const validateUser = async (object) => {
    console.log("HI")
}
