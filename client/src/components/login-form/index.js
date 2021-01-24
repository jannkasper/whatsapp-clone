import React from "react";
import { Formik } from "formik";

import logo from "../../img/logo.svg";
import styles from "./login-form.module.scss";

const LoginForm = ({ handleChangeMode }) => {

    return (
        <Formik>
            {
                ({ values, errors, touched, status,
                     handleChange, handleBlur, handleSubmit, isSubmitting
                 }) => (
                    <form onSubmit={handleSubmit} className={styles.popup_inner}>
                        <img className={styles.image} src={logo} alt="Avatar" style={{width:"35%", height: "35%"}}/>
                        <input className={styles.userInput} placeholder="Username"/>
                        <input className={styles.userInput} placeholder="Password"/>
                        <button className={styles.signupButton} onClick={null}>Log In</button>
                        <div className={styles.line}></div>
                        <div className={styles.text}>Don't have an account? <a onClick={() => handleChangeMode()} target="_blank">Sign up</a> </div>
                    </form>
                )
            }
        </Formik>
    )
}

export default LoginForm