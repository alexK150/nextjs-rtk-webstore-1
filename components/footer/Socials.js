import React from 'react';
import styles from './styles.module.scss';
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import {
    BsInstagram,
    BsTwitterX,
    BsYoutube,
    BsPinterest,
    BsSnapchat,
} from "react-icons/bs";

const { footer__socials } = styles;

// Массив данных для иконок социальных сетей
const socialLinks = [
    { href: "/", icon: <FaFacebookF />, label: "Facebook" },
    { href: "/", icon: <BsInstagram />, label: "Instagram" },
    { href: "/", icon: <BsTwitterX />, label: "Twitter" },
    { href: "/", icon: <BsYoutube />, label: "YouTube" },
    { href: "/", icon: <BsPinterest />, label: "Pinterest" },
    { href: "/", icon: <BsSnapchat />, label: "Snapchat" },
    { href: "/", icon: <FaTiktok />, label: "TikTok" }
];

export default function Socials() {
    return (
        <div className={footer__socials}>
            <section>
                <h1>STAY CONNECTED</h1>
                <ul>
                    {socialLinks.map(({ href, icon, label }, index) => (
                        <li key={index}>
                            <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                                {icon}
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
