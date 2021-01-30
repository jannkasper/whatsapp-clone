import React, { useRef, useEffect } from "react";
import styles from "./conversation.module.scss";
import Message from "./message";

function Conversation({ currentConversation, username }) {

    const conversationRef = useRef(null)
    const messagesList = useRef(null);

    useEffect(() => {
        conversationRef.current.scrollTop = messagesList.current.offsetHeight;
    })

    return (
        <div className={styles.conversationContainer}>
            <div className={styles.backgroundContainer}></div>
            <div className={styles.viewSize}>
                <div ref={conversationRef} className={styles.messageGroup}>
                    <div className={styles.conversationEmptySpace}></div>
                    <div ref={messagesList}>
                        {currentConversation?.conversation.map((message, key) => <Message key={key} type={message.type} value={message.value} created={message.created} isAuthor={message.userExtId !== currentConversation.contactExtId}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Conversation
