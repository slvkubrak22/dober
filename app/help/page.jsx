"use client"
import { useRef } from "react";
import Image from "next/image";

import { faqData } from "../components/faq/faqData";
import Faq from "../components/faq/Faq";

import styles from "../assets/styles/help-page.module.scss";

import find from "../assets/img/find.svg"

export default function Help() {

    const blockRefs = useRef([]);

    const scrollToBlock = (blockIndex) => {
        const element = blockRefs.current[blockIndex];
        element.scrollIntoView({ behavior: "smooth" });
    };

    const buttonsTop = faqData.slice(0, 5);
    const buttonsBottom = faqData.slice(5)
    
    return (
        <section className="container">
            <h2 className={styles["text-center"]}>How may we help you?</h2>
            <div className={styles["buttons-container"]}>
                <div className={styles["input-container"]}>
                    <input type="text" placeholder="Search FQAs"/>
                    <Image src={find}/>
                </div>
                <div className={styles["buttons"]}>
                    {buttonsTop.map((block, index) => (
                        <button
                            key={index}
                            className={styles["faq-button"]}
                            onClick={() => scrollToBlock(index)}
                        >
                            {block.title}
                        </button>
                    ))}
                </div>
                <div className={styles["buttons"]}>
                    {buttonsBottom.map((block, index) => (
                        <button
                            key={index}
                            className={styles["faq-button"]}
                            onClick={() => scrollToBlock((index + 5))}
                        >
                            {block.title}
                        </button>   
                    ))}
                </div>
            </div>
            <Faq blockRefs={blockRefs} faqData={faqData} styles={styles}/>
        </section>
    );
}

