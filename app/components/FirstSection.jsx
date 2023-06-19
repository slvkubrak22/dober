"use client"

import { useTranslation } from "react-i18next";
import Link from "next/link";

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
              <Link className={styles["first-section_pos-end"] + " " + styles["button"]} href={'/features'}>
                <button>
                  {t("button_learn_more")}
                </button>
              </Link>
            </div>
            <div className={styles["image-container"]} style={{marginRight: 5}}>
              <Image
                // width={300}
                src={mobile1}
                alt="mobile screen example"
              />
            </div>
          </div>
          <div className={styles["first-section_subitem"]}>
            <div className={styles["image-container"]} style={{marginLeft: 5}}>
              <Image
                // width={300}
                src={mobile2}
                alt="mobile screen example"
              />
            </div>
            <div className={styles["first-section_description"]}>
              <h2 className={styles["first-section_text-color"]}>
                {t("main_page_first_section_right_title")}
              </h2>
              <p className={styles["first-section_text-color"]}>
                {t("main_page_first_section_right_text")}
              </p>
              <Link className={styles["first-section_pos-start"] + " " + styles["first-section_button"]} href='/for_companies'>
                <button
                  
                >
                  {t("button_learn_more")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
