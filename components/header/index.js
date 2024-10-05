import React from 'react';
import styles from "./styles.module.scss";
import HeaderAdvertisingLink from "@/components/header/HeaderAdvertisingLink";
import TopMenu from "@/components/header/TopMenu";
import Searchbar from "@/components/header/Searchbar";

export const Header = ({country}) => {
    return (
        <header className={styles.header}>
            <HeaderAdvertisingLink/>
            <TopMenu country={country}/>
            <Searchbar/>
        </header>
    );
};
