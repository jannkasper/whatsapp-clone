import React from "react";

import styles from "./chats.module.scss";
import Chat from "../chat";


function Chats() {

    const chats = [
        { name: "Nick", message: {text: "Hello", date: Date.now() } },
        { name: "Mark", message: {text: "Hello", date: Date.now() } },
        { name: "Agata", message: {text: "Hello", date: Date.now() } },
    ];

    return (
        <div className={styles.chats}>
            {chats.map(chat => <Chat name={chat.name} lastMessage={chat.message} />)}
        </div>
    )
}

export default Chats