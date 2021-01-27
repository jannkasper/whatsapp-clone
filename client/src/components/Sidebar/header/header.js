import React from "react";
import { Status, Chat, Menu } from "../../icons";
import defaultAvatar from "../../../img/avatar.svg"
import styles from "./header.module.scss";


function Header({ avatar, openContactsNavigation }) {
    let baseImage = defaultAvatar;
    if (avatar) {
        baseImage = `data:${avatar.type};base64,${avatar.data}`
    }

    return (
        <div className={styles.headerContainer}>
            <div className={styles.userImage}>
                <img className={styles.image} src={baseImage} alt="Avatar"/>
            </div>
            <div className={styles.iconGroup}>
                <div className={styles.icon}>
                    <Status />
                </div>
                <div className={styles.icon} onClick={() => openContactsNavigation()}>
                    <Chat />
                </div>
                <div className={styles.icon}>
                    <Menu />
                </div>
            </div>
        </div>
    )
}

export default Header