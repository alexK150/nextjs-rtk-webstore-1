import React from 'react';
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from 'next/image';
import { IoMdSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";

const {
    searchBar,
    searchBar__container,
    searchBar__logo,
    searchBar__inputContainer,
    searchBar__input,
    searchBar__icon,
    cartIcon,
    cartIcon__badge
} = styles;

export default function Searchbar() {
    return (
        <div className={searchBar}>
            <div className={searchBar__container}>
                <Link href="/" className={searchBar__logo}>
                    <Image src="/shop-logo.svg" alt="Logo" width={100} height={50} />
                </Link>
                <div className={searchBar__inputContainer}>
                    <input type="text"
                           placeholder="Search..."
                           aria-label="Search"
                           className={searchBar__input} />
                    <div className={searchBar__icon}>
                        <IoMdSearch />
                    </div>
                </div>
                <Link href="/cart" className={cartIcon}>
                    <MdOutlineShoppingCart />
                    <span className={cartIcon__badge}>0</span>
                </Link>
            </div>
        </div>
    );
}
