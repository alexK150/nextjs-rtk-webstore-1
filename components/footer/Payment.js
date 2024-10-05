import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';

const { footer__payment, footer__paymentLogos } = styles;

export default function Payment() {
    return (
        <section className={footer__payment}>
            <h3>We accept</h3>
            <div className={footer__paymentLogos}>
                <Image
                    src="/img/payments/visa-logo.svg"
                    alt="Visa Logo"
                    width={50}
                    height={30}
                    priority={true}
                />
                <Image
                    src="/img/payments/mastercard-logo.svg"
                    alt="MasterCard Logo"
                    width={50}
                    height={30}
                    priority={true}
                />
                <Image
                    src="/img/payments/paypal-logo.svg"
                    alt="PayPal Logo"
                    width={50}
                    height={30}
                    priority={true}
                />
            </div>
        </section>
    );
}
