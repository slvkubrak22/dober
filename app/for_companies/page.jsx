"use client"

import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";

import icon_1 from "../assets/img/for-companies/icon_1.svg";
import icon_2 from "../assets/img/for-companies/icon_2.svg";
import icon_3 from "../assets/img/for-companies/icon_3.svg";
import devices from "../assets/img/for-companies/devices.png";
import shield from "../assets/img/for-companies/shield.svg";

import styles from "../assets/styles/for-companies.module.scss";
import TabsComponent from "../components/Tabs";
import UseDober from "../components/UseDober";
import Subscribe from "../components/Subscribe";

export default function ForCompanies() {

    const { t } = useTranslation();

    return (
        <>
            <section className="container">
                <div className={styles["flex"] + ' ' + styles["first-section"]}>
                    <div className={styles["text-container"]}>
                        <h2>Платформа захищеного спілкування</h2>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <div className={styles["flex"] + ' ' + styles["button-container"]}>
                            <Link href='/download'>
                                <button className={styles["button"]}>Download</button>
                            </Link>
                            <Link href='/contacts'>
                                <button className={styles["button"]}>Contact us</button>
                            </Link>
                        </div>
                        <div className={styles["flex"] + ' ' + styles["icon-link-container"]}>
                            <div className={styles["flex"]}>
                                <Image alt="icon android" src={icon_1}/>
                            </div>
                            <div className={styles["flex"]}>
                                <Image alt="icon web" src={icon_2}/>
                            </div>
                            <div>
                                <Image alt="icon apple" src={icon_3}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles["image-container"]}>
                        <Image className={styles["devices-image"]} alt="devices image" src={devices}/>
                    </div>
                </div>
            </section>
            <section className="container">
                <h2 className={styles["text-center"]}>Для різних видів компаній</h2>
                <p className={styles["text-center"]}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
                <TabsComponent t={t} styles={styles}/>
            </section>
            <section className="container">
                <div className={styles["flex"] + ' ' + styles["shield-container"]}>
                    <h2>Безпека з dober</h2>
                    <div className={styles["shield-container_grid"]}>
                        <div className={styles["shield-container_grid_item"]}>
                            <h3>Прийняті методи та концепціїї</h3>
                            <p>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit.
                            </p>
                        </div>
                        <div className={styles["shield-container_grid_item-middle"]}>
                            <div className="image-container">
                                <Image src={shield}/>
                            </div>
                            <Link href="/security">
                                <button className={styles["button"]}>{t("button_learn_more")}</button>
                            </Link>
                        </div>
                        <div className={styles["shield-container_grid_item"]}>
                            <h3>Прийняті методи та концепціїї</h3>
                            <p>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <UseDober />
            <Subscribe />
        </>
    )
}