import React from "react";
import { Formik } from "formik";
import { publicFetch } from "../../util/fetcher";
import * as Yup from "yup";
import FormInput from "../form-input";

import logo from "../../img/logo.svg";
import styles from "./login-form.module.scss";

const LoginForm = ({ handleChangeMode, receiveAuthentication, fetchContacts, fetchConversations }) => {

    return (
        <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={async (values, { setFieldError, setStatus, resetForm}) => {
                try {
                    const { data } = await publicFetch.post("authenticate", values);
                    if (data.hasError) {
                        setFieldError(data.field, data.message);
                        return;
                    }
                    receiveAuthentication(data);
                    fetchContacts(data.userInfo.externalIdentifier);
                    fetchConversations(data.userInfo.externalIdentifier)
                    resetForm({})

                } catch (error) {
                    setStatus(error.response.data.message)
                    console.log(error)
                }
            }}
            validationSchema={Yup.object({
                username: Yup.string()
                    .required("Required")
                    .min(4, "Must be at least 4 characters long")
                    .max(16, "Must be at most 16 characters long")
                    .matches(/^[a-zA-Z0-9_-]+$/, "Contains invalid characters"),
                password: Yup.string()
                    .required("Required")
                    // .min(6, "Must be at least 6 characters long")
                    .max(50, "Must be at most 50 characters long"),
            })}
        >
            {
                ({ values, errors, touched, status,
                     handleChange, handleBlur, handleSubmit, isSubmitting
                 }) => (
                    <form onSubmit={handleSubmit} className={styles.popup_inner}>
                        <img className={styles.image} src={logo} alt="profileImage" style={{width:"35%", height: "35%"}}/>
                        <FormInput
                            label="Username"
                            type="text"
                            name="username"
                            autoComplete="off"
                            placeholder="Username"
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            hasError={touched.username && errors.username}
                            errorMessage={errors.username && errors.username}
                        />
                        <FormInput
                            label="Password"
                            type="password"
                            name="password"
                            autoComplete="off"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            hasError={touched.password && errors.password}
                            errorMessage={errors.password && errors.password}
                        />
                        <br/>
                        <button className={styles.signupButton} type="submit">Log In</button>
                        <div className={styles.line}></div>
                        <div className={styles.text}>Don't have an account? <a href="!#" onClick={(e) => handleChangeMode(e)}>Sign up</a> </div>
                    </form>
                )
            }
        </Formik>
    )
}

export default LoginForm