import mongoose from "mongoose";
const Schema = mongoose.Schema;

const sessionModel = new Schema({
    externalIdentifier: { type : String, required: true, unique: true},
    created: { type: Date, default: Date.now() }
})

export default mongoose.model("session", sessionModel);