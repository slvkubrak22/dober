import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";

import styles from "../assets/styles/why-dober.module.scss";

import img from "../assets/img/whydober/dog-logo.png"

export default function WhyDober() {

    const { t } = useTranslation();

    return (
        <section className={styles["bg-color"]}>
            <div className="container">
                <div className={styles["main"]}>
                    <div className={styles["main_image-container"]}>
                        <div className={styles["circle"] + ' ' + styles["circle1"]}></div>
                        <div className={styles["circle"] + ' ' + styles["circle2"]}></div>
                        <div className={styles["circle"] + ' ' + styles["circle3"]}></div>
                        <Image src={img} alt="dober image"></Image>
                    </div>
                    <div className={styles["text-container"]}>
                        <h3>{t("why_dober_title")}</h3>
                        <p>{t("why_dober_text")}</p>
                        <Link href='/features'>
                            <button>{t("button_learn_more")}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}