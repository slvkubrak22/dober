"use client"

import { useTranslation } from "react-i18next";

import Image from "next/image";

import styles from "../assets/styles/main-page.module.scss";

import img1 from "../assets/img/info-for-companies/img1.svg";
import img2 from "../assets/img/info-for-companies/img2.svg";
import img3 from "../assets/img/info-for-companies/img3.svg";
import img4 from "../assets/img/info-for-companies/img4.svg";
import img5 from "../assets/img/info-for-companies/img5.svg";
import img6 from "../assets/img/info-for-companies/img6.svg";

function InfoItem({
    img,
    title,
    text
}) {

    return (
        <div
        className={
            styles["possibilities_item"] +
            " " +
            styles["span-two"] +
            " " +
            styles["possibilities_bg-color3"] + 
            " " + 
            styles["info-for-companies_item"]
        }
        >
            <Image src={img} alt="info icon"/>
            <h3 className={styles["info-for-companies_h3"]}>{title}</h3>
            <p className={styles["info-for-companies_p"]}>
                {text}
            </p>
             <div className={styles["possibilities_arrow"]}>
                <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className={styles["arrow-vector"]} d="M1.70703 5.25C1.29282 5.25 0.957031 5.58579 0.957031 6C0.957031 6.41421 1.29282 6.75 1.70703 6.75V5.25ZM18.2269 6.53033C18.5198 6.23744 18.5198 5.76256 18.2269 5.46967L13.4539 0.696699C13.161 0.403806 12.6862 0.403806 12.3933 0.696699C12.1004 0.989593 12.1004 1.46447 12.3933 1.75736L16.6359 6L12.3933 10.2426C12.1004 10.5355 12.1004 11.0104 12.3933 11.3033C12.6862 11.5962 13.161 11.5962 13.4539 11.3033L18.2269 6.53033ZM1.70703 6.75H17.6966V5.25H1.70703V6.75Z" fill=""/>
                </svg>
            </div>
        </div>
    );
}

export default function InfoForCompanies() {

    const { t } = useTranslation();

    const infoItemData = [
        {
            img: img1,
            title: t("main_page_info_for_companies_title_item_1"),
            text: t("main_page_info_for_companies_text_item_1"),
        },
        {
            img: img2,
            title: t("main_page_info_for_companies_title_item_2"),
            text: t("main_page_info_for_companies_text_item_2"),
        },
        {
            img: img3,
            title: t("main_page_info_for_companies_title_item_3"),
            text: t("main_page_info_for_companies_text_item_3"),
        },
        {
            img: img4,
            title: t("main_page_info_for_companies_title_item_4"),
            text: t("main_page_info_for_companies_text_item_4"),
        },
        {
            img: img5,
            title: t("main_page_info_for_companies_title_item_5"),
            text: t("main_page_info_for_companies_text_item_5"),
        },
        {
            img: img6,
            title: t("main_page_info_for_companies_title_item_6"),
            text: t("main_page_info_for_companies_text_item_6"),
        }
    ]

    return (
        <section className="container">
            <div className={styles["info-for-companies"]}>
                <h2>{t("main_page_info_for_companies_title")}</h2>
                <p className={styles["info-for-companies_p"]}>
                    {t("main_page_info_for_companies_text")}
                </p>
                <div className={styles["info-for-companies_list"]}>
                    {infoItemData.map((item, key) => 
                        <InfoItem 
                            key={key}
                            img={item.img}
                            title={item.title}
                            text={item.text}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}
