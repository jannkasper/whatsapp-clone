import React from "react";
import styles from "./message.module.scss";
import { format } from "date-fns";
import { MessageCheck, TailIn, TailOut } from "../../../icons"

function Message(props) {

    return (
        <div className={styles.viewResize}>
            <div className={styles.messageContainer}>
                <div className={[styles.message, props.isAuthor ? styles.sendMessage : styles.receivedMessage].join(' ')}>
                    { props.isAuthor ? (
                        <div className={styles.sendMessageCorner}>
                            <TailOut />
                        </div>
                    ) : (
                        <div className={styles.receivedMessageCorner}>
                            <TailIn />
                        </div>
                    )
                    }
                    { props.type === "text" ? (
                        <div className={styles.message_messageText}>
                            {props.value}
                            <span style={{width: props.isAuthor ? "74px" : "54px", display: "inline-block"}}/>
                        </div>
                    ) : (
                        <div className={styles.message_messageImage}>
                            <img src={props.value}/>
                            <div className={styles.gradient}></div>
                        </div>
                    )}
                    <div className={styles.message_details}>
                        <div className={styles.message_time}>
                            {format(typeof props.created == "string" ? Date.parse(props.created) : props.created, "hh:mm")}
                        </div>
                        {props.isAuthor ?
                        <div className={styles.message_status}>
                            <MessageCheck />
                        </div> : null }
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Message
