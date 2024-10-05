import React from 'react';
import styles from './styles.module.scss'
import Links from "@/components/footer/Links";
import Socials from "@/components/footer/Socials";
import NewsLetter from "@/components/footer/NewsLetter";
import Payment from "@/components/footer/Payment";
import Copyright from "@/components/footer/Copyright";

const {footer, footer__container} = styles;

export default function Footer({country}) {
    return (
        <footer className={footer}>
            <div className={footer__container}>
                <Links/>
                <Socials/>
                <NewsLetter/>
                <Payment/>
                <Copyright country={country}/>
            </div>
        </footer>
    );
}
