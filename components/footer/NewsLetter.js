import React from 'react';
import styles from './styles.module.scss';
import Link from "next/link";

const {footer__newsLetter, footer__emailInputContainer, btnPrimary} = styles;

export default function NewsLetter(props) {
    return (
        <div className={footer__newsLetter}>
            <h3>SIGNUP FOR OUR NEWSLETTER</h3>
            <div className={footer__emailInputContainer}>
                <input type="text" placeholder="Your Email Address"/>
                <button className={btnPrimary}>SUBSCRIBE</button>
            </div>
            <p>
                By clicking the SUBSCRIBE button, you are agreeing to{" "}
                <Link href="">our Privacy & Cookie Policy</Link>
            </p>
        </div>
    );
}
