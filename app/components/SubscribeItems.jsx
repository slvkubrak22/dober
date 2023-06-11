"use client"

import { usePathname } from "next/navigation";
import Image from "next/image";

import twitterLogo from "../assets/img/twitter-logo-color.svg";
import linkedinLogo from "../assets/img/linkedin-logo.svg";

import styles from "../assets/styles/subscribe-items.module.scss";

export default function SubscribeItems() {

    const pathname = usePathname();

    return (
        <div className={styles["subscribe_item-container"]}>
            <div className={styles["subscribe_item-container_item"] + ' ' + (pathname === '/contacts'? styles["margin"] : '')}>
                <div className={styles["subscribe_item-container_item_logo-container"]}>
                    <Image src={twitterLogo} alt="Twitter logo link"/>
                </div>
                <h3>Twitter</h3>
            </div>
            <div className={styles["subscribe_item-container_item"] + ' ' + (pathname === '/contacts'? styles["margin"] : '')}>
                <div className={styles["subscribe_item-container_item_logo-container"]}>
                    <Image src={linkedinLogo} alt="Linkedin logo link"/>
                </div>
                <h3>Linkedin</h3>
            </div>
        </div>
    )
}