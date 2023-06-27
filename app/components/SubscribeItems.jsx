"use client"

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from 'next/link';

import twitterLogo from "../assets/img/twitter-logo-color.svg";
import linkedinLogo from "../assets/img/linkedin-logo.svg";

import styles from "../assets/styles/subscribe-items.module.scss";

export default function SubscribeItems() {

    const pathname = usePathname();

    return (
        <div className={styles["subscribe_item-container"]}>
            <div className={styles["subscribe_item-container_item"] + ' ' + (pathname === '/contacts'? styles["margin"] : '')}>
                <div className={styles["subscribe_item-container_item_logo-container"]}>
                    <Link href='https://twitter.com/dober_chat'>
                        <Image src={twitterLogo} alt="Twitter logo link"/>
                    </Link>
                </div>
                <h3>Twitter</h3>
            </div>
            <div className={styles["subscribe_item-container_item"] + ' ' + (pathname === '/contacts'? styles["margin"] : '')}>
                <div className={styles["subscribe_item-container_item_logo-container"]}>
                    <Link href='https://www.linkedin.com/company/dober.chat/?viewAsMember=true'>
                        <Image src={linkedinLogo} alt="Linkedin logo link"/>
                    </Link>
                </div>
                <h3>Linkedin</h3>
            </div>
        </div>
    )
}