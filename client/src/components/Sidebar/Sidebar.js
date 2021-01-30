import React from "react";
import Header from "./header";
import Search from "./search";
import ContactGroup from "./contactGroup";

import styles from "./sidebar.module.scss";
import Notification from "./notification";
import ContactsNavigation from "../ContactsNavigation";


function Sidebar({ selectedContact, contactArray }) {
    debugger;
    return (
        <div className={styles.sidebar}>
            <ContactsNavigation />
            <Header />
            <Notification />
            <Search placeHolder={"Search or start new chat"}/>
            <ContactGroup chats={contactArray} selectedContact={selectedContact} isSidebar />
        </div>
    )
}

export default Sidebar