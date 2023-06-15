
// import FaqItem from "./FaqItem";

// export default function FaqBlock ({ title, faqs, styles }) {

//     return (
//         <div>
//             <h3 className={styles["block-title"]}>{title}</h3>
//             {faqs.map((faq, key) => (
//                 <FaqItem key={key} question={faq.question} answer={faq.answer} styles={styles}/>
//             ))}
//         </div>
//     );
// };
import FaqItem from "./FaqItem";

export default function FaqBlock({ title, faqs, blockRef, styles }) {
  return (
    <div ref={blockRef}>
      <h3 className={styles["block-title"]}>{title}</h3>
      {faqs.map((faq, index) => (
        <FaqItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          styles={styles}
        />
      ))}
    </div>
  );
}


