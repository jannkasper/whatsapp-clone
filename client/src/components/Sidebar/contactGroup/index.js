import React from "react";
import Contact from "../contact";

import styles from "./contactGroup.module.scss";


function ContactGroup(props) {

    return (
        <div className={styles.contactGroupContainer}>
            <div className={`${styles.resizeView} ${props.isSidebar ? styles.sizeSidebar : styles.sizeNewChat}`}>
                {props.chats.map(chat => <Contact name={chat.name} status={chat.status} lastMessage={chat.message} />)}
            </div>
        </div>
    )
}

export default ContactGroup