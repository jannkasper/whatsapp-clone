import React from "react";
import Header from "./header";
import Form from "./form";
import Chats from "./chats";

import styles from "./sidebar.module.scss";


function Sidebar() {

    return (
        <>
            <Header />
            <Form />
            <Chats />
        </>
    )
}

export default Sidebar