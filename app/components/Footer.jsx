import { useTranslation } from "react-i18next";
import Link from "next/link";

import Image from "next/image";

import logo from "../assets/img/logo2.svg"
import styles from "../assets/styles/footer.module.scss"

export default function Footer() {

    const { t } = useTranslation();

    return(
        <footer className={styles["footer"]}>
            <div className="container">
                <div className={styles["footer_container"]}>
                    <Link href="/">
                        <Image src={logo} alt="Logo image"></Image>
                    </Link>
                    <div className={styles["footer_link-container"]}>
                        <p className={styles["bold"]}>{t('product')}</p>
                        <Link href="/features">
                            <p>{t('features')}</p>
                        </Link>
                        <Link href="/security"> 
                            <p>{t('security')}</p>
                        </Link>
                    </div>
                    <div className={styles["footer_link-container"]}>
                        <Link href="/for_companies">
                            <p className={styles["bold"]}>{t('companies')}</p>
                        </Link>
                        <Link href="/help"> 
                            <p className={styles["bold"]}>{t('help')}</p>
                        </Link>
                        <Link href="/contacts"> 
                            <p className={styles["bold"]}>{t('contacts')}</p>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}