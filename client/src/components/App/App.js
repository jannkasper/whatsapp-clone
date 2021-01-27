import React, { useState, useEffect } from "react";
import Content from "../Content";
import Sidebar from "../Sidebar";
import Home from "../Home";
import Popup from "../Popup";

import './App.css';

function App({ showPopup }) {

    return (
        <div className="App">
            <div className="inner" style={showPopup ? { filter: "blur(4px)" } : null }>
                <Sidebar />
                <Home />
                {/*<Content />*/}
            </div>
            <Popup showPopup={showPopup} />
        </div>
    );
}

export default App;
