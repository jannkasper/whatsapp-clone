import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userModel = new Schema({
    phoneNumber: { type: Number, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    avatar : { type: Object },
    created: { type: Date, default: Date.now() }
});

export default mongoose.model("user", userModel);
