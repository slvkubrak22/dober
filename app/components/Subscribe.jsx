import Image from "next/image";

import twitterLogo from "../assets/img/twitter-logo-color.svg";
import linkedinLogo from "../assets/img/linkedin-logo.svg";

import styles from "../assets/styles/main-page.module.scss";


export default function Subscribe() {
    
    return(
        <section className="container">
            <div className={styles["subscribe"]}>
                <h2 className={styles["subscribe_text-center"]}>
                    Subscribe for news
                </h2>
                <div className={styles["subscribe_item-container"]}>
                    <div className={styles["subscribe_item-container_item"]}>
                        <div className={styles["subscribe_item-container_item_logo-container"]}>
                            <Image src={twitterLogo} alt="Twitter logo link"/>
                        </div>
                        <h3>Twitter</h3>
                    </div>
                    <div className={styles["subscribe_item-container_item"]}>
                        <div className={styles["subscribe_item-container_item_logo-container"]}>
                            <Image src={linkedinLogo} alt="Linkedin logo link"/>
                        </div>
                        <h3>Linkedin</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}