import styles from './styles.module.scss';
import Link from "next/link";

const {footer__links} = styles;

const links = [
    {
        heading: "Web Store",
        links: [
            {name: "About us", link: ""},
            {name: "Contact us", link: ""},
            {name: "Social", link: ""},
            {name: "Blog", link: ""}
        ]
    },
    {
        heading: "HELP & SUPPORT",
        links: [
            {name: "Shipping Info", link: ""},
            {name: "Returns", link: ""},
            {name: "How To Order", link: ""},
            {name: "How To Track", link: ""},
            {name: "Size Guide", link: ""}
        ]
    },
    {
        heading: "Customer service",
        links: [
            {name: "Customer service", link: ""},
            {name: "Terms and Conditions", link: ""},
            {name: "Consumers (Transactions)", link: ""},
            {name: "Take our feedback survey", link: ""}
        ]
    }
];

export default function Links() {
    return (
        <div className={footer__links}>
            {links.map(({ heading, logo, links }) => (
                <ul key={heading}>
                    {logo ? (
                        <img src="../../../shop-logo.svg" alt="Logo" />
                    ) : (
                        <b>{heading}</b>
                    )}
                    {links.map(({ name, link }) => (
                        <li key={name}>
                            <Link href={link}>{name}</Link>
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    );
}
