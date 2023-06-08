"use client"

import { useTranslation } from "react-i18next";

import Image from "next/image";
import mobile1 from "../assets/img/mobile_1.png";
import mobile2 from "../assets/img/mobile_2.png";
import styles from "../assets/styles/main-page.module.scss";

export default function FirstSection() {

  const { t } = useTranslation();

  return (
    <section className={styles["bg_color"]}>
      <div style={{ height: 100 }}></div>
      <div className="container">
        <h1 className={styles["first-section_text-color"]}>
          {t("main_page_title")}
        </h1>
        <div className={styles["first-section"]}>
          <div className={styles["first-section_subitem"]}>
            <div className={styles["first-section_description"]}>
              <h2
                className={
                  styles["first-section_text-color"] +
                  " " +
                  styles["first-section_text-end"]
                }
              >
                {t("main_page_first_section_left_title")}
              </h2>
              <p
                className={
                  styles["first-section_text-color"] +
                  " " +
                  styles["first-section_text-end"] +
                  " " +
                  styles["first-section_pos-end"]
                }
              >
                {t("main_page_first_section_left_text")}
              </p>
              <button
                className={
                  styles["first-section_pos-end"] + " " + styles["button"]
                }
              >
                {t("button_learn_more")}
              </button>
            </div>
            <Image
              width={300}
              src={mobile1}
              alt="mobile screen example"
            />
          </div>
          <div className={styles["first-section_subitem"]}>
            <Image
              width={300}
              src={mobile2}
              alt="mobile screen example"
            />
            <div className={styles["first-section_description"]}>
              <h2 className={styles["first-section_text-color"]}>
                {t("main_page_first_section_right_title")}
              </h2>
              <p className={styles["first-section_text-color"]}>
                {t("main_page_first_section_right_text")}
              </p>
              <button
                className={
                  styles["first-section_pos-start"] + " " + styles["first-section_button"]
                }
              >
                {t("button_learn_more")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
