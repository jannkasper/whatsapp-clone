import React from "react";
import { format } from 'date-fns';

import avatar from "../../../img/avatar.svg";
import styles from "./contact.module.scss";


function Contact({ name, lastMessage }) {
    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactImage}>
                <img src={avatar} alt="Avatar"/>
            </div>
            <divc className={styles.contactDetails}>
                <div className={styles.contactName}>
                    <span>{name}</span>
                    <div>{format(lastMessage.date, "dd/MM/yyyy")}</div>
                </div>
                <div className={styles.contactLastMessage}>
                    <div className={styles.contactLastMessage_inner}>
                        <span>
                            {lastMessage.text}
                        </span>
                    </div>
                </div>
            </divc>
        </div>
    )
}

export default Contact