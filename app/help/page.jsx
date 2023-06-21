"use client"
import { useRef } from "react";
import Image from "next/image";

import { useTranslation } from "react-i18next";
// import { faqData } from "../components/faq/faqData";
import Faq from "../components/faq/Faq";

import styles from "../assets/styles/help-page.module.scss";

import find from "../assets/img/find.svg";

export default function Help() {

    const { t } = useTranslation();

    const faqData = [
        {
            title: "",
            faqs: [
                {
                    question: t("help_page_question_1"),
                    answer: t("help_page_answer_1"),
                },
                {
                    question: t("help_page_question_2"),
                    answer: t("help_page_answer_2"),
                },
                {
                    question: t("help_page_question_3"),
                    answer: t("help_page_answer_3"),
                },
                {
                    question: t("help_page_question_4"),
                    answer: t("help_page_answer_4"),
                },
                {
                    question: t("help_page_question_5"),
                    answer: t("help_page_answer_5"),
                },
                {
                    question: t("help_page_question_6"),
                    answer: t("help_page_answer_6"),
                },
                {
                    question: t("help_page_question_7"),
                    answer: t("help_page_answer_7"),
                },
                {
                    question: t("help_page_question_8"),
                    answer: t("help_page_answer_8"),
                },
                {
                    question: t("help_page_question_9"),
                    answer: t("help_page_answer_9"),
                },
                {
                    question: t("help_page_question_10"),
                    answer: <ul className={styles["answer_list"]}>
                        <li>{t("help_page_answer_10_1")}</li>
                        <li>{t("help_page_answer_10_2")}</li>
                        <li>{t("help_page_answer_10_3")}</li>
                        <li>{t("help_page_answer_10_4")}</li>
                        <li>{t("help_page_answer_10_5")}</li>
                        <li>{t("help_page_answer_10_6")}</li>
                        <li>{t("help_page_answer_10_7")}</li>
                        <li>{t("help_page_answer_10_8")}</li>
                    </ul>
                },
                {
                    question: t("help_page_question_11"),
                    answer: t("help_page_answer_11"),
                },
                {
                    question: t("help_page_question_12"),
                    answer: t("help_page_answer_12"),
                },
                {
                    question: t("help_page_question_13"),
                    answer: t("help_page_answer_13"),
                },
                {
                    question: t("help_page_question_14"),
                    answer: <ul className={styles["answer_list"]}>
                        {t("help_page_answer_14_1")}
                        <li>{t("help_page_answer_14_2")}</li>
                        <li>{t("help_page_answer_14_3")}</li>
                        <li>{t("help_page_answer_14_4")}</li>
                        <li>{t("help_page_answer_14_5")}</li>
                        <li>{t("help_page_answer_14_6")}</li>
                    </ul>
                },
                {
                    question: t("help_page_question_15"),
                    answer: t("help_page_answer_15"),
                },
                {
                    question: t("help_page_question_16"),
                    answer: <ul className={styles["answer_list"]}>
                        {t("help_page_answer_16_1")}
                        <li>{t("help_page_answer_16_2")}</li>
                        <li>{t("help_page_answer_16_3")}</li>
                        <li>{t("help_page_answer_16_4")}</li>
                        <li>{t("help_page_answer_16_5")}</li>
                    </ul>
                },
                {
                    question: t("help_page_question_17"),
                    answer: t("help_page_answer_17"),
                },
                {
                    question: t("help_page_question_18"),
                    answer: t("help_page_answer_18"),
                },
                {
                    question: t("help_page_question_19"),
                    answer: t("help_page_answer_19"),
                },
                {
                    question: t("help_page_question_20"),
                    answer: t("help_page_answer_20"),
                },
            ],
        },
        // {
        //     title: "Features",
        //     faqs: [
        //         {
        //         question: "Question 3",
        //         answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        //         },
        //         {
        //         question: "Question 4",
        //         answer: "Answer 4",
        //         },
        //     ],
        // },
        // {
        //     title: "Security AND Privacy",
        //     faqs: [
        //         {
        //         question: "Question 3",
        //         answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        //         },
        //         {
        //         question: "Question 4",
        //         answer: "Answer 4",
        //         },
        //     ],
        // },
        // {
        //     title: "Purchase",
        //     faqs: [
        //         {
        //         question: "Question 3",
        //         answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        //         },
        //         {
        //         question: "Question 4",
        //         answer: "Answer 4",
        //         },
        //     ],
        // },
        // {
        //     title: "Sending/Receiving",
        //     faqs: [
        //         {
        //         question: "Question 3",
        //         answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        //         },
        //         {
        //         question: "Question 4",
        //         answer: "Answer 4",
        //         },
        //     ],
        // },
        // {
        //     title: "Groups Chat",
        //     faqs: [
        //         {
        //         question: "Question 3",
        //         answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        //         },
        //         {
        //         question: "Question 4",
        //         answer: "Answer 4",
        //         },
        //     ],
        // },
        // {
        //     title: "Contacts",
        //     faqs: [
        //         {
        //         question: "Question 3",
        //         answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        //         },
        //         {
        //         question: "Question 4",
        //         answer: "Answer 4",
        //         },
        //     ],
        // },
        // {
        //     title: "Dober Safe",
        //     faqs: [
        //         {
        //         question: "Question 3",
        //         answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        //         },
        //         {
        //         question: "Question 4",
        //         answer: "Answer 4",
        //         },
        //     ],
        // },
        // {
        //     title: "ID Export and Data Backup",
        //     faqs: [
        //         {
        //         question: "Question 3",
        //         answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        //         },
        //         {
        //         question: "Question 4",
        //         answer: "Answer 4",
        //         },
        //     ],
        // },
        // {
        //     title: "Dober Calls",
        //     faqs: [
        //         {
        //         question: "Question 3",
        //         answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        //         },
        //         {
        //         question: "Question 4",
        //         answer: "Answer 4",
        //         },
        //     ],
        // },
        // {
        //     title: "Profile Pictures",
        //     faqs: [
        //         {
        //         question: "Question 3",
        //         answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        //         },
        //         {
        //         question: "Question 4",
        //         answer: "Answer 4",
        //         },
        //     ],
        // },
    ];

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
            {/* <div className={styles["buttons-container"]}>
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
            </div> */}
            <Faq blockRefs={blockRefs} faqData={faqData} styles={styles} t={t}/>
        </section>
    );
}

