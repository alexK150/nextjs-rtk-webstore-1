import React from 'react';
import {FaUserCircle} from "react-icons/fa";
import {IoIosMail, IoMdKey} from "react-icons/io";
import {useField} from "formik";
import styles from "./styles.module.scss";

const {
    loginInput,
    error: errorStyle
} = styles;

const iconMap = {
    user: <FaUserCircle/>,
    email: <IoIosMail/>,
    password: <IoMdKey/>,
};

export const LoginInput = ({icon, placeholder, type = "text", ...props}) => {
    const [field, meta] = useField(props);
    const isError = meta.touched && meta.error;

    return (
        <div className={`${loginInput} ${isError ? errorStyle : ''}`}>
            {iconMap[icon] || null}
            <input
                {...field}
                placeholder={placeholder}
                type={type}
                aria-invalid={isError ? "true" : "false"}
            />
            {isError && <div className={errorStyle}>{meta.error}</div>}
        </div>
    );
};
