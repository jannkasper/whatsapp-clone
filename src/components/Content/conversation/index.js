import React, { useRef, useEffect } from "react";
import styles from "./conversation.module.scss";
import Message from "./message";

function Conversation() {

    const conversationRef = useRef(null)
    const  messagesList = useRef(null);

    useEffect(() => {
        console.log(messagesList.current.offsetHeight)
        conversationRef.current.scrollTop = messagesList.current.offsetHeight;
    })

    const messages = [
        {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), isOwner: true},
        {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), isOwner: true},
        {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), isOwner: true},
        {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), isOwner: true},
        {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), isOwner: false},
        {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), isOwner: false},
        {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), isOwner: true},
        {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), isOwner: true},
        {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), isOwner: false},
        {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), isOwner: true},
        {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), isOwner: false},
        {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), isOwner: true},
        {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), isOwner: true},
        {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), isOwner: false},
        {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), isOwner: false},
        {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), isOwner: true},
        {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), isOwner: false},
        {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), isOwner: true},
        {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), isOwner: true},
        {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), isOwner: false},
        {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", date: Date.now(), isOwner: true},
        {text: "Lorem ipsum dolor sit amet", date: Date.now(), isOwner: false},
        {text: "Lorem ipsum dolor sit amet", date: Date.now(), isOwner: true},
    ]

    return (
        <div className={styles.conversationContainer}>
            <div className={styles.backgroundContainer}></div>
            <div className={styles.viewSize}>
                <div ref={conversationRef} className={styles.messageGroup}>
                    <div ref={messagesList}>
                        {messages.map(message => <Message text={message.text} date={message.date} isOwner={message.isOwner}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Conversation
