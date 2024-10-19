import React from 'react';
import {Header} from "@/components/header";
import Footer from "@/components/footer";
import styles from "../styles/pages/signin.module.scss";
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from "next/link";
import {Formik, Form} from "formik";
import {LoginInput} from "@/components/inputs/loginInput";

const {
    login,
    login__container,
    login__header,
    login__form,
    back__svg,
} = styles;

export default function SignInPage(props) {
    return (
        <div>
            <Header/>
             <div className={login}>
                 <div className={login__container}>
                     <div className={login__header}>
                         <div className={back__svg}>
                             <BiLeftArrowAlt />
                         </div>
                         <span>
                             Join us! <Link href={"/"}>Go Store!</Link>
                         </span>
                     </div>
                     <div className={login__form}>
                         <h1>Login</h1>
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                         <Formik
                             initialValues={{ password: '' }}
                             onSubmit={(values) => {
                                 console.log('Form submitted', values);
                             }}
                         >
                             {() => (
                                 <Form>
                                     <LoginInput icon="password" placeholder="Enter your password" />
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
