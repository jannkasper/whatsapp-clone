import React from "react";
import Header from "./header";
import Conversation from "./conversation";
import Footer from "./footer";
import styles from "./chat.module.scss";

function Chat() {


    return (
        <div className={styles.chat}>
            <Header />
            <Conversation />
            <Footer />
        </div>
    )
}

export default Chat
