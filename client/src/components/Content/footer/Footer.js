import React, { useState } from "react";
import { Smiley, Clip, Ptt, } from "../../icons";
import styles from "./footer.module.scss";

function Footer({ createMessage }) {
    const [value, setValue] = useState("");

    async function handleSendFile(event) {
        // await setValue(event.target.files[0]);
        // const value = await getValue();
        createMessage({ type: "image", value: event.target.files[0] });
    }

    function handleChange(event) {
        setValue(event.target.value);
    }

    async function handleKeyDown(event) {
        if (event.key === 'Enter' && value) {
            try {
                await createMessage({ type: "text", value: value })
            } catch(e) { console.log(e) }
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
                <input
                    role="inputFile"
                    id="file"
                    type="file"
                    accept="image/jpeg, image/png"
                    onChange={event => handleSendFile(event)}
                    style={{display: "none"}}
                />
                <label htmlFor="file" className={styles.icon}>
                    <Clip />
                </label>
            </div>

            <input
                role="inputText"
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
