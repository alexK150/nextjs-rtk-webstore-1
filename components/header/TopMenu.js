import React, {useState, useEffect} from 'react';
import Link from "next/link";
import Image from 'next/image';
import styles from "./styles.module.scss";
import {MdOutlineSecurity} from "react-icons/md";
import {BsFillBagHeartFill, BsPersonCircle} from "react-icons/bs";
import {IoIosArrowDropdown} from "react-icons/io";
import {UserMenu} from "@/components/header/UserMenu";
import {useSession} from "next-auth/react";

const {
    topMenu, topMenu__container, topMenu__list, profile, flagImage, topMenu__list__menuEl
} = styles;

export default function TopMenu({country}) {
    const { data: session } = useSession();
    const [isVisible, setIsVisible] = useState(false);
    const [timer, setTimer] = useState(null);

    const handleMouseEnter = () => {
        if (timer) {
            clearTimeout(timer);
            setTimer(null);
        }
        setIsVisible(true);
    };

    const handleMouseLeave = () => {
        const newTimer = setTimeout(() => {
            setIsVisible(false);
        }, 200); // Задержка перед скрытием
        setTimer(newTimer);
    };

    useEffect(() => {
        return () => {
            if (timer) {
                clearTimeout(timer); // Очистка таймера при размонтировании компонента
            }
        };
    }, [timer]);

    return (
        <div className={topMenu}>
            <div className={topMenu__container}>
                <div></div>
                <ul className={topMenu__list}>
                    <li className={topMenu__list__menuEl}>
                        <Image width={28} height={28} className={flagImage} src={country.flag}
                               alt="Deutschland Flag"/>
                        <span>{country.name} / eur</span>
                    </li>
                    <li className={topMenu__list__menuEl}>
                        <MdOutlineSecurity/>
                        <span>Bayer protection</span>
                    </li>
                    <li className={topMenu__list__menuEl}>
                        <span>Customer Service</span>
                    </li>
                    <li className={topMenu__list__menuEl}>
                        <span>Help</span>
                    </li>
                    <li className={topMenu__list__menuEl}>
                        <BsFillBagHeartFill/>
                        <Link href="/profile/wishlist">
                            <span>Wishlist</span>
                        </Link>
                    </li>
                    <li className={`${topMenu__list__menuEl} dropdown`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        {session ? (
                            <div className={profile}>
                                <Image src={session.user.image}
                                       alt={'User image'} width={28} height={28}/>
                                <span>{session.user.name}</span>
                                <IoIosArrowDropdown/>
                            </div>
                        ) : (
                            <div className={profile}>
                                <BsPersonCircle/>
                                <span>Account</span>
                                <IoIosArrowDropdown/>
                            </div>
                        )}
                        {isVisible && <UserMenu session={session} isVisible={isVisible}/>}
                    </li>
                </ul>
            </div>
        </div>
    );
}
