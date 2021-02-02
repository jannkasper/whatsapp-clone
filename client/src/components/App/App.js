import React, { useEffect } from "react";
import Content from "../Content";
import Sidebar from "../Sidebar";
import Home from "../Home";
import Popup from "../Popup";
import {connect as connectSocket} from "../../util/socket";

import './App.css';

function App({ showPopup, hasSelectedConversation, userExtId, receiveMessage }) {

    useEffect(() => {
        if (userExtId) {
            const socket = connectSocket(userExtId);
            handleSocket(socket);
        }
    }, [userExtId])

    function handleSocket (socket) {
        socket.on('disconnect', () => {
        });

        socket.on("MESSAGE", payload => {
            receiveMessage(payload);
        })
    }

    return (
        <div className="App">
            <div className="inner" style={showPopup ? { filter: "blur(4px)" } : null }>
                <Sidebar />
                {
                    hasSelectedConversation ?
                        <Content /> : <Home />
                }
            </div>
            <Popup showPopup={showPopup} />
        </div>
    );
}

export default App;
