import React from 'react';
import {Header} from "@/components/header";
import Footer from "@/components/footer";
import styles from "../styles/pages/signin.module.scss";
import {BiLeftArrowAlt} from "react-icons/bi";
import Link from "next/link";
import {Formik, Form} from "formik";
import {LoginInput} from "@/components/inputs/loginInput";
import * as Yup from 'yup';

const {login, login__container, login__header, login__form, back__svg} = styles;

const initStateUser = {
    login_email: '',
    login_password: ''
};

export default function SignInPage(props) {
    const loginValidation = Yup.object({
        login_email: Yup.string()
            .required("Email address is required.")
            .email("Please enter valid email address."),
        login_password: Yup.string().required("Please enter a password"),
    });

    return (
        <div>
            <Header/>
            <div className={login}>
                <div className={login__container}>
                    <div className={login__header}>
                        <div className={back__svg}>
                            <BiLeftArrowAlt/>
                        </div>
                        <span>
                            Join us! <Link href={"/"}>Go Store!</Link>
                        </span>
                    </div>
                    <div className={login__form}>
                        <h1>Login</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <Formik
                            enableReinitialize
                            initialValues={{...initStateUser}}
                            validationSchema={loginValidation}
                            onSubmit={(values) => {
                                console.log('Form submitted', values);
                            }}
                        >
                            {() => (
                                <Form>
                                    <LoginInput
                                        type="email"
                                        name="login_email"
                                        icon="email"
                                        placeholder="Enter your email"
                                    />
                                    <LoginInput
                                        type="password"
                                        name="login_password"
                                        icon="password"
                                        placeholder="Enter your password"
                                    />
                                    <button type="submit">Login</button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
            <Footer country={"Germany"}/>
        </div>
    );
}
