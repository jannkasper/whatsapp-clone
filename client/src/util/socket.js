import React from "react";
import socketIO from "socket.io-client";
import generateUrl from "../api/config";

let socket;

export const connect = userExtId => {

    socket = socketIO(generateUrl(), {
        query: { userExtId },
        forceNew: true
    });
    return socket;
};

export const getSocket = () => socket;


