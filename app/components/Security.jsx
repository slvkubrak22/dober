import Image from "next/image";
import styles from '../assets/styles/main-page.module.scss';

import image from '../assets/img/security.png'

export default function Security() {
  return (
    <section className="container">
      <div className={styles["security"]}>
        <div className="security_text">
          <h2>безпека</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation veniam consequat sunt nostrud
            amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consstrud amet. Amet est sit aliqua dolor do
            amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
            non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequat duis enim velit mollit. Exercitation veniam
            consequat sunt nostrud amet.
          </p>
          <button className={styles["security_button"]}>Learn more</button>
        </div>
        <Image src={image} alt="security image" />
      </div>
    </section>
  );
}
