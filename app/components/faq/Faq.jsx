// import FaqBlock from "./FaqBlock";
// import { faqData } from "./faqData";

// export default function Faq({styles}) {
    
//     return(
//         <div className={styles["faq-container"]}>
//             {faqData.map((block, key) => (
//                 <FaqBlock key={key} title={block.title} faqs={block.faqs} styles={styles}/>
//             ))}
//         </div>
//     )
// }

import FaqBlock from "./FaqBlock";

export default function Faq({ blockRefs, styles, faqData }) {
  return (
    <div className={styles["faq-container"]}>
      {faqData.map((block, index) => (
        <FaqBlock
          key={index}
          title={block.title}
          faqs={block.faqs}
          blockRef={(el) => (blockRefs.current[index] = el)}
          styles={styles}
        />
      ))}
    </div>
  );
}
