import React, { useState } from "react";
import { Smiley, Clip, Ptt, X, Gif, Sticker } from "../../icons";
import styles from "./footer.module.scss";

function Footer({ sendMessage }) {
    const [value, setValue] = useState("");

    function handleChange(event) {
        setValue(event.target.value);
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter' && value) {
            sendMessage({ text: value });
            setValue("");
        }
    }

    return (
        <div className={styles.footerContainer}>

            <div className={styles.iconGroup}>
                {/*<div className={styles.icon}>*/}
                {/*    <X />*/}
                {/*</div>*/}
                <div className={styles.icon}>
                    <Smiley />
                </div>
                {/*<div className={styles.icon}>*/}
                {/*    <Gif />*/}
                {/*</div>*/}
                {/*<div className={styles.icon}>*/}
                {/*    <Sticker />*/}
                {/*</div>*/}
                <div className={styles.icon}>
                    <Clip />
                </div>
            </div>

            <input
                className={styles.userInput}
                value={value}
                onChange={event => handleChange(event)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message"
            />

            <div className={styles.iconGroup}>
                <div className={styles.icon}>
                    <Ptt />
                </div>
            </div>
        </div>
    )
}

export default Footer
