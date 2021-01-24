import mongoose from "mongoose";
import config from "../config";

let store;

const getStore = () => {
    if (store === undefined) {
        store = mongoose.connect(config.db.prod, config.db.options);
    }

    return store;
}

export default getStore;