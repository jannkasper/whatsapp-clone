import React from "react";
import Header from "./header";
import Search from "./search";
import ContactGroup from "./contactGroup";

import styles from "./sidebar.module.scss";
import Notification from "./notification";


function Sidebar() {

    return (
        <div className={styles.sidebar}>
            <Header />
            <Notification />
            <Search />
            <ContactGroup />
        </div>
    )
}

export default Sidebar