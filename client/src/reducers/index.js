import { combineReducers } from "redux";
import user from "./user";
import app from "./app";
import contacts from "./contacts";
import conversation from "./conversation";

const appReducer = combineReducers({ user, app, contacts,  conversation });

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer