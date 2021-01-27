import React from "react";
import Contact from "../contact";

import styles from "./contactGroup.module.scss";


function ContactGroup(props) {
    debugger;
    return (
        <div className={styles.contactGroupContainer}>
            <div className={`${styles.resizeView} ${props.isSidebar ? styles.sizeSidebar : styles.sizeNewChat}`}>
                {props.chats.map(chat => <Contact name={chat.name} status={chat.status} lastMessage={chat.message} isSelected={props.selectedContact?.name === chat.name } />)}
            </div>
        </div>
    )
}

export default ContactGroup