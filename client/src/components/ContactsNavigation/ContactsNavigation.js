import React, {useState, useEffect} from "react";
import ContactGroup from "../Sidebar/contactGroup";
import Header from "./header";
import Search from "../Sidebar/search";

import styles from "./contactsNavigation.module.scss"

const ContactsNavigation = ({ contactArray, openContactsNavigation }) => {

    const [visibility, setVisibility] = useState("hidden");
    const [searchText, setSearchText] = useState("");

    console.log(searchText);

    useEffect(() => {
        setTimeout(function() {
            setVisibility(null);
        }, 1000);
    })

    return (
        <div className={`${styles.container} ${openContactsNavigation ? styles.open : styles.close}`} style={{visibility: visibility}} >
            <Header />
            <Search placeHolder={"Search contacts"} searchText={searchText} setSearchText={setSearchText}/>
            <ContactGroup chats={contactArray.filter(contact => contact.username.toLowerCase().includes(searchText.toLowerCase()))} />
        </div>
    )
}

export default ContactsNavigation