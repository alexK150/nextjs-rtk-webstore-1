import React from 'react';
import Image from 'next/image';
import styles from "./styles.module.scss";
import Link from "next/link";

const {userMenu, userInfo__image, userInfo__info, btnPrimary, btnSecondary, userInfo, userMenu__dropdown, userMenu__listEl, userMenuVisible} = styles;

export const UserMenu = ({isLoggedIn, isVisible}) => {
    return (
        <div className={`${userMenu} ${isVisible ? userMenuVisible : ''}`}>
            <h4>Welcome</h4>
            {isLoggedIn ?
                <div className={userInfo}>
                    <Image className={userInfo__image}
                         src='https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg' alt="" width={100} height={100}/>
                    <div className={userInfo__info}>
                        <span>Welcome Back, </span>
                        <h3>Alex</h3>
                        <span>Sign out</span>
                    </div>
                </div>
                : (
                    <div className={userInfo}>
                        <button className={btnPrimary}>Register</button>
                        <button className={btnSecondary}>Login</button>
                    </div>
                )
            }
            <ul className={`${userMenu__dropdown} dropdown_menu-1`}>
                <li className={`${userMenu__listEl} dropdown_item-1`}>
                    <Link href="/profile">Profile</Link>
                </li>
                <li className={`${userMenu__listEl} dropdown_item-2`}>
                    <Link href="/profile/orders">Orders</Link>
                </li>
                <li className={`${userMenu__listEl} dropdown_item-3`}>
                    <Link href="/profile/messages">Messages</Link>
                </li>
                <li className={`${userMenu__listEl} dropdown_item-4`}>
                    <Link href="/profile/address">Address</Link>
                </li>
                <li className={`${userMenu__listEl} dropdown_item-5`}>
                    <Link href="/profile/wishlist">Wishlist</Link>
                </li>
            </ul>
        </div>
    );
};
