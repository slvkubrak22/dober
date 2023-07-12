import { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';

import Image from "next/image";

export default function Slider({ 
    styles,
    control_1,
    control_2
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
        <div className={styles["security-slider"]}>
            
            <div className="swiper-container" ref={swiperRef}>
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className={styles["image-container"]}>
                            <Image src={control_1} alt='control image' />
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className={styles["image-container"]}>
                            <Image src={control_2} alt='control image' />
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="slider-navigation">
                <div
                className={`slider-navigation-item ${activeSlide === 0 ? 'active' : ''}`}
                onClick={() => handleSlideClick(0)}
                >
                </div>
                <div
                className={`slider-navigation-item ${activeSlide === 1 ? 'active' : ''}`}
                onClick={() => handleSlideClick(1)}
                >
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
                width: 10px;
                height: 10px;
                border-radius: 50%;
                border: solid 1px #04022A;
                margin: 0 5px;
                }

                .slider-navigation-item.active {
                background-color: #04022A;
                }
            `}</style>
        </div>
    );
};






