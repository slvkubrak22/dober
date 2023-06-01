import Image from "next/image";
import arrow from '../assets/img/arrow.png';

import styles from "../assets/styles/main-page.module.scss";

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
                    <div>circle</div>
                    <h3 className={styles["possibilities_h3"]}>Feature1</h3>
                    <p className={styles["possibilities_p"]}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque a voluptatem repellendus ex, beatae necessitatibus perspiciatis natus aliquam cum minima nemo nulla! Veritatis ducimus molestias, reprehenderit quo pariatur nihil incidunt.</p>
                    <div className={styles["possibilities_arrow"]}>
                        <Image src={arrow} alt="arrow" />
                    </div>
                </div>
                <div className={styles["possibilities_item"] + ' ' + styles["possibilities_bg-color1"]}>
                    <div>circle</div>
                    <h3 className={styles["possibilities_h3"]}>Feature2</h3>
                    <div className={styles["possibilities_arrow"]}>
                        <Image src={arrow} alt="arrow" />
                    </div>
                </div>
                <div className={styles["possibilities_item"] + ' ' + styles["possibilities_bg-color2"]}>
                    <div>circle</div>
                    <h3 className={styles["possibilities_h3"]}>Feature4</h3>
                    <div className={styles["possibilities_arrow"]}>
                        <Image src={arrow} alt="arrow" />
                    </div>
                </div>
                <div className={styles["possibilities_item"] + ' ' + styles["span-two"] + ' ' + styles["possibilities_bg-color2"]}>
                    <div>circle</div>
                    <h3 className={styles["possibilities_h3"]}>Feature6</h3>
                    <p className={styles + ' ' + styles["possibilities_bg-color2"] + ' ' + styles["possibilities_p"]}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque a voluptatem repellendus ex, beatae necessitatibus perspiciatis natus aliquam cum minima nemo nulla! Veritatis ducimus molestias, reprehenderit quo pariatur nihil incidunt.</p>
                    <div className={styles["possibilities_arrow"]}>
                        <Image src={arrow} alt="arrow" />
                    </div>
                </div>
                <div className={styles["possibilities_item"] + ' ' + styles["possibilities_bg-color1"]}>
                    <div>circle</div>
                    <h3 className={styles["possibilities_h3"]}>Feature3</h3>
                    <div className={styles["possibilities_arrow"]}>
                        <Image src={arrow} alt="arrow" />
                    </div>
                </div>
                <div className={styles["possibilities_item"] + ' ' + styles["possibilities_bg-color2"]}>
                    <div>circle</div>
                    <h3 className={styles["possibilities_h3"]}>Feature5</h3>
                    <div className={styles["possibilities_arrow"]}>
                        <Image src={arrow} alt="arrow" />
                    </div>
                </div>
            </div>
        </section>
    )
}