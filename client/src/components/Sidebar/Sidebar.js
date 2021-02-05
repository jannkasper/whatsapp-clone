import React, {useState} from "react";
import Header from "./header";
import Search from "./search";
import ContactGroup from "./contactGroup";

import styles from "./sidebar.module.scss";
import Notification from "./notification";
import ContactsNavigation from "../ContactsNavigation";


function Sidebar({ selectedContact, contactArray }) {
    const [searchText, setSearchText] = useState("");

    return (
        <div className={styles.sidebar}>
            <ContactsNavigation />
            <Header />
            <Notification />
            <Search placeHolder={"Search or start new chat"} searchText={searchText} setSearchText={setSearchText} />
            <ContactGroup chats={contactArray.filter(contact => contact.username.toLowerCase().includes(searchText.toLowerCase()))} selectedContact={selectedContact} isSidebar />
        </div>
    )
}

export default Sidebar