import React, { useState } from 'react';
import LoginForm from "../login-form";
import SignupForm from "../signup-form";

import styles from "./popup.module.scss";

function Popup({ showPopup }) {
    const [isLogin, setIsLogin] = useState(true);

    const handleChangeMode = (event) => {
        event.preventDefault();
        setIsLogin(!isLogin);
    }

    return showPopup ? (
        <div className={styles.popup}>
            { isLogin ? <LoginForm handleChangeMode={handleChangeMode} /> : <SignupForm handleChangeMode={handleChangeMode} /> }
        </div>
    ) : null;

};

export default Popup;