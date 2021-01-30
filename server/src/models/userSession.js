import mongoose from "mongoose";
const Schema = mongoose.Schema;


const userSessionModel = new Schema({
    externalIdentifier: { type : String, required: true, unique: true},
    sessionId: { type: Schema.Types.ObjectId, ref: "session", required: true },
    userId: { type: Schema.Types.ObjectId, ref: "user", required: true },
    sockedId: { type : String },
    publicKey: { type: Object },

    created: { type: Date, default: Date.now() }
});


export default mongoose.model("userSession", userSessionModel);