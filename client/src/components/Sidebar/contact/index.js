import React from "react";
import { connect } from "react-redux";
import { format, differenceInDays, isToday, isYesterday } from 'date-fns';
import { setSelectedContact, closeContactsNavigation, selectConversation } from "../../../actions"

import styles from "./contact.module.scss";
import defaultAvatar from "../../../img/avatar.svg";
import { Photo } from "../../icons";


function Contact({ externalIdentifier, name, profileImage, status, lastMessage, isSelected , setSelectedContact, closeContactsNavigation, selectConversation }) {

    let baseImage = defaultAvatar;
    if (profileImage) {
        baseImage = `data:${profileImage.type};base64,${profileImage.data}`
    }

    function convertDate(date) {
        date = (typeof date === 'string' || date instanceof String) ? Date.parse(date) : date;
        if (isToday(date)) {
            return "Today";
        } else if (isYesterday(date)) {
            return "Yesterday";
        } else if ( differenceInDays(Date.now(), date) <= 7 ) {
            return format(date, "dddd");
        } else {
            format(date, "dd/MM/yyyy");
        }
    }

    function determineMessageContent(message) {
        switch(message.type) {
            case "image":
                return <><Photo /> Photo</>;
            default:
                return message.value;
        }
    }
    return (
        <div className={`${styles.contactContainer} ${isSelected ? styles.contactSelected : null }`}
             onClick={() => {
                 setSelectedContact({contactExtId: externalIdentifier });
                 selectConversation({contactExtId: externalIdentifier })
                 closeContactsNavigation();
             }}>
            <div className={styles.contactImage}>
                <img src={baseImage} alt="profileImage"/>
            </div>
            <div className={styles.contactDetails}>
                <div className={styles.contactName}>
                    <span>{name}</span>
                    { lastMessage ? <div>{convertDate(lastMessage.created)}</div> : null}
                </div>
                <div className={styles.contactLastMessage}>
                    <div className={styles.contactLastMessage_inner}>
                        <span className={styles.span}>
                            {lastMessage ? determineMessageContent(lastMessage) : status}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapDispatchToProps = { setSelectedContact, closeContactsNavigation, selectConversation };

export default connect(null, mapDispatchToProps)(Contact);
