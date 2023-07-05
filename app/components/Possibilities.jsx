"use client"

import { useTranslation } from "react-i18next";

import Image from "next/image";

import styles from "../assets/styles/main-page.module.scss";

import arrow from '../assets/img/arrow.png';
import img1 from "../assets/img/possibilities/img-safety.svg";
import img2 from "../assets/img/possibilities/img-privacy.svg";
import img3 from "../assets/img/possibilities/img-encryption.svg";
import img4 from "../assets/img/possibilities/img-functionality.svg";
import img5 from "../assets/img/possibilities/img-mobility.svg";
import img6 from "../assets/img/possibilities/img-anonymity.svg";

export default function Possibilities() {
     
    const { t } = useTranslation();

    return (
        <section className="container possibilities">
            <h2>
                {t("main_page_possibilities_title")}
            </h2>
            <p style={{maxWidth: 650, marginBottom: 30}}>
                {t("main_page_possibilities_text")}
            </p>
            <div className={styles["possibilities_container"]}>
                <div className={styles["possibilities_item"] + ' ' + styles["span-two"] + ' ' + styles["possibilities_bg-color1"] + ' ' + styles["possibilities_order-2"]}>
                    <Image src={img2} alt="privacy icon"/>
                    <h3 className={styles["possibilities_h3"]}>{t("main_page_possibilities_feature_1_title")}</h3>
                    <p className={styles["possibilities_p"]}>{t("main_page_possibilities_feature_1_text")}.</p>
                    <div className={styles["possibilities_arrow"]}>
                        <Image src={arrow} alt="arrow" />
                    </div>
                </div>
                <div className={styles["possibilities_item"] + ' ' + styles["possibilities_bg-color1"] + ' ' + styles["possibilities_order-1"]}>
                    <Image src={img1} alt="security icon"/>
                    <h3 className={styles["possibilities_h3"]}>{t("main_page_possibilities_feature_2_title")}</h3>
                    <p  className={styles["possibilities_p"] + ' ' + styles['text-adapt'] }>{t("main_page_possibilities_feature_2_text")}.</p>
                    <div className={styles["possibilities_arrow"]}>
                        <Image src={arrow} alt="arrow" />
                    </div>
                </div>
                <div className={styles["possibilities_item"] + ' ' + styles["possibilities_bg-color2"] + ' ' + styles["possibilities_order-4"]}>
                    <Image src={img6} alt="functionality icon"/>
                    <h3 className={styles["possibilities_h3"]}>{t("main_page_possibilities_feature_4_title")}</h3>
                    <p  className={styles["possibilities_p"] + ' ' + styles['text-adapt'] }>{t("main_page_possibilities_feature_4_text")}.</p>
                    <div className={styles["possibilities_arrow"]}>
                        <Image src={arrow} alt="arrow" />
                    </div>
                </div>
                <div className={styles["possibilities_item"] + ' ' + styles["span-two"] + ' ' + styles["possibilities_bg-color2"] + ' ' + styles["possibilities_order-6"]}>
                    <Image src={img3} alt="anonymity icon"/>
                    <h3 className={styles["possibilities_h3"]}>{t("main_page_possibilities_feature_6_title")}</h3>
                    <p className={styles  + ' ' + styles["possibilities_p"]}>{t("main_page_possibilities_feature_6_text")}</p>
                    <div className={styles["possibilities_arrow"]}>
                        <Image src={arrow} alt="arrow" />
                    </div>
                </div>
                <div className={styles["possibilities_item"] + ' ' + styles["possibilities_bg-color1"] + ' ' + styles["possibilities_order-3"]}>
                    <Image src={img5} alt="encrypt icon"/>
                    <h3 className={styles["possibilities_h3"]}>{t("main_page_possibilities_feature_3_title")}</h3>
                    <p  className={styles["possibilities_p"] + ' ' + styles['text-adapt'] }>{t("main_page_possibilities_feature_3_text")}.</p>
                    <div className={styles["possibilities_arrow"]}>
                        <Image src={arrow} alt="arrow" />
                    </div>
                </div>
                <div className={styles["possibilities_item"] + ' ' + styles["possibilities_bg-color2"] + ' ' + styles["possibilities_order-5"]}>
                    <Image src={img4} alt="mobility icon"/>
                    <h3 className={styles["possibilities_h3"]}>{t("main_page_possibilities_feature_5_title")}</h3>
                    <p  className={styles["possibilities_p"] + ' ' + styles['text-adapt'] }>{t("main_page_possibilities_feature_5_text")}.</p>
                    <div className={styles["possibilities_arrow"]}>
                        <Image src={arrow} alt="arrow" />
                    </div>
                </div>
            </div>
        </section>
    )
}