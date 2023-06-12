"use client"

import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";

import Link from "next/link";
import Image from "next/image";

import styles from "../assets/styles/download-page.module.scss";

import img1 from "../assets/img/download/mobile_1.png";
import img2 from "../assets/img/download/mobile_2.png";
import ios from "../assets/img/download/ios.svg";
import arrow from "../assets/img/download/arrow.svg";
import screen from "../assets/img/download/screen.png";

import note from "../assets/img/download/note.svg";
import WhyDober from "../components/WhyDober";

export default function Download() {

    const pathname = usePathname();
    console.log(pathname);

    const { t } = useTranslation()
 
  return (
    <>
        <section className="container">
            <h2 style={{textAlign: 'center'}}>{t("download_page_title")}</h2>
            <div className={styles["download"]}>
                <div className={styles["download_items"]}>
                    <p className={styles["download_items_title"]}>Mobile app</p>
                    <div className={styles["item"]}>
                        <div className={styles["item_image-container"]}>
                            <div>
                                <div className={styles["inside-img"]}>
                                    <div className="item_image">
                                        <Image src={img1} alt="example dober app"></Image>
                                    </div>
                                    <div className={styles["img-absolute"]}>
                                        <Image className="arrow" src={img2} alt="example dober app"></Image>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                        <div className={styles["item_link"]}>
                            <div className={styles["center"]}>
                                <div>
                                    <Image src={ios} alt="ios logo"></Image>
                                </div>
                                <p>App Store</p>
                            </div>
                            <Image className={styles["arrow"]} src={arrow}></Image>
                        </div>
                        <div className={styles["item_link"]}>
                            <div className={styles["center"]}>
                                <div>
                                    <Image src={ios} alt="android logo"></Image>
                                </div>
                                <p>Google Play</p>
                            </div>
                            <Image className={styles["arrow"]} src={arrow}></Image>
                        </div>
                    </div>
                </div>
                <div className={styles["download_items"]}>
                    <p className={styles["download_items_title"]}> Mobile app</p>
                    <div className={styles["item"]}>
                        <div className={styles["item_image-container"]}>
                            <div>
                                <Image src={screen} alt="example web app"></Image>
                            </div>
                        </div>
                        <p >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                        <button className={styles["button"]}>
                            <Link href='/' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <div>
                                    <Image src={note} alt="note"></Image>
                                </div>
                                <p>Open web client</p>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <WhyDober />
    </>
  );
}
