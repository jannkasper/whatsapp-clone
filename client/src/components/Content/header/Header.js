import React from "react";
import { Menu, Search } from "../../icons"
import styles from "./header.module.scss";
import avatar from "../../../img/avatar.svg";

function Header({ currentContact }) {


    return (
        <div className={styles.headerContainer}>
            <div className={styles.userAvatar}>
                <img className={styles.image} src={avatar} alt="Avatar"/>
            </div>
            <div className={styles.userName}>
                <span>{currentContact.name}</span>
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
