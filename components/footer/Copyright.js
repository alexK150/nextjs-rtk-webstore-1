import React from 'react';
import styles from '@/components/footer/styles.module.scss';
import Link from 'next/link';
import { FaSearchLocation } from 'react-icons/fa';

const COPYRIGHT_TEXT = "©2024 WebStore All Rights Reserved.";

const linksData = [
    { name: 'Privacy Center', link: '' },
    { name: 'Privacy & Cookie Policy', link: '' },
    { name: 'Manage Cookies', link: '' },
    { name: 'Terms & Conditions', link: '' },
    { name: 'Copyright Notice', link: '' },
];

export default function Copyright({country}) {
    return (
        <div className={styles.footer__copyright}>
            <section aria-label="Copyright Information">{COPYRIGHT_TEXT}</section>
            <section aria-label="Footer Links">
                <ul>
                    {linksData.map(({name, link}) => (
                        <li key={name}>
                            <Link href={link} aria-label={name}>
                                {name}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <a href="#" aria-label="Location Stuttgart">
                            <FaSearchLocation /> {country.name}
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    );
}
