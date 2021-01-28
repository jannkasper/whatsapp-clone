import React, { useRef, useEffect } from "react";
import styles from "./conversation.module.scss";
import Message from "./message";

function Conversation({ currentConversation, username }) {

    const conversationRef = useRef(null)
    const messagesList = useRef(null);

    useEffect(() => {
        console.log(messagesList.current.offsetHeight)
        conversationRef.current.scrollTop = messagesList.current.offsetHeight;
    })

    return (
        <div className={styles.conversationContainer}>
            <div className={styles.backgroundContainer}></div>
            <div className={styles.viewSize}>
                <div ref={conversationRef} className={styles.messageGroup}>
                    <div ref={messagesList} className={styles.messageList}>
                        {currentConversation?.conversation.map((message, key) => <Message key={key} text={message.text} date={message.date} isAuthor={message.author !== currentConversation.contactName}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Conversation
