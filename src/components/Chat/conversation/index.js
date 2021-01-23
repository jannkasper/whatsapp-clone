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
        {text: "Toto jest mój projekt odpalony, robię wygląd a potem serwis żeby działało", date: Date.now(), isOwner: true},
        {text: "Toto jest mój projekt odpalony, robię wygląd a potem serwis żeby działało", date: Date.now(), isOwner: true},
        {text: "Toto jest mój projekt odpalony, robię wygląd a potem serwis żeby działało", date: Date.now(), isOwner: true},
        {text: "Toto jest mój projekt odpalony, robię wygląd a potem serwis żeby działało", date: Date.now(), isOwner: true},
        {text: "Toto jest mój projekt odpalony, robię wygląd a potem serwis żeby działało", date: Date.now(), isOwner: true},
        {text: "Toto jest mój projekt odpalony, robię wygląd a potem serwis żeby działało", date: Date.now(), isOwner: true},
        {text: "Toto jest mój projekt odpalony, robię wygląd a potem serwis żeby działało", date: Date.now(), isOwner: true},
        {text: "Toto jest mój projekt odpalony, robię wygląd a potem serwis żeby działało", date: Date.now(), isOwner: true},
        {text: "Toto jest mój projekt odpalony, robię wygląd a potem serwis żeby działało", date: Date.now(), isOwner: true},
        {text: "Toto jest mój projekt odpalony, robię wygląd a potem serwis żeby działało", date: Date.now(), isOwner: true},
        {text: "Toto jest mój projekt odpalony, robię wygląd a potem serwis żeby działało", date: Date.now(), isOwner: true},
        {text: "Toto jest mój projekt odpalony, robię wygląd a potem serwis żeby działało", date: Date.now(), isOwner: true},
        {text: "Toto jest mój projekt odpalony, robię wygląd a potem serwis żeby działało", date: Date.now(), isOwner: true},
        {text: "Toto jest mój projekt odpalony, robię wygląd a potem serwis żeby działało", date: Date.now(), isOwner: true},
        {text: "Toto jest mój projekt odpalony, robię wygląd a potem serwis żeby działało", date: Date.now(), isOwner: true},
        {text: "Toto jest mój projekt odpalony, robię wygląd a potem serwis żeby działało", date: Date.now(), isOwner: true},
        {text: "Toto jest mój projekt odpalony, robię wygląd a potem serwis żeby działało", date: Date.now(), isOwner: true},
        {text: "Toto jest mój projekt odpalony, robię wygląd a potem serwis żeby działało", date: Date.now(), isOwner: true},
        {text: "Toto jest mój projekt odpalony, robię wygląd a potem serwis żeby działało", date: Date.now(), isOwner: true},
        {text: "Toto jest mój projekt odpalony, robię wygląd a potem serwis żeby działało", date: Date.now(), isOwner: true},
        {text: "Toto jest mój projekt odpalony, robię wygląd a potem serwis żeby działało", date: Date.now(), isOwner: true},

        {text: " żeby działało", date: Date.now(), isOwner: true},
    ]

    return (
        <div className={styles.conversation}>
            <div className={styles.conversation_background}></div>
            <div className={styles.outer}>
                <div ref={conversationRef} className={styles.conversation_messages}>
                    <div ref={messagesList} className={styles.inner}>
                        {messages.map(message => <Message text={message.text} date={message.date} isOwner={message.isOwner}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Conversation
