"use client"

import { useTranslation } from "react-i18next";
import Link from "next/link";

import styles from "../assets/styles/contacts.module.scss";
import SubscribeItems from "../components/SubscribeItems";

export default function ContactUs() {

    const { t } = useTranslation();

    return(
        <>
            <section className="container">
                <div className={styles["contacts-container"]}>
                    <div className="left">
                        <h2>{t("contact_us_page_title")}</h2>
                        <div className={styles["contacts-container_item"]}>
                            <p className="small-text">{t("contact_us_page_country")}</p>
                            <div className={styles["phones"]}>
                                <Link href="tel:+380995520757">+38 099 552 07 57</Link>
                            </div>
                        </div>
                        <div className={styles["contacts-container_item"]}>
                            <p className="small-text">E-mail</p>
                            <Link href="mailto:support@dober.chat">support@dober.chat</Link>
                        </div>
                        <div className={styles["contacts-container_item"]}>
                            <p className="small-text">{t("contact_us_page_socials")}</p>
                            <SubscribeItems />
                        </div>

                    </div>
                    <div className={styles["send-info"]}>
                        <p>
                        {t("contact_us_page_text")}
                        </p>
                        <div className={styles["send-info_item"]}>
                            <label htmlFor="name">{t("contact_us_page_name")}</label>
                            <input id="name" type="text" placeholder={t("contact_us_page_name")}/>
                        </div>
                        <div className={styles["send-info_item"]}>
                            <label htmlFor="tel">{t("contact_us_page_number")}</label>
                            <input id="tel" type="tel" placeholder="+38 097 457 11 46"/>
                        </div>
                        <div className={styles["send-info_item"]}>
                            <label htmlFor="email">{t("contact_us_page_users_email")}</label>
                            <input id="email" type="email" placeholder="example@gmail.com"/>
                        </div>
                        <div className={styles["send-info_item"]}>
                            <label htmlFor="comment">{t("contact_us_page_comment")}</label>
                            <textarea name="comment" id="comment" cols="30" rows="5" maxLength="300"></textarea>
                        </div>
                        <button type="submit" className={styles["button"]}>{t("contact_us_page_send")}</button>
                    </div>
                </div>
            </section>
        </>
    )
}