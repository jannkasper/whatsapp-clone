import React from "react";
import { connect } from "react-redux";
import { format } from 'date-fns';
import { setSelectedContact, closeContactsNavigation } from "../../../actions"

import avatar from "../../../img/avatar.svg";
import styles from "./contact.module.scss";


function Contact({ name, status, lastMessage, isSelected , setSelectedContact, closeContactsNavigation }) {
    debugger;
    return (
        <div className={`${styles.contactContainer} ${isSelected ? styles.contactSelected : null }`}
             onClick={() => {
                 setSelectedContact({contact: {name: name}});
                 closeContactsNavigation();
             }}>
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
const mapDispatchToProps = { setSelectedContact, closeContactsNavigation };

export default connect(null, mapDispatchToProps)(Contact);
