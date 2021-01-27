import React from "react";
import Header from "./header";
import Search from "./search";
import ContactGroup from "./contactGroup";

import styles from "./sidebar.module.scss";
import Notification from "./notification";
import ContactsNavigation from "../ContactsNavigation";


function Sidebar({ selectedContact }) {

    const chats = [
        { name: "Q", message: {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", date: Date.now() } },
        { name: "W", message: {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", date: Date.now() } },
        { name: "E", message: {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", date: Date.now() } },
        { name: "R", message: {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", date: Date.now() } },
        { name: "T", message: {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", date: Date.now() } },
        { name: "Y", message: {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", date: Date.now() } },
        { name: "U", message: {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", date: Date.now() } },
        { name: "I", message: {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", date: Date.now() } },
        { name: "O", message: {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", date: Date.now() } },
        { name: "P", message: {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", date: Date.now() } },
        { name: "A", message: {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", date: Date.now() } },
    ];

    return (
        <div className={styles.sidebar}>
            <ContactsNavigation />
            <Header />
            <Notification />
            <Search placeHolder={"Search or start new chat"}/>
            <ContactGroup chats={chats} selectedContact={selectedContact} isSidebar />
        </div>
    )
}

export default Sidebar