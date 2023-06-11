"use client"

import { useTranslation } from "react-i18next";
import Image from "next/image";

import twitterLogo from "../assets/img/twitter-logo-color.svg";
import linkedinLogo from "../assets/img/linkedin-logo.svg";

import styles from "../assets/styles/main-page.module.scss";
import SubscribeItems from "./SubscribeItems";


export default function Subscribe() {

    const { t } = useTranslation();

    return(
        <section className="container">
            <div className={styles["subscribe"]}>
                <h2 className={styles["subscribe_text-center"]}>
                    {t('subscribe')}
                </h2>
                <SubscribeItems />
            </div>
        </section>
    )
}