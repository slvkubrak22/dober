"use client"

import { useTranslation } from "react-i18next";
import TopSection from "../components/features/TopSection";

import styles from "../assets/styles/features-page.module.scss";
import Postulates from "../components/features/Postulates";
import UseDober from "../components/UseDober";
import Subscribe from "../components/Subscribe";

export default function Features() {

    const { t } = useTranslation();

    return (
        <>
            <TopSection t={t} styles={styles}/>
            <Postulates t={t} styles={styles}/>
            <UseDober />
            <section className="container">
                <div className={styles["grid-bottom"]}>
                    <div>
                        <h2>Підходить для таких компаній</h2>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                    <div className={styles["grid-bottom_item"]}>
                        {/* <Image src={img} alt="info icon"/> */}
                        <h3>Title</h3>
                        <p>Text</p>
                    </div>
                    <div className={styles["grid-bottom_item"]}>
                        {/* <Image src={img} alt="info icon"/> */}
                        <h3>Title</h3>
                        <p>Text</p>
                    </div>
                </div>
                <div className={styles["grid-bottom"] + ' ' + styles["grid-bottom-2"]}>
                <div className={styles["grid-bottom_item"]}>
                        {/* <Image src={img} alt="info icon"/> */}
                        <h3>Title</h3>
                        <p>Text</p>
                    </div>
                    <div className={styles["grid-bottom_item"]}>
                        {/* <Image src={img} alt="info icon"/> */}
                        <h3>Title</h3>
                        <p>Text</p>
                    </div>
                    <div className={styles["grid-bottom_item"]}>
                        {/* <Image src={img} alt="info icon"/> */}
                        <h3>Title</h3>
                        <p>Text</p>
                    </div>
                    <div className={styles["grid-bottom_item"]}>
                        {/* <Image src={img} alt="info icon"/> */}
                        <h3>Title</h3>
                        <p>Text</p>
                    </div>
                </div>
            </section>
            <Subscribe />
        </>
    )    
}