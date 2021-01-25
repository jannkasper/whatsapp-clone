import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userModel = new Schema({
    phoneNumber: { type: Number, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    avatar : {
        data:  Buffer,
        contentType: String,
        fieldName: String,
        originalFilename: String,
        size: Number,
    },
    created: { type: Date, default: Date.now() }
});

export default mongoose.model("user", userModel);
