
import styles from "./contactsNavigation.module.scss"
import ContactGroup from "../Sidebar/contactGroup";
import React, {useState, useEffect} from "react";
import Header from "./header";
import Search from "../Sidebar/search";

const ContactsNavigation = ({ contactArray, openContactsNavigation }) => {

    const [visibility, setVisibility] = useState("hidden");


    useEffect(() => {
        setTimeout(function() {
            setVisibility(null);
        }, 1000);
    })

    return (
        <div className={`${styles.container} ${openContactsNavigation ? styles.open : styles.close}`} style={{visibility: visibility}} >
            <Header />
            <Search placeHolder={"Search contacts"}/>
            <ContactGroup chats={contactArray} />
        </div>
    )
}

export default ContactsNavigation