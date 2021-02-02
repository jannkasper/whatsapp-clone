import React from "react";
import socketIO from "socket.io-client";

const baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3001" : `https://${process.env.REACT_APP_SITE_NAME}`;

let socket;

export const connect = userExtId => {
    console.log(baseURL);
    socket = socketIO(baseURL, {
        query: { userExtId },
        forceNew: true
    });
    return socket;
};

export const getSocket = () => socket;


