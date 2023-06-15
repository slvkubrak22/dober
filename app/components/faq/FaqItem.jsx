"use client"

// import { useState } from "react";

// export default function FaqItem ({ question, answer, styles }) {

//     const [open, setOpen] = useState(false);
//     const activeButton = () => {
//       setOpen(!open);
//     };
  
//     return (
//             <div
//               onClick={activeButton}
//               style={{ cursor: "pointer" }}
//               className={open ? styles["open"] : styles["closed"]}
//             >
//                 <div className={styles["close_container"]}>
//                     <div className={styles["faq__item-closed-text"]}>
//                         <h4 className={styles["question"]}>{question}</h4>
//                     </div>
//                     <div style={open ? {transform: "rotate(45deg"} : {transform: "rotate(0deg"}}>
//                         <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M2 11H20M11 20V2" stroke={open ? "#FFF" : "#215AC1"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
//                         </svg>
//                     </div>
//                 </div>
//                 {open && (
//                     <div className={styles["faq__item-open-text"]}>
//                         <p>{answer}</p>
//                     </div>
//                 )}
//         </div>
//     );
// };

import { useState } from "react";

export default function FaqItem({ question, answer, styles }) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div
      className={open ? styles["faq-item-open"] : styles["faq-item-closed"]}
      onClick={toggleOpen}
    >
      <div className={styles["faq-item-header"]}>
        <h4 className={styles["faq-item-question"]}>{question}</h4>
        <div
          className={open ? styles["faq-item-arrow-open"] : styles["faq-item-arrow-closed"]}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 11H20M11 20V2"
              stroke={open ? "#FFF" : "#215AC1"}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {open && <div className={styles["faq-item-answer"]}>{answer}</div>}
    </div>
  );
}
