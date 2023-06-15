"use client"

import Image from "next/image";
import { useTranslation } from "react-i18next";
import TopSection from "../components/features/TopSection";

import styles from "../assets/styles/features-page.module.scss";
import Postulates from "../components/features/Postulates";
import UseDober from "../components/UseDober";
import Subscribe from "../components/Subscribe";

import grid_bottom_item_img_1 from "../assets/img/features-page/grid_bottom_item_img_1.svg";
import grid_bottom_item_img_2 from "../assets/img/features-page/grid_bottom_item_img_2.svg";
import grid_bottom_item_img_3 from "../assets/img/features-page/grid_bottom_item_img_3.svg";
import grid_bottom_item_img_4 from "../assets/img/features-page/grid_bottom_item_img_4.svg";
import grid_bottom_item_img_5 from "../assets/img/features-page/grid_bottom_item_img_5.svg";
import grid_bottom_item_img_6 from "../assets/img/features-page/grid_bottom_item_img_6.svg";

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
                        <Image src={grid_bottom_item_img_1} alt="info icon"/>
                        <h3>Фінансові установи</h3>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                    <div className={styles["grid-bottom_item"]}>
                        <Image src={grid_bottom_item_img_2} alt="info icon"/>
                        <h3>Юридичні установи</h3>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                    </div>
                </div>
                <div className={styles["grid-bottom"] + ' ' + styles["grid-bottom-2"]}>
                    <div className={styles["grid-bottom_item"]}>
                        <Image src={grid_bottom_item_img_3} alt="info icon"/>
                        <h3>Секретні огранізації</h3>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                    </div>
                    <div className={styles["grid-bottom_item"]}>
                        <Image src={grid_bottom_item_img_4} alt="info icon"/>
                        <h3>Дистриб’ютори</h3>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                    </div>
                    <div className={styles["grid-bottom_item"]}>
                        <Image src={grid_bottom_item_img_5} alt="info icon"/>
                        <h3>Виробництва</h3>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                    </div>
                    <div className={styles["grid-bottom_item"]}>
                        <Image src={grid_bottom_item_img_6} alt="info icon"/>
                        <h3>Громадські огранізації</h3>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                    </div>
                </div>
            </section>
            <Subscribe />
        </>
    )    
}