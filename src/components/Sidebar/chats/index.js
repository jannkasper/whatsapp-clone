import React from "react";

import styles from "./chats.module.scss";
import Chat from "../chat";


function Chats() {

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
        <div className={styles.chats}>
            <div className={styles.chats_block}>
                <div className={styles.chats_inner}>
                    {chats.map(chat => <Chat name={chat.name} lastMessage={chat.message} />)}
                </div>
            </div>
        </div>
    )
}

export default Chats