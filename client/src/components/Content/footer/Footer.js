import React, { useState, useEffect } from "react";
import { Smiley, Clip, Ptt, } from "../../icons";
import styles from "./footer.module.scss";

function Footer({ createMessage }) {
    const [value, setValue] = useState("");
    const [fileSelector, setFileSelector] = useState(null);

    function buildFileSelector(){
        const fileSelector = document.createElement('input');
        fileSelector.setAttribute('type', 'file');
        fileSelector.setAttribute('accept', 'image/jpeg, image/png');
        // fileSelector.setAttribute('multiple', 'multiple');
        fileSelector.onchange = handleSendFile;
        return fileSelector;
    }

    useEffect(() => {
        if (fileSelector == null) {
            setFileSelector(buildFileSelector());
        }
    })

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
            await createMessage({ type: "text", value: value });
            setValue("");
        }
    }
    async function handleFileSelect(event) {
        event.preventDefault();
        fileSelector.click();
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
                <div className={styles.icon} onClick={event => handleFileSelect(event)}>
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
