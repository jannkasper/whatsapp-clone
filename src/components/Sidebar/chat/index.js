import React from "react";
import { format } from 'date-fns';
import avatar from './avatar.jpeg';

import styles from "./chat.module.scss";


function Chat({ name, lastMessage }) {
    const imgSrc = "https://web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.24694-24%2F56153785_1248243991990441_4893929527996055552_n.jpg%3Foh%3D9e4d274df941e2c402b9fd2456501adb%26oe%3D600D383D&t=s&u=48505039955%40c.us&i=1540950096&n=Gz1Yq32UdFeIicDITVyUgHNh5I56TkfPUOjMaiw4kc0%3D";
    return (
        <div className={styles.element}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={avatar} alt="Avatar"/>
            </div>
            <divc className={styles.messageContainer}>
                <div className={styles.messageAuthor}>
                    <span>{name}</span>
                    <div>{format(lastMessage.date, "dd/MM/yyyy")}</div>
                </div>
                <div className={styles.messageText}>
                    <div className={styles.messageText_inner}>
                        <span>
                            {lastMessage.text}
                        </span>
                    </div>
                </div>
            </divc>
        </div>
    )
}

export default Chat