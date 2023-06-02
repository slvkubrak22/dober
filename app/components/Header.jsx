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
                <Link href='/'>
                    <Image className="logo" src={logo} alt="main Dober logo" />
                </Link>
                <ul className={style["header_list"]}>
                    <li ><Link href='/' className={style["header_item"]}>Продукт</Link></li>
                    <li><Link href='./for_companies' className={style["header_item"]}>Для компаний</Link></li>
                    <li><Link href='./help' className={style["header_item"]}>Помощь</Link></li>
                </ul>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div className={style["header_buttons-container"]}>
                        <Link href="./donate">
                            <button style={{margin: '0 10px'}}>Donate</button>
                        </Link>
                        <Link href="./download">
                            <button>Download</button>
                        </Link>
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