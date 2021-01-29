import React from "react";
import { connect } from "react-redux";
import { format, differenceInDays, isToday, isYesterday } from 'date-fns';
import { setSelectedContact, closeContactsNavigation, selectedConversation } from "../../../actions"

import avatar from "../../../img/avatar.svg";
import styles from "./contact.module.scss";


function Contact({ name, status, lastMessage, isSelected , setSelectedContact, closeContactsNavigation, selectedConversation }) {

    function convertDate(date) {
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
    return (
        <div className={`${styles.contactContainer} ${isSelected ? styles.contactSelected : null }`}
             onClick={() => {
                 setSelectedContact({contact: {name: name }});
                 selectedConversation({contact: {name: name }})
                 closeContactsNavigation();
             }}>
            <div className={styles.contactImage}>
                <img src={avatar} alt="Avatar"/>
            </div>
            <div className={styles.contactDetails}>
                <div className={styles.contactName}>
                    <span>{name}</span>
                    { lastMessage ? <div>{convertDate(lastMessage.date)}</div> : null}
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
const mapDispatchToProps = { setSelectedContact, closeContactsNavigation, selectedConversation };

export default connect(null, mapDispatchToProps)(Contact);
