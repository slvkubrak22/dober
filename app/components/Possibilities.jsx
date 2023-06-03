import Image from "next/image";

import styles from "../assets/styles/main-page.module.scss";

import arrow from '../assets/img/arrow.png';
import img1 from "../assets/img/possibilities/img-safety.png";
import img2 from "../assets/img/possibilities/img-privacy.png";
import img3 from "../assets/img/possibilities/img-encryption.png";
import img4 from "../assets/img/possibilities/img-functionality.png";
import img5 from "../assets/img/possibilities/img-mobility.png";
import img6 from "../assets/img/possibilities/img-anonymity.png";

export default function Possibilities() {
    return (
        <section className="container possibilities">
            <h2>
                Наші Можливості
            </h2>
            <p style={{maxWidth: 650}}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <div className={styles["possibilities_container"]}>
                <div className={styles["possibilities_item"] + ' ' + styles["span-two"] + ' ' + styles["possibilities_bg-color1"]}>
                    <Image src={img1}/>
                    <h3 className={styles["possibilities_h3"]}>Безпека</h3>
                    <p className={styles["possibilities_p"]}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque a voluptatem repellendus ex, beatae necessitatibus perspiciatis natus aliquam cum minima nemo nulla! Veritatis ducimus molestias, reprehenderit quo pariatur nihil incidunt.</p>
                    <div className={styles["possibilities_arrow"]}>
                        <Image src={arrow} alt="arrow" />
                    </div>
                </div>
                <div className={styles["possibilities_item"] + ' ' + styles["possibilities_bg-color1"]}>
                    <Image src={img2}/>
                    <h3 className={styles["possibilities_h3"]}>Конфіденційність</h3>
                    <div className={styles["possibilities_arrow"]}>
                        <Image src={arrow} alt="arrow" />
                    </div>
                </div>
                <div className={styles["possibilities_item"] + ' ' + styles["possibilities_bg-color2"]}>
                    <Image src={img4}/>
                    <h3 className={styles["possibilities_h3"]}>Функціональність</h3>
                    <div className={styles["possibilities_arrow"]}>
                        <Image src={arrow} alt="arrow" />
                    </div>
                </div>
                <div className={styles["possibilities_item"] + ' ' + styles["span-two"] + ' ' + styles["possibilities_bg-color2"]}>
                    <Image src={img6}/>
                    <h3 className={styles["possibilities_h3"]}>Анонімність</h3>
                    <p className={styles  + ' ' + styles["possibilities_p"]}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque a voluptatem repellendus ex, beatae necessitatibus perspiciatis natus aliquam cum minima nemo nulla! Veritatis ducimus molestias, reprehenderit quo pariatur nihil incidunt.</p>
                    <div className={styles["possibilities_arrow"]}>
                        <Image src={arrow} alt="arrow" />
                    </div>
                </div>
                <div className={styles["possibilities_item"] + ' ' + styles["possibilities_bg-color1"]}>
                    <Image src={img3}/>
                    <h3 className={styles["possibilities_h3"]}>Шифрування</h3>
                    <div className={styles["possibilities_arrow"]}>
                        <Image src={arrow} alt="arrow" />
                    </div>
                </div>
                <div className={styles["possibilities_item"] + ' ' + styles["possibilities_bg-color2"]}>
                    <Image src={img5}/>
                    <h3 className={styles["possibilities_h3"]}>Мобільність</h3>
                    <div className={styles["possibilities_arrow"]}>
                        <Image src={arrow} alt="arrow" />
                    </div>
                </div>
            </div>
        </section>
    )
}