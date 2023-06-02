import Image from "next/image";
import mobile1 from "../assets/img/mobile_1.png";
import mobile2 from "../assets/img/mobile_2.png";
import styles from "../assets/styles/main-page.module.scss";

export default function FirstSection() {
  return (
    <section className={styles["bg_color"]}>
      <div style={{ height: 100 }}></div>
      <div className="container">
        <h1 className={styles["first-section_text-color"]}>
          Платформа захищеного спілкування
        </h1>
        <div className={styles["first-section"]}>
          <div className={styles["first-section_subitem"]}>
            <div className={styles["first-section_description"]}>
              <h2
                className={
                  styles["first-section_text-color"] +
                  " " +
                  styles["first-section_text-end"]
                }
              >
                Індивідуальне користування
              </h2>
              <p
                className={
                  styles["first-section_text-color"] +
                  " " +
                  styles["first-section_text-end"] +
                  " " +
                  styles["first-section_pos-end"]
                }
              >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
              <button
                className={
                  styles["first-section_pos-end"] + " " + styles["button"]
                }
              >
                Learn More
              </button>
            </div>
            <Image
              width={300}
              src={mobile1}
              alt="mobile screen example"
            />
          </div>
          <div className={styles["first-section_subitem"]}>
            <Image
              width={300}
              src={mobile2}
              alt="mobile screen example"
            />
            <div className={styles["first-section_description"]}>
              <h2 className={styles["first-section_text-color"]}>
                Індивідуальне користування
              </h2>
              <p className={styles["first-section_text-color"]}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
              <button
                className={
                  styles["first-section_pos-start"] + " " + styles["button"]
                }
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
