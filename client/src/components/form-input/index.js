import React from "react";
import cn from "classnames";
import styles from "./form-input.module.scss";
import {Alert} from "../icons";

const FormInput = ({ label, inputInfo, hasError = false, errorMessage, ...props }) => {
    return (
        <div className={styles.container}>
            <div className={styles.inputContainer}>
            <input className={cn(styles.input, hasError && styles.hasError)} htmlFor={label} {...props} />
                {hasError && <Alert className={styles.alert} />}
            </div>
            {hasError && <p className={styles.inputMessage}>{errorMessage}</p>}
        </div>
    )
}

export default FormInput