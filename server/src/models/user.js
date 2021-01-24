import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userModel = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    avatarImage : { type: String, required: false, unique: false },
    created: { type: Date, default: Date.now() }
});

export default mongoose.model("user", userModel);
