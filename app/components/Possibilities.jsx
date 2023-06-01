import styles from "../assets/styles/main-page.module.scss";

export default function Possibilities() {
    return (
        <section className="container second-section">
            <h2>
                Наші Можливості
            </h2>
            <p style={{maxWidth: 650}}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <div className={styles["grid"]}>
                <div className={styles["border"] + ' ' + styles["span-two"]}>
                    <div>circle</div>
                    <h3>Feature1</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque a voluptatem repellendus ex, beatae necessitatibus perspiciatis natus aliquam cum minima nemo nulla! Veritatis ducimus molestias, reprehenderit quo pariatur nihil incidunt.</p>
                </div>
                <div className={styles["border"]}>
                    <div>circle</div>
                    <h3>Feature2</h3>
                </div>
                <div className={styles["border"]}>
                    <div>circle</div>
                    <h3>Feature4</h3>
                </div>
                <div className={styles["border"] + ' ' + styles["span-two"]}>
                    <div>circle</div>
                    <h3>Feature6</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque a voluptatem repellendus ex, beatae necessitatibus perspiciatis natus aliquam cum minima nemo nulla! Veritatis ducimus molestias, reprehenderit quo pariatur nihil incidunt.</p>
                </div>
                <div className={styles["border"]}>
                    <div>circle</div>
                    <h3>Feature3</h3>
                </div>
                <div className={styles["border"]}>
                    <div>circle</div>
                    <h3>Feature5</h3>
                </div>
            </div>
        </section>
    )
}