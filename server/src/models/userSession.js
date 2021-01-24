import mongoose from "mongoose";
const Schema = mongoose.Schema;


const userSessionModel = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "user", required: true },
    sessionId: { type: Schema.Types.ObjectId, ref: "session", required: true }
});


export default mongoose.model("userSession", userSessionModel);