
import styles from "./contactsNavigation.module.scss"
import ContactGroup from "../Sidebar/contactGroup";
import React, {useState, useEffect} from "react";
import Header from "./header";
import Search from "../Sidebar/search";

const ContactsNavigation = ({ openContactsNavigation }) => {

    const [visibility, setVisibility] = useState("hidden");


    useEffect(() => {
        setTimeout(function() {
            setVisibility(null);
        }, 1000);
    })

    const chats = [
        { name: "Nick", status: "Hey there! I am using WhatsApp first!" },
        { name: "Mark", status: "Hey there! WhatsApp here" },
        { name: "Agata", status: "Hey there! I am using WhatsApp" },
        { name: "Nick", status: "Hey there! I am using WhatsApp" },
        { name: "Mark", status: "Hey there! I am using WhatsApp" },
        { name: "Agata", status: "Hey there! I am using WhatsApp" },
        { name: "Nick", status: "Hey there! I am using WhatsApp" },
        { name: "Nick", status: "Hey there! I am using WhatsApp" },
        { name: "Mark", status: "Hey there! I am using WhatsApp" },
        { name: "Mark", status: "Hey there! I am using WhatsApp" },
        { name: "Nick", status: "Hey there! I am using WhatsApp" },
        { name: "Mark", status: "Hey there! I am using WhatsApp" },
        { name: "Agata", status: "Hey there! I am using WhatsApp" },
        { name: "Nick", status: "Hey there! I am using WhatsApp" },
        { name: "Nick", status: "Hey there! I am using WhatsApp" },
        { name: "Mark", status: "Hey there! I am using WhatsApp" },
        { name: "Mark", status: "Hey there! I am using WhatsApp" },
    ];

    return (
        <div className={`${styles.container} ${openContactsNavigation ? styles.open : styles.close}`} style={{visibility: visibility}} >
            <Header />
            <Search placeHolder={"Search contacts"}/>
            <ContactGroup chats={chats} />
        </div>
    )
}

export default ContactsNavigation