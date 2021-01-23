import React from "react";
import styles from "./header.module.scss";
import avatar from "../../Sidebar/chat/avatar.jpeg";

function Header() {


    return (
        <div className={styles.header}>
            <div className={styles.header_image}>
                <img className={styles.image} src={avatar} alt="Avatar"/>
            </div>
            <div className={styles.header_name}>
                <span>Joanna Lisiak</span>
            </div>
            <div className={styles.header_icons}>
                <div className={styles.icon}>
                    <span data-testid="search-alt" data-icon="search-alt" className="">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="currentColor" d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"></path>
                        </svg>
                    </span>
                </div>
                <div className={styles.icon}>
                        <span data-testid="menu" data-icon="menu" className="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path>
                            </svg>
                        </span>
                </div>
            </div>
        </div>
    )
}

export default Header
