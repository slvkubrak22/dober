"use client"

import { useTranslation } from "react-i18next";

import Image from "next/image";
import styles from '../assets/styles/main-page.module.scss';

import image from '../assets/img/security.png'

export default function Security() {

  const { t } = useTranslation();
 
  return (
    <section className="container">
      <div className={styles["security"]}>
        <div className={styles["security_text"]}>
          <h2>{t("main_page_security_title")}</h2>
          <p>
            {t("main_page_security_text_par_1")}
          </p>
          <p>
            {t("main_page_security_text_par_2")}
          </p>
          <p>
            {t("main_page_security_text_par_3")}
          </p>
          <button className={styles["security_button"]}>{t("button_learn_more")}</button>
        </div>
        <Image src={image} alt="security image" />
      </div>
    </section>
  );
}
