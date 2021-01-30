import React, { useState } from "react";
import { Formik } from "formik";
// import * as Yup from "yup";
import { publicFetch } from "../../util/fetcher"


import profileImage from "../../img/avatar.svg";
import styles from "./signup-form.module.scss";
import fetchContacts from "../../store/fetchContacts";
import fetchConversations from "../../store/fetchConversations";


const SignupForm = ({ handleChangeMode, receiveAuthentication, fetchContacts, fetchConversations }) => {

    const [userImage, setUserImage] = useState(profileImage);
    return (
        <Formik
            initialValues={{ file: null, phoneNumber: "", username: "", password: "" }}
            onSubmit={async (values, { setStatus, resetForm}) => {
                try {
                    let formData = new FormData();
                    formData.append('profileImage', values.file);
                    formData.append('phoneNumber', values.phoneNumber);
                    formData.append('username', values.username);
                    formData.append('password', values.password);

                    const { data } = await publicFetch.post("signup", formData);
                    receiveAuthentication(data);
                    fetchContacts();
                    fetchConversations(data.userInfo.externalIdentifier)
                    resetForm({})
                    setUserImage(profileImage);

                } catch (error) {
                    setStatus(error.response.data.message)
                    console.log(error)
                }
            }}
            // validationSchema={Yup.object({
            //     phoneNumber: Yup.string()
            //         .required("Required")
            //         .length(9, "Must be 9 characters long")
            //         .matches(/^[0-9]+$/, "Contains invalid characters"),
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
                ({
                     values, errors, touched, status, setFieldValue,
                     handleChange, handleBlur, handleSubmit, isSubmitting
                 }) => (
                    <form onSubmit={handleSubmit} className={styles.popup_inner}>
                        <label htmlFor="image">
                            <input
                                id="image"
                                type="file"
                                label="userImage"
                                name="file"
                                accept="image/x-png,image/gif,image/jpeg"
                                value={values.userImage}
                                onChange={(event) => {
                                    setFieldValue("file", event.currentTarget.files[0]);
                                    setUserImage(URL.createObjectURL(event.currentTarget.files[0]))
                                }}
                                onBlur={handleBlur}
                                style={{display: "none"}}
                            />
                            <p className={styles.imageInput}>Edit</p>
                            <img className={styles.image} src={userImage} alt="profileImage"/>
                        </label>
                        <input
                            className={styles.userInput}
                            type="text"
                            name="phoneNumber"
                            autoComplete="off"
                            placeholder="Phone number"
                            value={values.phoneNumber}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
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
                        <button className={styles.signupButton} type="submit">Sign up</button>
                        <div className={styles.line}></div>
                        <div className={styles.text}>Have an account? <a href="#" onClick={() => handleChangeMode()}>Log in</a></div>
                    </form>
                )
            }
        </Formik>
    )
}

export default SignupForm