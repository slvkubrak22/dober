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
import Slider from "../components/DownloadSlider";

export default function Download() {

    const pathname = usePathname();
    console.log(pathname);

    const { t } = useTranslation();

    return (
        <>
            <section className="container">
                <h2 style={{textAlign: 'center'}}>{t("download_page_title")}</h2>
                <div className={styles["download"]}>
                    <div className={styles["download_items"]}>
                        <p className={styles["download_items_title"]}>Mobile app</p>
                        <div className={styles["item"]}>
                            <div className={styles["item_image-container"]}>
                                <Image alt='mobile app' style={{width: '50%', height: '100%'}} src={new1}></Image>
                            </div>
                            <p>{t("download_page_item_1")}</p>
                            <Link target="_blank" href='https://apps.apple.com/in/app/dober-%20public/id1658387713'>
                                <div className={styles["item_link"]}>
                                    <div className={styles["center"]}>
                                        <div>
                                            <Image src={ios} alt="ios logo"></Image>
                                        </div>
                                        <p>App Store</p>
                                    </div>
                                    <Image alt='arrow' className={styles["arrow"]} src={arrow}></Image>
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
                                    <Image alt='arrow' className={styles["arrow"]} src={arrow}></Image>
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
                            <p >{t("download_page_item_2")}</p>
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
                            <p style={{letterSpacing: 0}}>{t("download_page_item_3")}</p>
                            <Link target="_blank" href='https://apps.apple.com/in/app/dober-business/id1659640166'>
                                <div className={styles["item_link"]}>
                                    <div className={styles["center"]}>
                                        <div>
                                            <Image src={ios} alt="ios logo"></Image>
                                        </div>
                                        <p>App Store</p>
                                    </div>
                                    <Image alt='arrow' className={styles["arrow"]} src={arrow}></Image>
                                </div>
                            </Link>
                            <Link target="_blank" href='https://play.google.com/store/apps/details?id=chat.dober&pli=1'>
                                <div className={styles["item_link"]}>
                                    <div className={styles["center"]}>
                                        <div>
                                            <Image src={android} alt="android logo"></Image>
                                        </div>
                                        <p>Google Play</p>
                                    </div>
                                    <Image alt='arrow' className={styles["arrow"]} src={arrow}></Image>
                                </div>
                            </Link>
                        </div>
                    </div>

                    

                </div>
                <Slider 
                    t={t}
                    styles={styles}
                    ios={ios}
                    android={android}
                    arrow={arrow}
                    new1={new1}
                    new2={new2}
                    new3={new3}
                    note={note}
                />
            </section>
            <WhyDober />
        </>
    );
}
