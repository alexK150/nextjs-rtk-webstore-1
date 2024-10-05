import Link from "next/link";
import styles from "./styles.module.scss";

export default function HeaderAdvertisingLink() {
    return <Link href="/browse">
        <div className={styles.addLink}></div>
    </Link>
}
