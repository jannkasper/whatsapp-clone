import React, { useState } from 'react';
import styles from "./popup.module.scss";
import avatar from "../../img/avatar.svg";


function Popup() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className={styles.popup}>
            { isLogin ? (
                    <div className={styles.popup_inner}>
                        <input className={styles.userInput} placeholder="Username"/>
                        <input className={styles.userInput} placeholder="Password"/>
                        <button className={styles.signupButton} onClick={null}>Log In</button>
                        <div className={styles.line}></div>
                        <div className={styles.text}>Don't have an account? <a onClick={() => setIsLogin(!isLogin)} target="_blank">Sign up</a> </div>
                    </div>
                ) : (
                    <div className={styles.popup_inner}>
                        <label for="image" >
                            <input id="image" type="file" style={{display: "none"}}/>
                            <p className={styles.imageInput}>Edit</p>
                            <img className={styles.image} src={avatar} alt="Avatar"/>
                        </label>



                        <input className={styles.userInput} placeholder="Phone number"/>
                        <input className={styles.userInput} placeholder="Username"/>
                        <input className={styles.userInput} placeholder="Password"/>
                        <button className={styles.signupButton} onClick={null}>Sign up</button>
                        <div className={styles.line}></div>
                        <div className={styles.text}>Have an account? <a onClick={() => setIsLogin(!isLogin)} target="_blank">Log in</a> </div>
                    </div>
                )}
        </div>
    );

};

export default Popup;