import React from "react";
import Loader from "react-loader-spinner";

import styles from "./progressBar.module.scss"

const ProgressBar = (props) => {
    const { completed } = props;

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: "#056162",
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: "width 1s ease-in-out"
    }

    return (
        <div className={styles.progressContainer}>
            <Loader
                type="TailSpin"
                color="#a6a8aa"
                height={80}
                width={80}
            />
            <div className={styles.containerStyles}>
                <div className={styles.fillerStyles} style={{width: `${completed}%`}}>
                    {/*<span className={styles.labelStyles}>{`${completed}%`}</span>*/}
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;