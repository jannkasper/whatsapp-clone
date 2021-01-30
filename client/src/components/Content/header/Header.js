import React from "react";
import { Menu, Search } from "../../icons"
import styles from "./header.module.scss";
import defaultAvatar from "../../../img/avatar.svg";

function Header({ currentContact }) {
    let baseImage = defaultAvatar;
    if (currentContact.profileImage) {
        baseImage = `data:${currentContact.profileImage.type};base64,${currentContact.profileImage.data}`
    }

    return (
        <div className={styles.headerContainer}>
            <div className={styles.userAvatar}>
                <img className={styles.image} src={baseImage} alt="profileImage"/>
            </div>
            <div className={styles.userName}>
                <span>{currentContact.username}</span>
            </div>
            <div className={styles.iconGroup}>
                <div className={styles.icon}>
                    <Search />
                </div>
                <div className={styles.icon}>
                    <Menu />
                </div>
            </div>
        </div>
    )
}

export default Header
