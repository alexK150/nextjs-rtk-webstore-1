import React from 'react';
import {FaUserCircle} from "react-icons/fa";
import {IoIosMail, IoMdKey} from "react-icons/io";
import styles from "./styles.module.scss"

const {
    loginInput,
} = styles;

const iconMap = {
    user: <FaUserCircle/>,
    email: <IoIosMail/>,
    password: <IoMdKey/>,
};

export const LoginInput = ({icon, placeholder}) => {
    return (
        <div className={loginInput}>
            {iconMap[icon] || null}
            <input type="text" placeholder={placeholder}/>
        </div>
    );
};
