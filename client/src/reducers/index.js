import { combineReducers } from "redux";
import user from "./user";
import app from "./app";
import contacts from "./contacts";

const appReducer = combineReducers({ user, app, contacts });

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer