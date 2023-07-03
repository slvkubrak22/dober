import Link from "next/link"

export default function TopSection ({t, styles}) {
    return(
        <section className={styles["bg-image"]}>
            <div style={{height: 200}}></div>
            <div className="container">
                <div className={styles["top"]}>
                    <h2 className={styles["top_title"]}>{t("features_page_top_section_title")}</h2>
                    <div className={styles["top_text"]}>
                        <p style={{marginBottom: 0}}>
                            {t("features_page_top_section_text_1")}
                        </p>
                        <p style={{marginTop: 0}}>
                            {t("features_page_top_section_text_2")}
                        </p>
                    </div>
                    <Link href="/security"><button>{t("button_learn_more")}</button></Link>
                </div>
            </div>
        </section>
    )
}