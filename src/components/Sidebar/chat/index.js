import React from "react";
import { format } from 'date-fns';
import avatar from './avatar.jpeg';

import styles from "./chat.module.scss";


function Chat({ name, lastMessage }) {
    return (
        <div className={styles.element}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={avatar} alt="Avatar"/>
            </div>
            <divc className={styles.messageContainer}>
                <div className={styles.messageAuthor}>
                    <span>{name}</span>
                    <div>{format(lastMessage.date, "dd/MM/yyyy")}</div>
                </div>
                <div className={styles.messageText}>
                    <div className={styles.messageText_inner}>
                        <span>
                            {lastMessage.text}
                        </span>
                    </div>
                </div>
            </divc>
        </div>
    )
}

export default Chat