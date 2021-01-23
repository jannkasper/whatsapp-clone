import React from "react";
import styles from "./message.module.scss";
import {format} from "date-fns";

function Message(props) {


    return (
        <div className={styles.viewResize}>
            <div className={styles.messageContainer}>
                { props.isOwner ? (
                    <div className={styles.sendMessageCorner}>
                        <span data-testid="tail-out" data-icon="tail-out" className="_3N37N">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
                                <path opacity=".13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path>
                                <path fill="currentColor" d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path>
                            </svg>
                        </span>
                    </div>
                ) : (
                    <div className={styles.receivedMessageCorner}>
                        <span data-testid="tail-in" data-icon="tail-in" className="_3N37N">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
                                <path opacity=".13" fill="#0000000" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path>
                                <path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path>
                            </svg>
                        </span>
                    </div>
                )
                }
                <div className={[styles.message, props.isOwner ? styles.sendMessage : styles.receivedMessage].join(' ')}>
                    <div className={styles.message_messageText}>
                        {props.text}
                        <span style={{width: props.isOwner ? "74px" : "54px", display: "inline-block"}}/>
                    </div>
                    <div className={styles.message_details}>
                        <div className={styles.message_time}>
                            {format(props.date, "hh:mm")}
                        </div>
                        {props.isOwner ?
                        <div className={styles.message_status}>
                            <span data-testid="msg-dblcheck" aria-label=" Read " data-icon="msg-dblcheck" className="_2XORi">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15">
                                    <path fill="currentColor" d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path>
                                </svg>
                            </span>
                        </div> : null }
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Message
