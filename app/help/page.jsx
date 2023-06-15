"use client"

// import styles from "../assets/styles/help-page.module.scss";
// import Faq from "../components/faq/Faq";

// export default function Help() {
    
//     return (
//         <section className="container">
//             <h2 className={styles["text-center"]}>How may we help you?</h2>
            
//             <Faq styles={styles}/>
//         </section>
//     );
// }
import styles from "../assets/styles/help-page.module.scss";
import Faq from "../components/faq/Faq";
import { faqData } from "../components/faq/faqData"; // Импортируем массив faqData
import { useRef } from "react";


export default function Help() {
  const blockRefs = useRef([]);

  const scrollToBlock = (blockIndex) => {
    const element = blockRefs.current[blockIndex];
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="container">
      <h2 className={styles["text-center"]}>How may we help you?</h2>

      {/* Добавляем кнопки */}
      <div className={styles["button-container"]}>
        {faqData.map((block, index) => (
          <button
            key={index}
            className={styles["faq-button"]}
            onClick={() => scrollToBlock(index)}
          >
            {block.title}
          </button>
        ))}
      </div>

      <Faq blockRefs={blockRefs} styles={styles} faqData={faqData}/>
    </section>
  );
}

