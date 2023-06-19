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
                        <h2>Наші контакти</h2>
                        <div className={styles["contacts-container_item"]}>
                            <p className="small-text">Україна</p>
                            <div className={styles["phones"]}>
                                <Link href="tel:+380963034689">+38 096 303 46 89</Link>
                                <Link href="tel:+380433034689">+38 043 303 46 89</Link>
                            </div>
                        </div>
                        <div className={styles["contacts-container_item"]}>
                            <p className="small-text">E-mail</p>
                            <Link href="mailto:support-teamdober@gmail">support-teamdober@gmail</Link>
                        </div>
                        <div className={styles["contacts-container_item"]}>
                            <p className="small-text">Напишіть нам</p>
                            <SubscribeItems />
                        </div>

                    </div>
                    <div className={styles["send-info"]}>
                        <p>
                            Якщо жоден варіант  вам не підійшов - просто заповніть форму нижчу і ми зв’яжемось з вами  телефоном або поштою
                        </p>
                        <div className={styles["send-info_item"]}>
                            <label htmlFor="name">Ваше ім’я</label>
                            <input id="name" type="text" placeholder="Ваше ім’я"/>
                        </div>
                        <div className={styles["send-info_item"]}>
                            <label htmlFor="tel">Ваш телефон</label>
                            <input id="tel" type="tel" placeholder="+38 097 457 11 46"/>
                        </div>
                        <div className={styles["send-info_item"]}>
                            <label htmlFor="email">Ваш email</label>
                            <input id="email" type="email" placeholder="example@gmail.com"/>
                        </div>
                        <div className={styles["send-info_item"]}>
                            <label htmlFor="comment">Ваш коментар</label>
                            <textarea name="comment" id="comment" cols="30" rows="5" maxLength="300"></textarea>
                        </div>
                        <button type="submit" className={styles["button"]}>Надіслати</button>
                    </div>
                </div>
            </section>
        </>
    )
}