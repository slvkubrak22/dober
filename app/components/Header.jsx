"use client"

import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
// import { NextConfig } from 'next';
import { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import logo1 from '../assets/img/logo.png';
import logo2 from "../assets/img/logo2.svg"
import twitter_logo from '../assets/img/twitter-logo.png';
import globe from '../assets/img/globe.png';
import arrow from "../assets/img/header-arrow.svg";

import style from '../assets/styles/header.module.scss';



export default function Header() {

    const {t, i18n} = useTranslation();
    const handleLanguageChange =(selectedLanguage) => {
        i18n.changeLanguage(selectedLanguage);
    };

    const router = useRouter();
    const pathname = usePathname();
    console.log(pathname);
    const changeTextColor = () => {
        if(pathname === "/") {
           return "#FFF";
        } else if (pathname === "/download") {
            return "#04022A";
        }
    };
      

    const [scroll, setScroll] = useState();
    const handleScroll = () => {
        if (window.scrollY > 100) {
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
            return "#9c0fd5fa";
        } else {
            return "transparent";
        }
    }; 


    return(
        <header style={{backgroundColor: onchangeBgColor(), color: changeTextColor(), position: 'fixed', zIndex: 10, width: '100%', backdropFilter: onChangeBlur()}}>
            <div style={{padding: '0 30px'}}> 
                <div className={style["header"] + ' ' + style["container"]}>
                    <Link href='/'>
                        <Image className="logo" src={pathname === "/" ? logo1 : logo2} alt="main Dober logo" />
                    </Link>
                    <ul className={style["header_list"]}>
                        <li style={{position: 'relative'}} className="aaa">
                            <Link href='/' className={style["header_item"]}>{t('product')}</Link>
                            <Image className={style["menu-arrow"]} src={arrow} alt="menu arrow"/>
                            <div className={style["drop-menu"]}>
                                <p>{t('features')}</p>
                                <p>{t('security')}s</p>
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
                                <button className={pathname === '/' ? style["button-white"] : style["button-black"]} style={{margin: '0 10px'}}>{t('donate')}</button>
                            </Link>
                            <Link href="./download">
                                <button className={pathname === '/' ? style["button-white"] : style["button-black"]} >{t('download')}</button>
                            </Link>
                        </div>
                        <Image className="logo" src={twitter_logo} alt="twitter logo"/>
                        <div className={style["header_select-lang"]}>
                            <Image src={globe} alt="change language icon"/>
                            <p style={{marginTop: 18}}>{t('language')}</p>
                            <Image className={style["menu-arrow"] + ' ' + style["menu-arrow-lang"]} src={arrow} alt="menu arrow" style={{right: -20, top: 22}}/>
                            <div className={style["drop-menu"]}>
                                <p onClick={() => handleLanguageChange('ru')}>RU</p>
                                <p onClick={() => handleLanguageChange('ua')}>UA</p>
                                <p onClick={() => handleLanguageChange('en')}>EN</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}