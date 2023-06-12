import Image from "next/image";
import img1 from "../../assets/img/features-page/security.svg";
import img2 from "../../assets/img/features-page/anonymity.svg";
import img3 from "../../assets/img/features-page/privacy.svg";
import img4 from "../../assets/img/features-page/isolation.svg";

function GridItem({styles, img, title, text}) {
    return(
        <div className={styles["grid_item"]}>
            <Image src={img}/>
            <p>{title}</p>
            <p>{text}</p>
        </div>
    )
}


export default function Postulates({t, styles}) {

    const gridItemData = [
        {
            img: img1,
            title: 'Безпека',
            text: 'Застосунок захищено від несанкціованого доступу, впроваджено наскрізне шифрування, гарантовано безпечне зберігання даних',
        },
        {
            img: img2,
            title: 'Анонімність',
            text: 'Відсутність прив’язок до номеру телефону чи електронної пошти, персональної інформації про користувача не збирається'
        },
        {
            img: img3,
            title: 'Конфіденційність',
            text: 'Інформація, яка циркулює та зберігається у системі доступна лише відправнику та отримувачу. Цифровий підпис запобігає підміні особистості'
        },
        {
            img: img4,
            title: 'Відокремленість',
            text: 'Використовується власний корпоративний сервер з довільним розміщенням та обмеженим доступом'
        }
    ]

    return(
        <section className="container">
            <div className={styles["postulates"]}>
                <h2>Основні Постулати</h2>
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
                <div className={styles["grid"]}>
                    {gridItemData.map((item, key) => 
                        <GridItem 
                            styles={styles} 
                            key={key} 
                            img={item.img} 
                            title={item.title} 
                            text={item.text}
                        />
                    )}
                </div>
            </div>
        </section>
    )
}