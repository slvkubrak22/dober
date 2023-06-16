import { useTranslation } from "react-i18next";
import Link from "next/link";

import Image from "next/image";

import logo from "../assets/img/logo2.svg"
import styles from "../assets/styles/footer.module.scss"

export default function Footer() {

    const { t } = useTranslation();

    return(
        <footer>
            <div className={styles["top-footer"]}>
                <div className="container">
                    <div className={styles["top-footer_container"]}>
                        <Link href="/">
                            <Image src={logo} alt="Logo image"></Image>
                        </Link>
                        <div className={styles["top-footer_link-container"]}>
                            <p className={styles["bold"]}>{t('product')}</p>
                            <Link href="/features">
                                <p>{t('features')}</p>
                            </Link>
                            <Link href="/security"> 
                                <p>{t('security')}</p>
                            </Link>
                        </div>
                        <div className={styles["top-footer_link-container"]}>
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
            </div>
            <div className={styles["bottom-footer"]}>
                <div className="container">
                    <div className={styles["flex"] + ' ' + styles["bottom-footer_container"]}>
                        <div className={styles["left"]}>
                            <p>© 2023, Dober</p>
                        </div>
                        <div className={styles["flex"] + ' ' + styles["right"]}>
                            <Link href="/terms">
                                <p>Terms & Conditions</p>
                            </Link>
                            <Link href="/privacy-polity">
                                <p>Privacy Policy</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}