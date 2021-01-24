import mongoose from "mongoose";
const Schema = mongoose.Schema;

const messageModel = new Schema({
    type: { type: String, default: "text" },
    value: { type: String, required: true },
    status: { type: String, default: 0 },
    sessionId: { type: Schema.Types.ObjectId, ref: "session", required: true },
    userId: { type: Schema.Types.ObjectId, ref: "user", required: true },
    created: { type: Date, default: Date.now() }
})

export default mongoose.model("message", messageModel);