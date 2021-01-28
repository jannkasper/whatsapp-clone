import React from "react";
import styles from "./header.module.scss";
import { Back } from "../../icons";


function Header({ closeContactsNavigation }) {

    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerInner}>
                <div className={styles.icon} onClick={() => closeContactsNavigation()}>
                    <Back />
                </div>
                <div className={styles.headerTitle}>New Chat</div>
            </div>
        </div>
    )
}

export default Header