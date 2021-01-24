import React, { useState } from "react";
import './App.css';
import Content from "./components/Content";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home";
import Popup from "./components/Popup";

function App() {
    const [showPopup, setShowPopup] = useState(false);

    function togglePopup() {
        setShowPopup(!showPopup);
    }

    return (
        <div className="App">
            {/*<button onClick={togglePopup.bind(this)}> Click To Launch Popup</button>*/}
            <div className="inner">
                <Sidebar />
                <Home />
                {/*<Content />*/}
            </div>
            <Popup
                text='Click "Close Button" to hide popup'
                closePopup={togglePopup.bind(this)}
            />
        </div>
    );
}

export default App;
