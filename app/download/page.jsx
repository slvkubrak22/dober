"use client"

import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";

import Link from "next/link";
import Image from "next/image";

import styles from "../assets/styles/download-page.module.scss";


import ios from "../assets/img/download/ios.svg";
import android from "../assets/img/download/android.svg"
import arrow from "../assets/img/download/arrow.svg";
import download_arrow from "../assets/img/download/material-symbols_download-sharp.svg";
import new1 from "../assets/img/download/new1.png";
import new2 from "../assets/img/download/new2.png";
import new3 from "../assets/img/download/new3.png";
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
                            {/* <div>
                                <div className={styles["inside-img"]}>
                                    <div className="item_image">
                                        <Image src={img1} alt="example dober app"></Image>
                                    </div>
                                    <div className={styles["img-absolute"]}>
                                        <Image className="arrow" src={img2} alt="example dober app"></Image>
                                    </div>
                                </div>
                            </div> */}
                            <Image style={{width: '50%', height: '100%'}} src={new1}></Image>
                        </div>
                        <p >Завантажуйте мобільні версії месенджеру Dober та будьте впевнені в конфіденційності розмов </p>
                        <Link target="_blank" href='https://apps.apple.com/in/app/dober-%20public/id1658387713'>
                            <div className={styles["item_link"]}>
                                <div className={styles["center"]}>
                                    <div>
                                        <Image src={ios} alt="ios logo"></Image>
                                    </div>
                                    <p>App Store</p>
                                </div>
                                <Image className={styles["arrow"]} src={arrow}></Image>
                            </div>
                        </Link>
                        <Link target="_blank" href='https://play.google.com/store/apps/details?id=me.dober'>
                            <div className={styles["item_link"]}>
                                <div className={styles["center"]}>
                                    <div>
                                        <Image src={android} alt="android logo"></Image>
                                    </div>
                                    <p>Google Play</p>
                                </div>
                                <Image className={styles["arrow"]} src={arrow}></Image>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={styles["download_items"]}>
                    <p className={styles["download_items_title"]}> Web app</p>
                    <div className={styles["item"]}>
                        <div className={styles["item_image-container"]}>
                            {/* <div> */}
                                <Image style={{width: '100%', height: '100%'}} src={new2} alt="example web app"></Image>
                            {/* </div> */}
                        </div>
                        <p >Завантажуйте мобільні версії месенджеру Dober та будьте впевнені в конфіденційності розмов </p>
                        <button className={styles["button"]}>
                            <Link target="_blank" href='https://dober.me/web/index.html' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <div>
                                    <Image src={note} alt="note"></Image>
                                </div>
                                <p>Open web client</p>
                            </Link>
                        </button>
                    </div>
                </div>
                <div className={styles["download_items"]}>
                    <p className={styles["download_items_title"]}>Business App</p>
                    <div className={styles["item"]}>
                        <div className={styles["item_image-container"]}>
                            {/* <div> */}
                                <Image style={{width: '84%', height: '100%'}} src={new3} alt="example web app"></Image>
                            {/* </div> */}
                        </div>
                        <p >Завантажуйте мобільні версії месенджеру Dober та будьте впевнені в конфіденційності розмов</p>
                        <button style={{margin: "60px 0 20px 0"}} className={styles["button"]}>
                            <Link target="_blank" href='https://apps.apple.com/in/app/dober-business/id1659640166' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <div>
                                    <Image src={download_arrow} alt="download arrow"></Image>
                                </div>
                                <p>Download</p>
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
