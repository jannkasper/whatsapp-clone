import React from "react";
import { format } from 'date-fns';

import avatar from "../../../img/avatar.svg";
import styles from "./contact.module.scss";


function Contact({ name, status, lastMessage }) {
    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactImage}>
                <img src={avatar} alt="Avatar"/>
            </div>
            <div className={styles.contactDetails}>
                <div className={styles.contactName}>
                    <span>{name}</span>
                    { lastMessage ? <div>{format(lastMessage.date, "dd/MM/yyyy")}</div> : null}
                </div>
                <div className={styles.contactLastMessage}>
                    <div className={styles.contactLastMessage_inner}>
                        <span>
                            {lastMessage ? lastMessage.text : status}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact