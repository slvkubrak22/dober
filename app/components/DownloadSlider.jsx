import { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';

import Link from "next/link";
import Image from "next/image";

export default function Slider({ 
    t, 
    styles, 
    ios,
    android,
    arrow,
    new1,
    new2,
    new3,
    note
}) 
{
    const [activeSlide, setActiveSlide] = useState(0);
    const swiperRef = useRef(null);

    useEffect(() => {
        const loadSwiper = async () => {
        const { default: Swiper } = await import('swiper');
        await import('swiper/swiper.min.css');

        const swiper = new Swiper(swiperRef.current, {
            slidesPerView: 1,
            spaceBetween: 0,
            on: {
            slideChange: () => {
                setActiveSlide(swiper.realIndex);
            },
            },
        });
        };

        loadSwiper();

        return () => {
        if (swiperRef.current) {
            swiperRef.current.destroy();
        }
        };
    }, []);

    const handleSlideClick = (index) => {
        if (swiperRef.current && swiperRef.current.slideTo) {
        //   swiperRef.current.slideTo(index);
        swiperRef.current.scrollTo(index);
        }
    };

    return (
        <div className={styles["download-slider"]}>
            <div className="slider-navigation">
                <div
                className={`slider-navigation-item ${activeSlide === 0 ? 'active' : ''}`}
                onClick={() => handleSlideClick(0)}
                >
                    <p className={styles["download_items_title"]}>Mobile app</p>
                </div>
                <div
                className={`slider-navigation-item ${activeSlide === 1 ? 'active' : ''}`}
                onClick={() => handleSlideClick(1)}
                >
                    <p className={styles["download_items_title"]}> Web app</p>
                </div>
                <div
                className={`slider-navigation-item ${activeSlide === 2 ? 'active' : ''}`}
                onClick={() => handleSlideClick(2)}
                >
                    <p className={styles["download_items_title"]}>Business App</p>
                </div>
            </div>
            <div className="swiper-container" ref={swiperRef}>
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div style={{padding:20}}>
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
                    </div>
                    <div className="swiper-slide">
                        <div style={{padding: 20}}>
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
                    </div>
                    <div className="swiper-slide">
                        <div style={{padding: 20}}>
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
                </div>
            </div>
            <style jsx>{`
                .swiper-container {
                width: 100%;
                /*height: 100vh;*/
                }

                .swiper-slide {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                }

                .slider-navigation {
                display: flex;
                justify-content: center;
                margin-top: 20px;
                }

                .slider-navigation-item {
                margin: 0 10px;
                cursor: pointer;
                }

                .slider-navigation-item.active {
                border-bottom: 2px solid #000;
                }
            `}</style>
        </div>
    );
};






