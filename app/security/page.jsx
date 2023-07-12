"use client";

import { useTranslation } from "react-i18next";
import { useState } from "react";

import Image from "next/image";
import img_1 from "../assets/img/security/img_1.svg";
import img_2 from "../assets/img/security/img_2.svg";
import img_3 from "../assets/img/security/img_3.svg";
import img_4 from "../assets/img/security/img_4.svg";
import img_5 from "../assets/img/security/img_5.svg";
import img_6 from "../assets/img/security/img_6.svg";
import img_7 from "../assets/img/security/img_7.svg";
import img_8 from "../assets/img/security/img_8.svg";
import control_1 from "../assets/img/security/control_1.png";
import control_2 from "../assets/img/security/control_2.png";

import styles from "../assets/styles/security-page.module.scss";
import Subscribe from "../components/Subscribe";
import Slider from "../components/SecuritySlider";

export default function Security() {

    const { t } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
    };

    const handleImageClick = (image) => {
        if (!isModalOpen) {
          openModal(image);
        }
      };

    return (
        <>
            <section className="container">
                <h2 className={styles["security_title"]}>{t("security_page_title")}</h2>
                <div className={styles["grid"] + ' ' + styles["grid-top"]}>
                    <div className={styles["grid_item"]}>
                        <Image alt="security image" src={img_1}/>
                        <p>
                            {t("security_page_text_item_1")}
                        </p>
                    </div>
                    <div className={styles["grid_item"]}>
                        <Image alt="security image" src={img_2}/>
                        <p>
                            {t("security_page_text_item_2")}
                        </p>
                    </div>
                </div>
                <div className={styles["grid"] + ' ' + styles["grid-bottom"]}>
                    <div className={styles["grid_item"]}>
                        <Image alt="security image" src={img_3}/>
                        <p>
                            {t("security_page_text_item_3")}
                        </p>
                    </div>
                    <div className={styles["grid_item"] + ' ' + styles["span-two"]}>
                        <Image alt="security image" src={img_4}/>
                        <p>
                            {t("security_page_text_item_4")}
                        </p>
                    </div>
                    <div className={styles["grid_item"]}>
                        <Image alt="security image" src={img_5}/>
                        <p>
                            {t("security_page_text_item_5")}
                        </p>
                    </div>
                    <div className={styles["grid_item"]}>
                        <Image alt="security image" src={img_6}/>
                        <p>
                           {t("security_page_text_item_6_text_1")}
                        </p>
                        <p>
                           {t("security_page_text_item_6_text_2")}
                        </p>
                        <p>
                           {t("security_page_text_item_6_text_3")}
                        </p>
                        <p>
                           {t("security_page_text_item_6_text_4")}
                        </p>
                    </div>
                    <div className={styles["grid_item"]}>
                        <Image alt="security image" src={img_7}/>
                        <p>
                            {t("security_page_text_item_7")}
                        </p>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className={styles["flex-container"]}>
                    <div className={styles["text"]}>
                        <h3>{t("security_page_subtitle")}</h3>
                        <p>
                            {t("security_page_subtext_1")} 
                        </p>
                        <p>
                            {t("security_page_subtext_2")} 
                        </p>
                    </div>
                    <div className={styles["image-container"]}>
                        <Image alt="security image" src={img_8}></Image>
                    </div>
                </div>
            </section>
            <section className="container">
                <h2 className={styles["security_title"]}>
                    {t("security_page_control_title")}
                </h2>
                <div className={styles["control-container"]}>
                    <div className={styles["image-container"]}>
                        <Image src={control_1} onClick={() => handleImageClick(control_1)} alt='control image' />
                    </div>
                    <div className={styles["image-container"]}>
                        <Image src={control_2} onClick={() => handleImageClick(control_2)} alt='control image' />
                    </div>
                </div>
                {isModalOpen && (
                    <div className={styles["modal-overlay"]} onClick={closeModal}>
                        <div className={styles["modal-content"]}>
                            <Image src={selectedImage} alt="Selected Image" />
                        </div>
                    </div>
                )}
                <Slider control_1={control_1} control_2={control_2} styles={styles} />
            </section>
            <Subscribe />
        </>
    )
}