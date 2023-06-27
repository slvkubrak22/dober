"use client"

import { useTranslation } from "react-i18next";
import Link from "next/link";

import styles from "../assets/styles/donate-page.module.scss";

import DonateCryptoInfo from "../components/DonateCryptoInfo";

export default function Donate() {
    return (
        <>
            <section className="container">
                <h2 className={styles["text-center"]}>Донать для добер</h2>
                <div className={styles["donate-container"]}>
                    <div className={styles["donate-container_item"] + ' ' + styles["border"]}>
                        <h3>Donate CRYPTO</h3>
                        <p>Донати в криптовалюті приймаються напряму на відповідні гаманці Dober абсолютно анонімно. Якщо ви бажаєте підтримати проєкт криптовалютою, якої немає у списку, напишіть нам на електронну адресу support@dober.chat </p>
                        <h4>Сhoose Method</h4>
                        <DonateCryptoInfo styles={styles}/>
                    </div>
                    <div className={styles["donate-container_item"] + ' ' + styles["padding"] }>
                        <h3>Donate Money</h3>
                        <p>
                            Ваші донати допомагають нам розробляти Dober, впроваджувати нові функції безпеки та анонімності, підтримувати роботу серверів. Стимулюють нас працювати та дають віру в те, що ми на правильному шляху.
                        </p>
                        <Link href='https://secure.wayforpay.com/donate/dober' target="_blank">
                            <button>Donate</button>
                        </Link>
                    </div>
                </div>
            </section>
        </>

    )
}