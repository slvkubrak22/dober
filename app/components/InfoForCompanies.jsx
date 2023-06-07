import Image from "next/image";

import styles from "../assets/styles/main-page.module.scss";

import img1 from "../assets/img/info-for-companies/img1.png";
import img2 from "../assets/img/info-for-companies/img2.png";
import img3 from "../assets/img/info-for-companies/img3.png";
import img4 from "../assets/img/info-for-companies/img4.png";
import img5 from "../assets/img/info-for-companies/img5.png";
import img6 from "../assets/img/info-for-companies/img6.png";

function InfoItem({
    img,
    title,
    text
}) {
    return (
        <div
        className={
            styles["possibilities_item"] +
            " " +
            styles["span-two"] +
            " " +
            styles["possibilities_bg-color3"] + 
            " " + 
            styles["info-for-companies_item"]
        }
        >
            <Image src={img} alt="info icon"/>
            <h3 className={styles["info-for-companies_h3"]}>{title}</h3>
            <p className={styles["info-for-companies_p"]}>
                {text}
            </p>
             <div className={styles["possibilities_arrow"]}>
                <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className={styles["arrow-vector"]} d="M1.70703 5.25C1.29282 5.25 0.957031 5.58579 0.957031 6C0.957031 6.41421 1.29282 6.75 1.70703 6.75V5.25ZM18.2269 6.53033C18.5198 6.23744 18.5198 5.76256 18.2269 5.46967L13.4539 0.696699C13.161 0.403806 12.6862 0.403806 12.3933 0.696699C12.1004 0.989593 12.1004 1.46447 12.3933 1.75736L16.6359 6L12.3933 10.2426C12.1004 10.5355 12.1004 11.0104 12.3933 11.3033C12.6862 11.5962 13.161 11.5962 13.4539 11.3033L18.2269 6.53033ZM1.70703 6.75H17.6966V5.25H1.70703V6.75Z" fill=""/>
                </svg>
            </div>
        </div>
    );
}

const infoItemData = [
    {
        img: img1,
        title: 'Зручність або Робіть все в одному місці.',
        text: 'Комфортне та швидке спілкування з колегами в безпечному середовищі, де немає нічого зайвого. Працюйте де завгодно і коли завгодно з будь-якого зручного для вас пристрою.',
    },
    {
        img: img2,
        title: 'Безпека',
        text: 'Комфортне та швидке спілкування з колегами в безпечному середовищі, де немає нічого зайвого. Працюйте де завгодно і коли завгодно з будь-якого зручного для вас пристрою.',
    },
    {
        img: img3,
        title: 'Мобільність',
        text: 'Комфортне та швидке спілкування з колегами в безпечному середовищі, де немає нічого зайвого. Працюйте де завгодно і коли завгодно з будь-якого зручного для вас пристрою.',
    },
    {
        img: img4,
        title: 'Ізольований корпоративний сервер',
        text: 'Комфортне та швидке спілкування з колегами в безпечному середовищі, де немає нічого зайвого. Працюйте де завгодно і коли завгодно з будь-якого зручного для вас пристрою.',
    },
    {
        img: img5,
        title: 'Приватність',
        text: 'Комфортне та швидке спілкування з колегами в безпечному середовищі, де немає нічого зайвого. Працюйте де завгодно і коли завгодно з будь-якого зручного для вас пристрою.',
    },
    {
        img: img6,
        title: 'Анонімність',
        text: 'Комфортне та швидке спілкування з колегами в безпечному середовищі, де немає нічого зайвого. Працюйте де завгодно і коли завгодно з будь-якого зручного для вас пристрою.',
    }
]

export default function InfoForCompanies() {
    return (
        <section className="container">
            <h2>інформація для компаній</h2>
            <p style={{maxWidth: '50%'}} className={styles["info-for-companies_p"]}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                sint. Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet.
            </p>
            <div className={styles["info-for-companies_list"]}>
                {infoItemData.map((item, key) => 
                    <InfoItem 
                        key={key}
                        img={item.img}
                        title={item.title}
                        text={item.text}
                    />
                )}
            </div>
        </section>
    );
}
