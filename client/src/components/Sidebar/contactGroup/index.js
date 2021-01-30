import React from "react";
import Contact from "../contact";

import styles from "./contactGroup.module.scss";


function ContactGroup(props) {
    return (
        <div className={styles.contactGroupContainer}>
            <div className={`${styles.resizeView} ${props.isSidebar ? styles.sizeSidebar : styles.sizeNewChat}`}>
                {props.chats.map(contact =>
                    <Contact
                        name={contact.username}
                        profileImage={contact.profileImage}
                        status={contact.status}
                        lastMessage={contact.message}
                        isSelected={props.selectedContact?.name === contact.username }
                    />)}
            </div>
        </div>
    )
}

export default ContactGroup