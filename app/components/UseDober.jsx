"use client"

import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";

import img1 from "../assets/img/apple.svg";
import img2 from "../assets/img/android.svg";
import img3 from "../assets/img/web.svg";


import styles from "../assets/styles/use-dober.module.scss"

export default function UseDober() {

    const { t } = useTranslation();
 
    return(
        <section className={styles["bg_color"]}>
            <div className="container">
                <div className={styles["dober-container"] + ' ' + styles["dober-container_justify"]}>
                    <div>
                        <div className={styles["dober-container"]} style={{alignItems: 'baseline'}}>
                            <div className={styles["dober-container_item"]}>
                                <Image src={img1} alt='apple icon'/>
                                <p className={styles["dober-container_p"]}>IOS</p>
                            </div>
                            <div className={styles["dober-container_item"]}>
                                <Image src={img2} alt='android icon'/>
                                <p className={styles["dober-container_p"]}>Android</p>
                            </div>
                            <div className={styles["dober-container_item"]}>
                                <Image src={img3} alt='computer icon'/>
                                <p className={styles["dober-container_p"]}>Web</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles["text-container"]}>
                        <h2 className={styles["h2"]}>{t("use_dober_title")}</h2>
                        <p className={styles["text"]}>{t("use_dober_text")}</p>
                        <Link href="./download">
                            <button>{t("download")}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
    
}