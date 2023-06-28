"use client"

import Image from "next/image";
import { useTranslation } from "react-i18next";
import TopSection from "../components/features/TopSection";

import styles from "../assets/styles/features-page.module.scss";
import Postulates from "../components/features/Postulates";
import UseDober from "../components/UseDober";
import Subscribe from "../components/Subscribe";

import grid_bottom_item_img_1 from "../assets/img/features-page/grid_bottom_item_img_1.svg";
import grid_bottom_item_img_2 from "../assets/img/features-page/grid_bottom_item_img_2.svg";
import grid_bottom_item_img_3 from "../assets/img/features-page/grid_bottom_item_img_3.svg";
import grid_bottom_item_img_4 from "../assets/img/features-page/grid_bottom_item_img_4.svg";
import grid_bottom_item_img_5 from "../assets/img/features-page/grid_bottom_item_img_5.svg";
import grid_bottom_item_img_6 from "../assets/img/features-page/grid_bottom_item_img_6.svg";

export default function Features() {

    const { t } = useTranslation();

    return (
        <>
            <TopSection t={t} styles={styles}/>
            <Postulates t={t} styles={styles}/>
            <UseDober />
            <section className="container">
                <div className={styles["grid-bottom"]}>
                    <div>
                        <h2>{t("features_page_for_companies_title")}</h2>
                        <p>{t("features_page_for_companies_text")}</p>
                    </div>
                    <div className={styles["grid-bottom_item"]}>
                        <Image src={grid_bottom_item_img_1} alt="info icon"/>
                        <h3>
                            {t("features_page_for_companies_title_item_1")}
                        </h3>
                        <p>{t("features_page_for_companies_text_item_1")}</p>
                    </div>
                    <div className={styles["grid-bottom_item"]}>
                        <Image src={grid_bottom_item_img_2} alt="info icon"/>
                        <h3>{t("features_page_for_companies_title_item_2")}</h3>
                        <p>{t("features_page_for_companies_text_item_2")}</p>
                    </div>
                </div>
                <div className={styles["grid-bottom"] + ' ' + styles["grid-bottom-2"]}>
                    <div className={styles["grid-bottom_item"]}>
                        <Image src={grid_bottom_item_img_3} alt="info icon"/>
                        <h3>{t("features_page_for_companies_title_item_3")}</h3>
                        <p>{t("features_page_for_companies_text_item_3")} </p>
                    </div>
                    <div className={styles["grid-bottom_item"]}>
                        <Image src={grid_bottom_item_img_4} alt="info icon"/>
                        <h3>{t("features_page_for_companies_title_item_4")}</h3>
                        <p>{t("features_page_for_companies_text_item_4")} </p>
                    </div>
                    <div className={styles["grid-bottom_item"]}>
                        <Image src={grid_bottom_item_img_5} alt="info icon"/>
                        <h3>{t("features_page_for_companies_title_item_5")}</h3>
                        <p>{t("features_page_for_companies_text_item_5")} </p>
                    </div>
                    <div className={styles["grid-bottom_item"]}>
                        <Image src={grid_bottom_item_img_6} alt="info icon"/>
                        <h3>{t("features_page_for_companies_title_item_6")}</h3>
                        <p>{t("features_page_for_companies_text_item_6")} </p>
                    </div>
                </div>
            </section>
            <Subscribe />
        </>
    )    
}