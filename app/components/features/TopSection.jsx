import Link from "next/link"

export default function TopSection ({t, styles}) {
    return(
        <section className={styles["bg-image"]}>
            <div style={{height: 200}}></div>
            <div className="container">
                <div className={styles["top"]}>
                    {/* <h2 className={styles["top_title"]}>{t("main_page_title")}</h2> */}
                    <h2 className={styles["top_title"]}>Чому Dober?</h2>
                    <p className={styles["top_text"]}>
                        Виділений сервер забезпечує впевненість у зберіганні та доступу до корпоративної інформації. Конфіденційність листування та розмов – право кожної вільної людини у світі.Використовуйте Dober і конфіденційність підвищиться.
                    </p>
                    <Link href="/security"><button>{t("button_learn_more")}</button></Link>
                </div>
            </div>
        </section>
    )
}