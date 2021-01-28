import React from "react";
import Content from "../Content";
import Sidebar from "../Sidebar";
import Home from "../Home";
import Popup from "../Popup";

import './App.css';

function App({ showPopup, hasSelectedConversation }) {

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
