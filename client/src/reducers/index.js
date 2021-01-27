import { combineReducers } from "redux";
import user from "./user";
import app from "./app";

const appReducer = combineReducers({ user, app });

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer