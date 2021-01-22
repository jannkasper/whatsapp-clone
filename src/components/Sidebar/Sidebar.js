import React from "react";
import Header from "./header";
import Form from "./form";
import Chats from "./chats";

import styles from "./sidebar.module.scss";
import Notification from "./notification";


function Sidebar() {

    return (
        <div className={styles.sidebar}>
            <Header />
            <Notification />
            <Form />
            <Chats />
        </div>
    )
}

export default Sidebar