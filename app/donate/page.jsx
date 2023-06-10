"use client"

import { useTranslation } from "react-i18next";
import Image from "next/image";

import styles from "../assets/styles/donate-page.module.scss";

import logo from "../assets/img/donate/logo.png";

export default function Donate() {
    return (
        <>
            <div style={{height: 100}}></div>
            <section className="container">
                <h2 className={styles["text-center"]}>Донать для добер</h2>
                <div className={styles["donate_top"]}>
                    <p className={styles["small-text"] + ' ' + styles["text-center"]}>Or donate with cryptocurrency</p>
                    <div className={styles["donate_container"]}>
                        <div className={styles["donate_action"]}>
                            <div className={styles["donate_action_top"]}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className={styles["toggle-container"]}>
                                <div className={styles["left"]}>
                                    <span>One-time</span>
                                </div>
                                <div className={styles["right"]}>
                                    <span>Monthly</span>
                                </div>
                            </div>
                            <div style={{padding: "0 20px"}}>
                                <select name="currency" id="">
                                    <option value="US Dollars (USD)">US Dollars (USD)</option>
                                    <option value="UAH">UAH</option>
                                    <option value="EUR">EUR</option>
                                </select>
                            </div>
                            <div className={styles["grid-container"]}>
                                <div><sup>$</sup>5</div>
                                <div><sup>$</sup>10</div>
                                <div><sup>$</sup>20</div>
                                <div><sup>$</sup>30</div>
                                <div><sup>$</sup>50</div>
                                <div><sup>$</sup>100</div>
                            </div>
                            <div style={{padding: "10px 20px"}}>
                                <div className={styles["item"]}>Custom amount</div>
                            </div>
                            <div style={{padding: 20}}>
                                <input type="checkbox" id="comment"/>
                                <label htmlFor="comment">Оставить комментарий</label>
                            </div>
                            <div style={{padding: 20}}>
                                <button className={styles["button"]}>Next</button>
                            </div>
                            
                        </div>
                        <div className={styles["donate_text"]}>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consstrud amet. Amet est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </div>
                    </div>
                </div>
                <div className={styles["donate_top"] + styles["donate_bottom"]}>
                    <p className={styles["small-text"] + ' ' + styles["text-center"]}>Or donate with cryptocurrency</p>
                    <div className={styles["donate_container"]}>
                        <div className={styles["donate_action"]}>
                            <div className={styles["donate_action_top"] + ' ' + styles["donate_action_bottom"]}>
                                <div>
                                    <Image src={logo}/>
                                </div>
                                <p>
                                    Dober Technology Foundation
                                </p>
                            </div>
                            <p className={styles["text-center"]}>Сhoose Method</p>
                            <div className={styles["donate_action_grid_bottom"]}>
                                <div className={styles["item"]}>Crypto</div>
                                <div className={styles["grid"]}>
                                    <div className={styles["item"]}>Card</div>
                                    <div className={styles["item"]}>Stock</div>
                                </div>
                                <div className={styles["item"]}>Donor Advised Found</div>
                            </div>
                            
                        </div>
                        <div className={styles["donate_text"]}>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consstrud amet. Amet est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}