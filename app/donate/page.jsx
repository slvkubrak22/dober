"use client"

import { useTranslation } from "react-i18next";
import Image from "next/image";

import styles from "../assets/styles/donate-page.module.scss";

import logo from "../assets/img/donate/logo.png";
import btc from "../assets/img/donate/crypto.svg";
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
                                <div className={styles["item"]}>
                                    {/* <Image src={btc} alt="btc icon"/> */}
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_546_9952)">
                                        <path d="M14.2821 14.5093C13.875 16.1445 11.1229 15.2606 10.2305 15.0387L10.953 12.1406C11.8455 12.3631 14.7075 12.8045 14.2821 14.5093Z" fill=""/>
                                        <path d="M14.6867 10.2663C14.3157 11.7529 12.0246 10.9974 11.2812 10.8121L11.9366 8.18359C12.6806 8.36881 15.0737 8.71481 14.6867 10.2663Z" fill=""/>
                                        <path d="M14.8997 0.359114C8.47248 -1.24369 1.96098 2.66918 0.359397 9.09815C-1.24402 15.5259 2.66826 22.0373 9.09476 23.6408C15.5238 25.2442 22.0352 21.3314 23.6375 14.903C25.2408 8.47402 21.3285 1.96192 14.8997 0.359114ZM9.52878 8.09563C9.54528 7.81566 9.4487 7.46294 8.91504 7.32968C8.93582 7.31623 7.95899 7.09188 7.95899 7.09188L8.30987 5.68591L10.1254 6.13949L10.1242 6.14683C10.3968 6.21407 10.678 6.27887 10.9653 6.34428L11.5051 4.18213L12.8205 4.5104L12.2918 6.63036C12.6445 6.71105 13.0003 6.79235 13.3463 6.87854L13.8714 4.77264L15.1881 5.10091L14.649 7.26366C16.3111 7.83644 17.5269 8.6947 17.2879 10.2914C17.115 11.4602 16.467 12.0262 15.6068 12.2243C16.7879 12.8392 17.3888 13.7825 16.8161 15.4176C16.1057 17.4484 14.4173 17.6195 12.1721 17.1947L11.6273 19.3782L10.3106 19.05L10.8486 16.8964C10.5075 16.8114 10.1584 16.7216 9.79958 16.6238L9.25981 18.7877L7.94431 18.4595L8.48958 16.2717C8.1821 16.1928 7.86974 16.1097 7.55064 16.0296L5.83718 15.6023L6.49065 14.0955C6.49065 14.0955 7.46078 14.3535 7.44794 14.3345C7.82083 14.4262 7.98588 14.1834 8.05129 14.0214L9.52878 8.09563Z" fill=""/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_546_9952">
                                        <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                    <p>Crypto</p>
                                </div>
                                <div className={styles["grid"]}>
                                    <div className={styles["item"]}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 3H4.99999C3.6744 3.00159 2.40355 3.52888 1.46622 4.46622C0.528882 5.40355 0.00158785 6.67441 0 8.00001H24C23.9984 6.67441 23.4711 5.40355 22.5338 4.46622C21.5964 3.52888 20.3256 3.00159 19 3Z" fill="#04022A"/>
                                        <path d="M0 16C0.00158785 17.3256 0.528882 18.5964 1.46622 19.5337C2.40355 20.4711 3.6744 20.9985 4.99999 21H19C20.3256 20.9985 21.5964 20.4711 22.5338 19.5337C23.4711 18.5964 23.9984 17.3256 24 16V10H0V16ZM6.99999 15.5001C6.99999 15.7966 6.91203 16.0867 6.74719 16.3333C6.58237 16.5801 6.3481 16.7722 6.07402 16.8858C5.79993 16.9993 5.49834 17.029 5.20737 16.9711C4.91639 16.9134 4.64912 16.7704 4.43934 16.5607C4.22956 16.3509 4.0867 16.0836 4.02882 15.7926C3.97093 15.5017 4.00065 15.2001 4.11418 14.926C4.22771 14.6519 4.41997 14.4176 4.66665 14.2528C4.91331 14.088 5.20332 14 5.50001 14C5.89782 14 6.27936 14.158 6.56066 14.4393C6.84197 14.7206 6.99999 15.1021 6.99999 15.5001Z" fill="#04022A"/>
                                        </svg>
                                        <p>Card</p>
                                    </div>
                                    <div className={styles["item"]}>
                                        <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.1917 11.0284L10.7945 7.49952L2.6235 15.8036L1.5 14.6991L10.8063 5.24072L14.2367 8.80344L20.1378 3.15287L18.447 1.46289H22.8615V5.87573L21.2519 4.2669L14.1917 11.0284ZM5.40939 22.5383H10.7275V15.0536H5.40939V22.5383ZM12.7956 22.5383H18.1137V12.69H12.7956V22.5383ZM20.1819 7.76582V22.5383H25.5V7.76582H20.1819Z" fill="#04022A"/>
                                        </svg>
                                        <p>Stock</p>
                                    </div>
                                </div>
                                <div className={styles["item"]}>
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.4864 18.4791C22.7295 18.5393 22.9456 18.3056 22.875 18.0583L22.8334 17.9128L22.7991 17.7964L22.5061 16.7761V16.7689L22.5081 16.7595C22.5093 16.7544 22.5061 16.7491 22.503 16.7491C22.4999 16.7481 22.4967 16.746 22.4957 16.744L20.9643 11.416C20.9446 11.3429 20.9056 11.2764 20.8513 11.2235C20.7972 11.1706 20.7297 11.1333 20.6563 11.1153C20.5827 11.0974 20.5056 11.0995 20.4332 11.1215C20.3607 11.1436 20.2955 11.1846 20.2443 11.2404L18.8313 12.7896L18.7222 12.9101L18.0105 13.6893L15.7716 16.1455C15.5471 16.3907 15.6646 16.7938 15.9824 16.8728L16.211 16.9289C16.2241 16.9324 16.2364 16.9388 16.2467 16.9477C16.2569 16.9567 16.2651 16.9677 16.2704 16.9803C16.2758 16.9928 16.2783 17.0063 16.2777 17.0199C16.2772 17.0335 16.2735 17.0467 16.2671 17.0587C15.7656 18.0256 15.088 18.8903 14.2693 19.6084C12.7998 20.9034 10.9223 21.6415 8.96431 21.6937C8.35721 21.7301 7.74807 21.7128 7.14404 21.6417L7.09209 21.6354C6.71599 21.5845 6.66508 21.7123 7.01417 21.8661C7.5716 22.1097 8.13712 22.3341 8.70976 22.5394L8.75651 22.5549C12.7524 23.9845 17.6189 23.9181 20.6183 20.3835C20.6247 20.376 20.6343 20.3647 20.6469 20.3499C20.8595 20.1008 21.9032 18.8769 22.0032 18.4717C22.0043 18.4679 22.0051 18.4642 22.006 18.4605C22.0233 18.3883 22.0288 18.3657 22.104 18.3844L22.4864 18.4791ZM7.69294 12.0795C7.69284 12.0929 7.6928 12.1061 7.6928 12.1194C7.6928 13.1636 7.95982 14.1424 8.42839 14.9871C8.62059 15.333 8.845 15.6571 9.10059 15.9532C10.1219 17.144 11.6149 17.8952 13.2751 17.8952C13.6429 17.8952 13.8153 18.3471 13.5265 18.5829C11.5175 20.2465 8.97807 21.1336 6.3702 21.0827C6.27794 21.0802 6.18943 21.0457 6.11982 20.985C5.10755 20.1093 4.25628 19.0632 3.60449 17.8941C2.61844 16.1296 2.10355 14.1408 2.10943 12.1194C2.10943 12.1007 2.10947 12.082 2.10955 12.0633C2.09997 10.3311 2.47455 8.61458 3.21054 7.03881C4.25895 4.78176 6.02439 2.93483 8.23184 1.78571C9.79511 0.978137 11.5116 0.566809 13.2407 0.571326C13.3712 0.570986 13.5019 0.573002 13.6325 0.57739C15.5328 0.639728 17.3115 1.19247 18.8575 2.11716C18.8817 2.13225 18.9028 2.15219 18.919 2.17576C18.9256 2.18542 18.9315 2.19561 18.9364 2.2062C19.5014 2.5556 20.0357 2.95695 20.5321 3.40652C21.1232 3.94057 21.062 4.8746 20.4718 5.40969L18.3867 7.30271C17.7965 7.83778 16.904 7.75986 16.2505 7.31101C15.4528 6.75924 14.5198 6.43529 13.5518 6.37397C12.7528 6.32335 11.9549 6.45325 11.2164 6.75139C10.0672 7.22281 9.10564 8.07771 8.47891 9.16323C8.40724 9.29016 8.3404 9.4202 8.27859 9.55314C7.9629 10.2287 7.78119 10.9591 7.74352 11.7039C7.73702 11.8305 7.71999 11.9564 7.69294 12.0795Z" fill="#928E9C"/>
                                    </svg>
                                    <p>Donor Advised Found</p>
                                </div>
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