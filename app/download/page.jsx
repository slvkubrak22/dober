"use client"

import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

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

    const { t } = useTranslation();

    // const [activeIndex, setActiveIndex] = useState(0);
    // const sliderRef = useRef(null);

    // const handleTitleClick = (index) => {
    //     setActiveIndex(index);
    //     scrollToSlide(index);
    // };

    // const scrollToSlide = (index) => {
    //     const sliderElement = sliderRef.current;
    //     if (sliderElement) {
    //     const slideWidth = sliderElement.offsetWidth;
    //     sliderElement.scrollTo({
    //         left: slideWidth * index,
    //         behavior: 'smooth',
    //     });
    //     }
    // };

    // const handleScroll = () => {
    //     const sliderElement = sliderRef.current;
    //     if (sliderElement) {
    //     const slideWidth = sliderElement.offsetWidth;
    //     const currentIndex = Math.floor(
    //         sliderElement.scrollLeft / slideWidth + 0.5
    //     );
    //     setActiveIndex(currentIndex);
    //     }
    // };

    // useEffect(() => {
    //     const sliderElement = sliderRef.current;
    //     if (sliderElement) {
    //     sliderElement.addEventListener('scroll', handleScroll);
    //     }
    //     return () => {
    //     if (sliderElement) {
    //         sliderElement.removeEventListener('scroll', handleScroll);
    //     }
    //     };
    // }, []);

    // const slides = [
    //     { 
    //         id: 1, 
    //         image: '/image1.jpg' 
    //     },
    //     { 
    //         id: 2, 
    //         image: '/image2.jpg' 
    //     },
    //     { 
    //         id: 3, 
    //         image: '/image3.jpg' 
    //     },
    // ];

    

    // const slides = [
    //     <div className={styles["item"]}>
    //         <div className={styles["item_image-container"]}>
    //             <Image style={{width: '50%', height: '100%'}} src={new1}></Image>
    //         </div>
    //         <p>{t("download_page_item_1")}</p>
    //         <Link target="_blank" href='https://apps.apple.com/in/app/dober-%20public/id1658387713'>
    //             <div className={styles["item_link"]}>
    //                 <div className={styles["center"]}>
    //                     <div>
    //                         <Image src={ios} alt="ios logo"></Image>
    //                     </div>
    //                     <p>App Store</p>
    //                 </div>
    //                 <Image className={styles["arrow"]} src={arrow}></Image>
    //             </div>
    //         </Link>
    //         <Link target="_blank" href='https://play.google.com/store/apps/details?id=me.dober'>
    //             <div className={styles["item_link"]}>
    //                 <div className={styles["center"]}>
    //                     <div>
    //                         <Image src={android} alt="android logo"></Image>
    //                     </div>
    //                     <p>Google Play</p>
    //                 </div>
    //                 <Image className={styles["arrow"]} src={arrow}></Image>
    //             </div>
    //         </Link>
    //     </div>,
    //     <div className={styles["item"]}>
    //         <div className={styles["item_image-container"]}>
    //             {/* <div> */}
    //                 <Image style={{width: '100%', height: '100%'}} src={new2} alt="example web app"></Image>
    //             {/* </div> */}
    //         </div>
    //         <p >{t("download_page_item_2")}</p>
    //         <button className={styles["button"]}>
    //             <Link target="_blank" href='https://dober.me/web/index.html' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    //                 <div>
    //                     <Image src={note} alt="note"></Image>
    //                 </div>
    //                 <p>Open web client</p>
    //             </Link>
    //         </button>
    //     </div>,
    //     <div className={styles["item"]}>
    //         <div className={styles["item_image-container"]}>
    //             {/* <div> */}
    //                 <Image style={{width: '84%', height: '100%'}} src={new3} alt="example web app"></Image>
    //             {/* </div> */}
    //         </div>
    //         <p style={{letterSpacing: 0}}>{t("download_page_item_3")}</p>
    //         <Link target="_blank" href='https://apps.apple.com/in/app/dober-business/id1659640166'>
    //             <div className={styles["item_link"]}>
    //                 <div className={styles["center"]}>
    //                     <div>
    //                         <Image src={ios} alt="ios logo"></Image>
    //                     </div>
    //                     <p>App Store</p>
    //                 </div>
    //                 <Image className={styles["arrow"]} src={arrow}></Image>
    //             </div>
    //         </Link>
    //         <Link target="_blank" href='https://play.google.com/store/apps/details?id=chat.dober&pli=1'>
    //             <div className={styles["item_link"]}>
    //                 <div className={styles["center"]}>
    //                     <div>
    //                         <Image src={android} alt="android logo"></Image>
    //                     </div>
    //                     <p>Google Play</p>
    //                 </div>
    //                 <Image className={styles["arrow"]} src={arrow}></Image>
    //             </div>
    //         </Link>
    //     </div>
    // ];
    // const activeSlide = slides[activeIndex];
  return (
    <>
        <section className="container">
            <h2 style={{textAlign: 'center'}}>{t("download_page_title")}</h2>
            <div className={styles["download"]}>
                <div className={styles["download_items"]}>
                    <p className={styles["download_items_title"]}>Mobile app</p>
                    <div className={styles["item"]}>
                        <div className={styles["item_image-container"]}>
                            <Image style={{width: '50%', height: '100%'}} src={new1}></Image>
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
                                <Image className={styles["arrow"]} src={arrow}></Image>
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
                                <Image className={styles["arrow"]} src={arrow}></Image>
                            </div>
                        </Link>
                    </div>
                </div>

                

            </div>

            {/* <div>
                    <div>
                        <h3
                        onClick={() => handleTitleClick(0)}
                        style={{
                            fontWeight: activeIndex === 0 ? 'bold' : 'normal',
                            textDecoration: activeIndex === 0 ? 'underline' : 'none',
                            cursor: 'pointer',
                        }}
                        >
                        Image1
                        </h3>
                        <h3
                        onClick={() => handleTitleClick(1)}
                        style={{
                            fontWeight: activeIndex === 1 ? 'bold' : 'normal',
                            textDecoration: activeIndex === 1 ? 'underline' : 'none',
                            cursor: 'pointer',
                        }}
                        >
                        Image2
                        </h3>
                        <h3
                        onClick={() => handleTitleClick(2)}
                        style={{
                            fontWeight: activeIndex === 2 ? 'bold' : 'normal',
                            textDecoration: activeIndex === 2 ? 'underline' : 'none',
                            cursor: 'pointer',
                        }}
                        >
                        Image3
                        </h3>
                    </div>

                    <div
                        ref={sliderRef}
                        style={{
                        width: '100%',
                        height: 'auto',
                        overflowX: 'scroll',
                        whiteSpace: 'nowrap',
                        display: "flex",
                        }}
                    >
                        {slides.map((slide, index) => (
                            <div style={{
                                display: 'inline-block',
                                width: '100%',
                                height: 'auto',
                              }}key={index}>{slide}</div>
                        ))}
                    </div>
                </div> */}
        </section>
        <WhyDober />
    </>
  );
}
