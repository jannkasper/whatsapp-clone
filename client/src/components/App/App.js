import React, { useEffect } from "react";
import Content from "../Content";
import Sidebar from "../Sidebar";
import Home from "../Home";
import Popup from "../Popup";
import {connect as connectSocket} from "../../util/socket";

import './App.css';
import ProgressBar from "../ProgressBar";

function App({ showPopup, hasSelectedConversation, userExtId, receiveMessage, receiveNewContact, isLoading, completed }) {

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

        socket.on("USER_ENTER", payload => {
            receiveNewContact(payload);
        })
    }

    return (
        <div className="App">
            {isLoading ? <ProgressBar completed={completed} />
            : (
                <>
                    <div className={`inner ${showPopup ? "blur" : "zoomOut"}`} >
                        <Sidebar/>
                        {
                            hasSelectedConversation ?
                                <Content/> : <Home showPopup={showPopup}/>
                        }
                    </div>
                    <Popup showPopup={showPopup}/>
                </>
            )}


        </div>
    );
}

export default App;
