import Image from "next/image";

import img1 from "../../assets/img/features-page/security.svg";
import img2 from "../../assets/img/features-page/anonymity.svg";
import img3 from "../../assets/img/features-page/privacy.svg";
import img4 from "../../assets/img/features-page/isolation.svg";
import img5 from "../../assets/img/features-page/image.svg"

function GridItem({styles, img, title, text}) {
    return(
        <div className={styles["grid_item"]}>
            <Image width={80} height={80} src={img}/>
            <p style={{fontWeight: 600, fontSize: 20}}>{title}</p>
            <p>{text}</p>
        </div>
    )
}

export default function Postulates({t, styles}) {

    const gridItemData = [
        {
            img: img1,
            title: t("features_page_postulates_title_item_1"),
            text: t("features_page_postulates_text_item_1"),
        },
        {
            img: img2,
            title: t("features_page_postulates_title_item_2"),
            text: t("features_page_postulates_text_item_2")
        },
        {
            img: img3,
            title: t("features_page_postulates_title_item_3"),
            text: t("features_page_postulates_text_item_3")
        },
        {
            img: img4,
            title: t("features_page_postulates_title_item_4"),
            text: t("features_page_postulates_text_item_4")
        }
    ]

    return(
        <section className="container">
            <div className={styles["postulates"]}>
                <h2>{t("features_page_postulates_title")}</h2>
                <p>
                    {t("features_page_postulates_text")}
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
            <div className={styles["principles"]}>
                <div className={styles["principles_text"]}>
                    <h2>{t("features_page_principles_title")}</h2>
                    <p>
                        {t("features_page_principles_text_1")} 
                    </p>
                    <p>
                        {t("features_page_principles_text_2")} 
                    </p>
                </div>
                <div className={styles["principles_images"]}>
                    {/* <div className="">
                        <Image className={styles["image1"]} src={principles_img1}/>
                    </div>
                    <div className="">
                        <Image className={styles["image2"]} src={principles_img2}/>
                    </div>                     */}
                    <Image style={{width: "100%", height: "105%"}} src={img5}/>
                </div>
            </div>
        </section>
    )
}