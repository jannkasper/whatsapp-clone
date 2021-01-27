import React from "react";
import Header from "./header";
import Search from "./search";
import ContactGroup from "./contactGroup";

import styles from "./sidebar.module.scss";
import Notification from "./notification";
import ContactsNavigation from "../ContactsNavigation";


function Sidebar() {
    debugger;

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
        <div className={styles.sidebar}>
            <ContactsNavigation />
            <Header />
            <Notification />
            <Search placeHolder={"Search or start new chat"}/>
            <ContactGroup chats={chats} isSidebar />
        </div>
    )
}

export default Sidebar