"use client"

import { useTranslation } from "react-i18next";

import Link from "next/link";
import Image from "next/image";

import logo from '../assets/img/logo.png';
import twitter_logo from '../assets/img/twitter-logo.png';
import globe from '../assets/img/globe.png';
import arrow from "../assets/img/header-arrow.svg";

import style from '../assets/styles/header.module.scss';


export default function Header() {

    const {t, i18n} = useTranslation();
    const handleLanguageChange =(selectedLanguage) => {
        i18n.changeLanguage(selectedLanguage);
    };

    return(
        <header className="container">
            <div className={style["header"] + ' ' + style["container"]}>
                <Link href='/'>
                    <Image className="logo" src={logo} alt="main Dober logo" />
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
                            <button style={{margin: '0 10px'}}>{t('donate')}</button>
                        </Link>
                        <Link href="./download">
                            <button>{t('download')}</button>
                        </Link>
                    </div>
                    <Image className="logo" src={twitter_logo} alt="twitter logo"/>
                    <div className={style["header_select-lang"]}>
                        <Image src={globe} alt="change language icon"/>
                        <p style={{marginTop: 18}}>{t('language')}</p>
                        <Image className={style["menu-arrow"] + ' ' + style["menu-arrow-lang"]} src={arrow} alt="menu arrow" style={{right: -20, top: 22}}/>
                        <div className={style["drop-menu"]}>
                            {/* <p value="ru">RU</p>
                            <p value="ua">UA</p>
                            <p value="en">EN</p> */}
                            <p onClick={() => handleLanguageChange('ru')}>RU</p>
                            <p onClick={() => handleLanguageChange('ua')}>UA</p>
                            <p onClick={() => handleLanguageChange('en')}>EN</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}