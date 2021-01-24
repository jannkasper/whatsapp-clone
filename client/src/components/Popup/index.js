import React, { useState } from 'react';
import LoginForm from "../login-form";
import SignupForm from "../signup-form";

import styles from "./popup.module.scss";



function Popup() {
    const [isLogin, setIsLogin] = useState(false);

    const handleChangeMode = () => {
        setIsLogin(!isLogin);
    }

    return (
        <div className={styles.popup}>
            { isLogin ? <LoginForm handleChangeMode={handleChangeMode} /> : <SignupForm handleChangeMode={handleChangeMode} /> }
        </div>
    );

};

export default Popup;