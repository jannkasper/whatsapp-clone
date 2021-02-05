import React from "react";
import styles from "./form-input.module.scss";
import {Alert} from "../icons";

const FormInput = ({ label, inputInfo, hasError = false, errorMessage, ...props }) => {
    return (
        <div className={styles.container}>
            <div className={styles.inputContainer}>
            <input className={[styles.input, hasError && styles.hasError].join(" ")} htmlFor={label} {...props} />
                {hasError && <Alert className={styles.alert} />}
            </div>
            {hasError && <p className={styles.inputMessage}>{errorMessage}</p>}
        </div>
    )
}

export default FormInput