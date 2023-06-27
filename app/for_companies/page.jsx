"use client"

import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";

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
                                <Link target="_blank" href='https://play.google.com/store/apps/details?id=me.dober'>
                                    <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className={styles["svg-color"]} d="M22.3333 8.16902L24.8333 3.83654C25 3.58659 24.9167 3.25333 24.6667 3.08669C24.4167 2.92006 24.0833 3.00338 23.9167 3.25333L21.4167 7.66912C19.5 6.75263 17.3333 6.25273 15 6.25273C12.6667 6.25273 10.5 6.75263 8.58333 7.66912L6.08333 3.25333C5.91667 3.00338 5.58333 2.92006 5.33333 3.08669C5.08333 3.25333 5 3.58659 5.16667 3.83654L7.66667 8.16902C3.41667 10.5019 0.416667 14.8344 0 20H30C29.5833 14.8344 26.6667 10.5019 22.3333 8.16902ZM7.66667 15.4176C6.83333 15.4176 6.16667 14.751 6.16667 13.9179C6.16667 13.0847 6.83333 12.4182 7.66667 12.4182C8.5 12.4182 9.16667 13.0847 9.16667 13.9179C9.16667 14.751 8.5 15.4176 7.66667 15.4176ZM20.75 15.4176C19.9167 15.4176 19.25 14.751 19.25 13.9179C19.25 13.0847 19.9167 12.4182 20.75 12.4182C21.5833 12.4182 22.25 13.0847 22.25 13.9179C22.25 14.751 21.5833 15.4176 20.75 15.4176Z" fill=""/>
                                    </svg>
                                </Link>
                               
                            </div>
                            <div className={styles["flex"]}>
                                <Link target="_blank" href='https://dober.me/web/index.html'>
                                    <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path  d="M12 22H15.6364M12 22L12.4545 18.3636H15.1818L15.6364 22M12 22H9.27273M15.6364 22H18.3636M3.81818 2H23.8182C24.3004 2 24.7629 2.19156 25.1038 2.53253C25.4448 2.87351 25.6364 3.33597 25.6364 3.81818V16.5455C25.6364 17.0277 25.4448 17.4901 25.1038 17.8311C24.7629 18.1721 24.3004 18.3636 23.8182 18.3636H3.81818C3.33597 18.3636 2.87351 18.1721 2.53253 17.8311C2.19156 17.4901 2 17.0277 2 16.5455V3.81818C2 3.33597 2.19156 2.87351 2.53253 2.53253C2.87351 2.19156 3.33597 2 3.81818 2Z" stroke="#04022A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <rect  x="12" y="19" width="3" height="3" fill="#04022A"/>
                                    </svg>
                                </Link>
                            </div>
                            <div>
                                <Link target="_blank" href='https://apps.apple.com/in/app/dober-%20public/id1658387713'>
                                    <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className={styles["svg-color"]} d="M19.7012 1C17.2032 1.90837 15.2351 2.74104 15.5378 6.60159C18.0359 5.99602 20.2311 4.48207 19.7012 1ZM11.9801 6.14741C9.55777 6.14741 6 8.34263 6 12.3546C6 18.0319 9.78486 23.7092 11.9801 23.7092C13.5697 23.7092 14.9323 22.6494 16.0677 22.6494C17.1275 22.6494 18.2629 23.7092 19.8526 23.7092C22.0478 23.7092 24.4701 20.4542 25 17.502C23.1076 16.1394 21.745 15.3068 21.745 12.8845C21.745 11.2948 23.1076 9.62948 24.6972 8.26693C23.8645 7.20717 22.2749 6.07171 20.6096 6.07171C18.9442 6.07171 17.2789 7.35857 15.992 7.43426C14.9323 7.50996 13.5697 6.14741 11.9801 6.14741Z" fill=""/>
                                    </svg>
                                </Link>
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