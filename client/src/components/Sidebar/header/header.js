import React from "react";
import { Status, Chat, Menu } from "../../icons";
import defaultAvatar from "../../../img/avatar.svg"
import styles from "./header.module.scss";


function Header({ profileImage, openContactsNavigation }) {
    let baseImage = defaultAvatar;
    if (profileImage) {
        baseImage = `data:${profileImage.type};base64,${profileImage.data}`
    }

    return (
        <div className={styles.headerContainer}>
            <div className={styles.userImage}>
                <img className={styles.image} src={baseImage} alt="profileImage"/>
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