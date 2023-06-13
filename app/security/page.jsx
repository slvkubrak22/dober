
import Image from "next/image";
import img_1 from "../assets/img/security/img_1.svg";
import img_2 from "../assets/img/security/img_2.svg";
import img_3 from "../assets/img/security/img_3.svg";
import img_4 from "../assets/img/security/img_4.svg";
import img_5 from "../assets/img/security/img_5.svg";
import img_6 from "../assets/img/security/img_6.svg";
import img_7 from "../assets/img/security/img_7.svg";
import img_8 from "../assets/img/security/img_8.svg";
import control_1 from "../assets/img/security/control_1.png";
import control_2 from "../assets/img/security/control_2.png";

import styles from "../assets/styles/security-page.module.scss";
import Subscribe from "../components/Subscribe";

export default function Security() {
    return (
        <>
            <section className="container">
                <h2 className={styles["security_title"]}>Функції, що Гарантують безпеку</h2>
                <div className={styles["grid"] + ' ' + styles["grid-top"]}>
                    <div className={styles["grid_item"]}>
                        <Image alt="security image" src={img_1}/>
                        <p>
                            Асиметричні ключі використовуються тільки для шифрування симетричних ключів повідомлень та ключів процесу аутентифікації, що унеможливлює накопичення статистики для злому.
                        </p>
                    </div>
                    <div className={styles["grid_item"]}>
                        <Image alt="security image" src={img_2}/>
                        <p>
                            Кожне повідомлення засвідчене інформацією аутентифікації – електронним цифровим підписом (ЕЦП) автора до тексту повідомлення, що унеможливлює підробку.
                        </p>
                    </div>
                </div>
                <div className={styles["grid"] + ' ' + styles["grid-bottom"]}>
                    <div className={styles["grid_item"]}>
                        <Image alt="security image" src={img_3}/>
                        <p>
                            Система Zero-knowledge Service.
                        </p>
                    </div>
                    <div className={styles["grid_item"] + ' ' + styles["span-two"]}>
                        <Image alt="security image" src={img_4}/>
                        <p>
                            Кожне нове повідомлення зашифроване з використанням нового симетричного 512-бітного ключа, який отримується із джерела криптографічно стійкої послідовності випадкових чисел.
                        </p>
                    </div>
                    <div className={styles["grid_item"]}>
                        <Image alt="security image" src={img_5}/>
                        <p>
                            Всі симетричні ключі мають розмір 512 біт.
                        </p>
                    </div>
                    <div className={styles["grid_item"]}>
                        <Image alt="security image" src={img_6}/>
                        <p>
                            Криптографічні алгоритми :1. secp521r1                     2. threefish5123. ChaCha20-Poly1305 - SHA3-512
                        </p>
                    </div>
                    <div className={styles["grid_item"]}>
                        <Image alt="security image" src={img_7}/>
                        <p>
                            Техніка забезпечення максимального уповільнення атаки перебору паролів для захисту від злому пароля основної пари ключів (PBDKF).
                        </p>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className={styles["flex-container"]}>
                    <div className={styles["text"]}>
                        <h3>Open Source information </h3>
                        <p>
                            To ensure full transparency, the Dober <span>apps’ source</span>  code is publicly accessible and open for review. Thanks to reproducible builds, anyone can verify that the published code (of the Android app, for the time being) corresponds to the apps in the stores. On top of that, external experts are regularly commissioned to conduct systematic security audits, and the resulting <span>reports are published in their entirety</span>. 
                        </p>
                        <p>
                            To ensure full transparency, the Dober <span>apps’ source</span>  code is publicly accessible and open for review. Thanks to reproducible builds, anyone can verify that the published code (of the Android app, for the time being) corresponds to the apps in the stores. On top of that, external experts are regularly commissioned to conduct systematic security audits, and the resulting <span>reports are published in their entirety</span>. 
                        </p>
                    </div>
                    <div className={styles["image-container"]}>
                        <Image alt="security image" src={img_8}></Image>
                    </div>
                </div>
            </section>
            <section className="container">
                <h2 className={styles["security_title"]}>
                    Сертифікат відповідності  та аттестації Dober
                </h2>
                <div className={styles["control-container"]}>
                    <div className={styles["image-container"]}>
                        <Image src={control_1}/>
                    </div>
                    <div className={styles["image-container"]}>
                        <Image src={control_2}/>
                    </div>
                </div>
            </section>
            <Subscribe />
        </>
    )
}