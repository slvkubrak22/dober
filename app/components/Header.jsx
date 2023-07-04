"use client"

import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import logo1 from '../assets/img/logo.svg';
import logo2 from "../assets/img/logo2.svg"
import twitter_logo from '../assets/img/twitter-logo-header.svg';
import globe from '../assets/img/globe.svg';
import arrow from "../assets/img/header-arrow.svg";
import arrow_black from "../assets/img/header-arrow-black.svg";
import twitter_logo_black from "../assets/img/twitter-logo-black.svg";
import globe_black from '../assets/img/globe-black.svg';

import style from '../assets/styles/header.module.scss';



export default function Header() {

    const {t, i18n} = useTranslation();
    const handleLanguageChange =(selectedLanguage) => {
        i18n.changeLanguage(selectedLanguage);
    };

    const router = useRouter();
    const pathname = usePathname();
    const changeTextColor = () => {
        if(pathname === "/" || pathname === "/features") {
           return "#FFF";
        } else {
            return "#04022A";
        }
    };
      

    const [scroll, setScroll] = useState();
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const onChangeBlur = () => {
        if(scroll) {
            return "blur(20px)";
        } else {
            return "none";
        }   
    };
    const onchangeBgColor = () => {
        if(scroll) {
            return "#2b282857";
        } else {
            return "transparent";
        }
    }; 

    const [nav, setNav] = useState();
    function onNav() {
        setNav(!nav);
    }

    const [showProduct, setShowProduct] = useState();
    function onShowProduct() {
        setShowProduct(!showProduct);
    }
    const [showLang, setShowLang] = useState();
    function onShowLang() {
        setShowLang(!showLang);
    }

    const changeLogo = () => {
        if(pathname === "/" || pathname === "/features") {
            if (!nav) {
                return logo1;
            }
        }
        return logo2;
    }

    const changeButtonColor = () => {
        const buttonColorWhite = style["button-white"];
        const buttonColorBlack = style["button-black"];
        
        if(pathname === "/" || pathname === "/features") {
            if (!nav) {
                return buttonColorWhite;
            }
        }
        return buttonColorBlack;
    }

    return(
        <>
            <header style={{backgroundColor: onchangeBgColor(), background: nav ? '#fff' : onchangeBgColor(), color: changeTextColor(), position: 'fixed', zIndex: 10, width: '100%', backdropFilter: onChangeBlur()}} >
                <div style={{padding: '0 30px'}}> 
                    <div className={style["header"] + ' ' + style["container"]}>
                        <Link href='/'>
                            <Image className="logo" src={pathname === "/" || pathname === "/features" ? logo1 : logo2} alt="main Dober logo" />
                        </Link>
                        <ul className={style["header_list"]}>
                            <li className={style["drop-menu_container"]} >
                                <Link href='/' className={style["header_item"] + ' ' + style["header_select-product-items"]}>{t('product')}</Link>
                                <Image className={style["menu-arrow"]} src={pathname === '/' || pathname === "/features" ? arrow : arrow_black} alt="menu arrow"/>
                                <div className={style["drop-menu-products"] + ' ' + style["drop-menu_wrapper"]}>
                                    <Link href='/features'>
                                        <p>{t('features')}</p>
                                    </Link>
                                    <Link href='/security'>
                                        <p style={{marginBottom: 0}}>{t('security')}</p>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <Link href='./for_companies' className={style["header_item"]}>{t('companies')}</Link>
                            </li>
                            <li><Link href='./help' className={style["header_item"]}>{t('help')}</Link></li>
                        </ul>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <div className={style["header_buttons-container"]}>
                                <Link href="./donate">
                                    <button className={pathname === '/' || pathname === "/features" ? style["button-white"] : style["button-black"]} style={{margin: '0 10px'}}>{t('donate')}</button>
                                </Link>
                                <Link href="./download">
                                    <button className={pathname === '/' || pathname === "/features" ? style["button-white"] : style["button-black"]} >{t('download')}</button>
                                </Link>
                            </div>
                            <Link href='https://twitter.com/dober_chat'>
                                <Image className="logo" src={pathname === '/' || pathname === "/features" ? twitter_logo : twitter_logo_black} alt="twitter logo"/>
                            </Link>
                            <div className={style["header_select-lang"] + ' ' + style["drop-menu_container"]}>
                                <Image src={pathname === '/' || pathname === "/features" ? globe : globe_black} alt="change language icon"/>
                                <div>
                                    <p style={{marginTop: 18}}>{t('language')}</p>
                                    <Image className={style["menu-arrow"] + ' ' + style["menu-arrow-lang"]} src={pathname === '/' || pathname === "/features" ? arrow : arrow_black} alt="menu arrow" style={{right: -20, top: 22}}/>
                                </div>
                                <div className={style["drop-menu_wrapper"] + ' ' + style["drop-menu-lang"]}>
                                    <p onClick={() => handleLanguageChange('ru')}>RU</p>
                                    <p onClick={() => handleLanguageChange('ua')}>UA</p>
                                    <p style={{marginBottom: 0}} onClick={() => handleLanguageChange('en')}>EN</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={style["header-adapt"]}>
                        <Link href='/'>
                            <Image className="logo" src={changeLogo()} alt="main Dober logo" />
                        </Link>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <Link href="./download">
                                <button className={changeButtonColor()} >{t('download')}</button>
                            </Link>
                            <div className={style[`burger`]} onClick={onNav}>
                                <span
                                className={style['burger-line '] + ' ' + style["burger-line-top"] + ' ' + style["active"] + ' ' + (pathname === '/' || pathname === "/features" ? style["whitecolor"] : style["darkcolor"]) + ' ' + (nav ? style['darkcolor'] : '')}
                                ></span>
                                <span
                                className={style['burger-line '] + ' ' + style["burger-line-mid"] + ' ' + style["active"] + ' ' + (pathname === '/' || pathname === "/features" ? style["whitecolor"] : style["darkcolor"]) + ' ' + (nav ? style['darkcolor'] : '')}
                                ></span>
                                <span
                                className={style['burger-line '] + ' ' + style["burger-line-bottom"] + ' ' + style["active"] + ' ' + (pathname === '/' || pathname === "/features" ? style["whitecolor"] : style["darkcolor"]) + ' ' + (nav ? style['darkcolor'] : '')}
                                ></span>
                            </div>
                        </div>
                    </div>
                    <div style={{display: nav ? "flex" : "none", flexDirection: 'column', alignItems: 'center' }} className={style["adapt"]}>
                        <ul className={style["header_list"]} style={{display: nav ? "flex" : "none"}}>
                            <li className={style["drop-menu_container"]} >
                                <div className={style["header_item"] + ' ' + style["header_select-product-items"]} onClick={onShowProduct}>
                                    {t('product')}
                                </div>
                                <Image className={style["menu-arrow"]} src={arrow_black} alt="menu arrow" style={{rotate: showProduct ? '180deg' : ''}}/>
                                <div className={style["drop-menu-products"] + ' ' + style["drop-menu_wrapper"]} style={{display: showProduct ? 'flex' : 'none'}}>
                                    <Link href='/features'>
                                        <p>{t('features')}</p>
                                    </Link>
                                    <Link href='/security'>
                                        <p style={{marginBottom: 0}}>{t('security')}</p>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <Link href='./for_companies' className={style["header_item"]}>{t('companies')}</Link>
                            </li>
                            <li><Link href='./help' className={style["header_item"]}>{t('help')}</Link></li>
                        </ul>
                        <div className={style["header_buttons-container"]}>
                                <Link href="./donate">
                                    <button className={style["button-black"]} style={{margin: '0 10px'}}>{t('donate')}</button>
                                </Link>
                            </div>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            
                            <Link href='https://twitter.com/dober_chat'>
                                <Image className="logo" src={twitter_logo_black} alt="twitter logo"/>
                            </Link>
                            <div className={style["header_select-lang"] + ' ' + style["drop-menu_container"]}>
                                <Image src={globe_black} alt="change language icon"/>
                                <div>
                                    <p style={{marginTop: 18}} onClick={onShowLang}>{t('language')}</p>
                                    <Image className={style["menu-arrow"] + ' ' + style["menu-arrow-lang"]} src={arrow_black} alt="menu arrow" style={{right: -20, top: 22}}/>
                                </div>
                            </div>
                            
                        </div>

                        <div className={style["drop-menu_wrapper"] + ' ' + style["drop-menu-lang"]} style={{display: showLang ? 'flex' : 'none'}}>
                            <p onClick={() => handleLanguageChange('ru')}>RU</p>
                            <p onClick={() => handleLanguageChange('ua')}>UA</p>
                            <p style={{marginBottom: 0}} onClick={() => handleLanguageChange('en')}>EN</p>
                        </div>
                    </div>
                </div>
            </header>
            <div style={{height: pathname === "/" || pathname === "/features" ? 0 : 100}}></div>
        </>    
    )
}