import React from "react";
import styles from "./message.module.scss";
import {format} from "date-fns";

function Message(props) {


    return (
        <div className={styles.outer}>
            <div className={styles.container}>
                <div className={styles.container_cornet}>
                <span data-testid="tail-out" data-icon="tail-out" className="_3N37N">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
                        <path opacity=".13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path>
                        <path fill="currentColor" d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path>
                    </svg>
                </span>
                </div>
                <div className={styles.message}>
                    <div className={styles.message_text}>
                        {props.text}
                        <span style={{width: "74px", display: "inline-block"}}/>
                    </div>
                    <div className={styles.message_details}>
                        <div className={styles.details_time}>
                            {format(props.date, "hh:mm")}
                        </div>
                        <div className={styles.details_confirm}>
                        <span data-testid="msg-dblcheck" aria-label=" Read " data-icon="msg-dblcheck" className="_2XORi">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15">
                                <path fill="currentColor" d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path>
                            </svg>
                        </span>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Message
