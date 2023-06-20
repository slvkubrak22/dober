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
                question: "Why Dober is unique?",
                answer: "You don’t need to provide any personal information (such as your phone number or email address) in order to use Dober. In Dober, all your communication is end-to-end encrypted –text messages, voice, video, files and group chats. Dober supports TOR network connection out of the box, so that no one new your network location",
                },
                {
                question: "What is Nickname in Dober?",
                answer: `A unique Account code name , by which other Users can find your Account in the Messenger global search. The Nickname must consist of characters, signs and latin letters from 1 to 128, you cannot create a Nickname that consists only of characters/signs/digits. The use of "underscores" is allowed. The Nickname can't coincide with the login and can't include special characters and spaces. If you create a Nickname that is already used by another User, you won't be able to choose and create an identical one. If you need to change your Nickname, you can change it in “Account Settings”`,
                },
                {
                question: "Question 2",
                answer: "Answer 2",
                },
                {
                question: "Question 2",
                answer: "Answer 2",
                },
            ],
        },
        {
            title: "Features",
            faqs: [
                {
                question: "Question 3",
                answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
                },
                {
                question: "Question 4",
                answer: "Answer 4",
                },
            ],
        },
        {
            title: "Security AND Privacy",
            faqs: [
                {
                question: "Question 3",
                answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
                },
                {
                question: "Question 4",
                answer: "Answer 4",
                },
            ],
        },
        {
            title: "Purchase",
            faqs: [
                {
                question: "Question 3",
                answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
                },
                {
                question: "Question 4",
                answer: "Answer 4",
                },
            ],
        },
        {
            title: "Sending/Receiving",
            faqs: [
                {
                question: "Question 3",
                answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
                },
                {
                question: "Question 4",
                answer: "Answer 4",
                },
            ],
        },
        {
            title: "Groups Chat",
            faqs: [
                {
                question: "Question 3",
                answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
                },
                {
                question: "Question 4",
                answer: "Answer 4",
                },
            ],
        },
        {
            title: "Contacts",
            faqs: [
                {
                question: "Question 3",
                answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
                },
                {
                question: "Question 4",
                answer: "Answer 4",
                },
            ],
        },
        {
            title: "Dober Safe",
            faqs: [
                {
                question: "Question 3",
                answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
                },
                {
                question: "Question 4",
                answer: "Answer 4",
                },
            ],
        },
        {
            title: "ID Export and Data Backup",
            faqs: [
                {
                question: "Question 3",
                answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
                },
                {
                question: "Question 4",
                answer: "Answer 4",
                },
            ],
        },
        {
            title: "Dober Calls",
            faqs: [
                {
                question: "Question 3",
                answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
                },
                {
                question: "Question 4",
                answer: "Answer 4",
                },
            ],
        },
        {
            title: "Profile Pictures",
            faqs: [
                {
                question: "Question 3",
                answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
                },
                {
                question: "Question 4",
                answer: "Answer 4",
                },
            ],
        },
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

