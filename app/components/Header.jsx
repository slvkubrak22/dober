import Link from "next/link";
import Image from "next/image";
import logo from '../assets/img/logo.png';
import twitter_logo from '../assets/img/twitter-logo.png';
import globe from '../assets/img/globe.png';

import style from '../assets/styles/header.module.scss';

export default function Header() {
    return(
        <header className="container">
            <div className={style["header"] + ' ' + style["container"]}>
                <Image className="logo" src={logo} alt="main Dober logo" />
                <ul className={style["header_list"]}>
                    <li ><Link href='/' className={style["header_item"]}>Продукт</Link></li>
                    <li><Link href='/' className={style["header_item"]}>Для компаний</Link></li>
                    <li><Link href='/' className={style["header_item"]}>Помощь</Link></li>
                </ul>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div className={style["header_buttons-container"]}>
                        <button style={{margin: '0 10px'}}>Donate</button>
                        <button>Download</button>
                    </div>
                    <Image className="logo" src={twitter_logo} alt="twitter logo"/>
                    <div className={style["header_select-lang"]}>
                        <Image src={globe} alt="change language icon"/>
                        EN
                    </div>
                </div>
            </div>
        </header>
    )
}