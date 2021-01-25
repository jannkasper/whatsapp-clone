import React from "react";
import { Formik } from "formik";
// import * as Yup from "yup";
import { publicFetch } from "../../util/fetcher";

import logo from "../../img/logo.svg";
import styles from "./login-form.module.scss";

const LoginForm = ({ handleChangeMode }) => {

    return (
        <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={async (values, { setStatus, resetForm}) => {
                try {
                    const { data } = await publicFetch.post("authenticate", values);
                    console.log(data);
                    resetForm({})

                } catch (error) {
                    setStatus(error.response.data.message)
                    console.log(error)
                }
            }}
            // validationSchema={Yup.object({
            //     username: Yup.string()
            //         .required("Required")
            //         .max(16, "Must be at most 16 characters long")
            //         .matches(/^[a-zA-Z0-9_-]+$/, "Contains invalid characters"),
            //     password: Yup.string()
            //         .required("Required")
            //         .min(6, "Must be at least 6 characters long")
            //         .max(50, "Must be at most 50 characters long"),
            // })}
        >
            {
                ({ values, errors, touched, status,
                     handleChange, handleBlur, handleSubmit, isSubmitting
                 }) => (
                    <form onSubmit={handleSubmit} className={styles.popup_inner}>
                        <img className={styles.image} src={logo} alt="Avatar" style={{width:"35%", height: "35%"}}/>
                        <input
                            className={styles.userInput}
                            type="text"
                            name="username"
                            autoComplete="off"
                            placeholder="Username"
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <input
                            className={styles.userInput}
                            type="password"
                            name="password"
                            autoComplete="off"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <button className={styles.signupButton} type="submit">Log In</button>
                        <div className={styles.line}></div>
                        <div className={styles.text}>Don't have an account? <a href="#" onClick={() => handleChangeMode()}>Sign up</a> </div>
                    </form>
                )
            }
        </Formik>
    )
}

export default LoginForm