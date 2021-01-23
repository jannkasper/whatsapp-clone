import React from "react";
import Header from "./header";
import Conversation from "./conversation";
import Footer from "./footer";
import styles from "./content.module.scss";

function Index() {

    return (
        <div className={styles.mainContainer}>
            <Header />
            <Conversation />
            <Footer />
        </div>
    )
}

export default Index
