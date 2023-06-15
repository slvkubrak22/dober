 "use client"
import { useState } from "react"; 
import styles from "../assets/styles/help-page.module.scss";


// export default function Faq () {

//     // const back_src = window.back_src ? window.back_src : '';

//     const FaqItem = ({question,answer}) => {

//         const [open, setOpen] = useState(false);

//         const activeButton = () => {
//             setOpen(!open);
//         }

//         return(<div style={{cursor: 'pointer'}} className={open ? styles['open'] : styles['closed']}>
//             <div onClick={activeButton} className={styles['close_container']}>
//                 <div className={styles["faq__item-closed-text"]}>
//                     <span>{question}</span>
//                 </div>
//                 <div>
//                     {/* <img className={open ? styles['faq__item-open-img'] : styles['faq__item-closed-img']}
//                         src={back_src + "img/specialization/plus.svg"}
//                         alt=""/> */}
//                 </div>
//             </div>
//             {open ? <div className={styles["faq__item-open-text"]}> <span> {answer}</span></div> : <div/>}
//         </div>)
//     }

//     const data = [
//         {
 
//                 title: 'sdsdfsdf',
//                 question: 'sdfsdfsfd',
//                 answer:'sdfdsfsdf',
  
//         },
//         {
  
//                 title: 'sdsdfsdf',
//                 question: 'sdfsdfsfd',
//                 answer:'sdfdsfsdf',

//         }
//     ]


//     // const FaqBlock = (title) => {
//     //     return (
//     //         <div>
//     //             <h2>{title}</h2>
//     //             {data.map((item, key) => 
//     //                 <Faq key={key} question={item.}/>
//     //             )}
//     //         </div>
//     //     )
//     // }

//     return(
//         <section className={styles["specializations__faq-wrapper"]}>
//             <div style={{marginBottom: 45}}>
//                 <span className={styles["specializations__faq-title"]}>FAQ</span>
//             </div>

//            {data.map((item, key) =>
//                <FaqItem key={key} question={item.question} answer={item.answer} />
//            )}
//         </section>
//     );


// }
////////////////////////////////////////////////////////////////////////////////////////////

const FaqBlock = ({ title, faqs }) => {
    return (
      <div>
        <h2>{title}</h2>
        {faqs.map((faq, key) => (
          <FaqItem key={key} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    );
  };
  
  const FaqItem = ({ question, answer }) => {
    const [open, setOpen] = useState(false);
  
    const activeButton = () => {
      setOpen(!open);
    };
  
    return (
      <div
        style={{ cursor: 'pointer' }}
        className={open ? styles['open'] : styles['closed']}
      >
        <div onClick={activeButton} className={styles['close_container']}>
          <div className={styles['faq__item-closed-text']}>
            <span>{question}</span>
          </div>
          <div>
            {/* <img
              className={
                open ? styles['faq__item-open-img'] : styles['faq__item-closed-img']
              }
              src={back_src + 'img/specialization/plus.svg'}
              alt=""
            /> */}
          </div>
        </div>
        {open && (
          <div className={styles['faq__item-open-text']}>
            <span>{answer}</span>
          </div>
        )}
      </div>
    );
  };
  
  export default function Faq() {
    const data = [
      {
        title: 'Block 1',
        faqs: [
          {
            question: 'Question 1',
            answer: 'Answer 1',
          },
          {
            question: 'Question 2',
            answer: 'Answer 2',
          },
          {
            question: 'Question 2',
            answer: 'Answer 2',
          },
          {
            question: 'Question 2',
            answer: 'Answer 2',
          },
        ],
      },
      {
        title: 'Block 2',
        faqs: [
          {
            question: 'Question 3',
            answer: 'Answer 3',
          },
          {
            question: 'Question 4',
            answer: 'Answer 4',
          },
        ],
      },
    ];
  
    return (
      <section className={styles['specializations__faq-wrapper']}>
        <div style={{ marginBottom: 45 }}>
          <span className={styles['specializations__faq-title']}>FAQ</span>
        </div>
  
        {data.map((block, key) => (
          <FaqBlock key={key} title={block.title} faqs={block.faqs} />
        ))}
      </section>
    );
  }

///////////////////////////////////////////////////////////////////////////////////////////

// export default function Help() {

//     const buttonsData = [
//         {
//             title: 'General',
//         },
//         {
//             title: 'Features',
//         },
//         {
//             title: 'Security AND Privacy',
//         },
//         {
//             title: 'Purchase',
//         },
//         {
//             title: 'Sending/Receiving',
//         },
//         // {
//         //     title: '',
//         // },
//     ]

//     return(
//         <>
//             <h2>How may we help you?</h2>
//             <input type="text" placeholder="Search FQAs"/>
//             <div className="buttons-container">
//                 {buttonsData.map((button, index) => 
//                         <button key={index}>{button.title}</button>
//                     )
//                 }
//             </div>
//         </>
//     )
// }

// const Block = ({ title, content }) => {
//     const [expanded, setExpanded] = useState(false);
  
//     const toggleExpanded = () => {
//       setExpanded(!expanded);
//     };
  
//     return (
//       <div className="block">
//         <div className="block-title" onClick={toggleExpanded}>
//           {title}
//         </div>
//         {expanded && (
//           <div className="block-content">
//             {content}
//           </div>
//         )}
//       </div>
//     );
// };
  
// export default function Page () {
//     return (
//       <div className="page">
//         <Block
//           title="Block 1"
//           content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//         />
//         <Block
//           title="Block 2"
//           content="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//         />
//         <Block
//           title="Block 3"
//           content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
//         />
//       </div>
//     );
// };

// const Block = ({ title, content }) => {
//     const [expanded, setExpanded] = useState(false);
  
//     const toggleExpanded = () => {
//       setExpanded(!expanded);
//     };
  
//     return (
//       <div className={styles["block"] + ' ' + (expanded ? styles['expanded'] : '')}>
//         <div className={styles["block-title"]} onClick={toggleExpanded}>
//           {title}
//         </div>
//         <div className={styles["block-content"]}>
//           <div className={styles["content-inner"] + ' ' + (expanded ? styles['expanded'] : '')}>
//             {content}
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   const Page = () => {
//     return (
//       <div className="page">
//         <Block
//           title="Block 1"
//           content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//         />
//         <Block
//           title="Block 2"
//           content="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//         />
//         <Block
//           title="Block 3"
//           content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
//         />
//       </div>
//     );
//   };
  
//   export default Page;


