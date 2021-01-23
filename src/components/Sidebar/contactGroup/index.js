import React from "react";
import Contact from "../contact";

import styles from "./contactGroup.module.scss";


function ContactGroup() {
    const chats = [
        { name: "Nick", message: {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", date: Date.now() } },
        { name: "Mark", message: {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", date: Date.now() } },
        { name: "Agata", message: {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", date: Date.now() } },
        { name: "Nick", message: {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", date: Date.now() } },
        { name: "Mark", message: {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", date: Date.now() } },
        { name: "Agata", message: {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", date: Date.now() } },
        { name: "Nick", message: {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", date: Date.now() } },
        { name: "Mark", message: {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", date: Date.now() } },
        { name: "Nick", message: {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", date: Date.now() } },
        { name: "Mark", message: {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", date: Date.now() } },
        { name: "Mark", message: {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", date: Date.now() } },
    ];

    return (
        <div className={styles.contactGroupContainer}>
            <div className={styles.resizeView}>
                {chats.map(chat => <Contact name={chat.name} lastMessage={chat.message} />)}
            </div>
        </div>
    )
}

export default ContactGroup