"use client"

import { useTranslation } from "react-i18next";
import Link from "next/link";

import styles from "../assets/styles/donate-page.module.scss";

import DonateCryptoInfo from "../components/DonateCryptoInfo";

export default function Donate() {

    const { t } = useTranslation();

    return (
        <>
            <section className="container">
                <h2 className={styles["text-center"]}>{t("donate_page_title")}</h2>
                <div className={styles["donate-container"]}>
                    <div className={styles["donate-container_item"] + ' ' + styles["border"]}>
                        <h3>DONATE CRYPTO</h3>
                        <p>{t("donate_page_text_1")}</p>
                        <h4>Сhoose Method</h4>
                        <DonateCryptoInfo styles={styles} t={t}/>
                    </div>
                    <div className={styles["donate-container_item"] + ' ' + styles["padding"] }>
                        <h3>DONATE MONEY</h3>
                        <p>
                            {t("donate_page_text_2")}
                        </p>
                        <Link href='https://secure.wayforpay.com/donate/dober' target="_blank">
                            <button style={{padding: "14px 60px"}}>Donate</button>
                        </Link>
                    </div>
                </div>
            </section>
        </>

    )
}