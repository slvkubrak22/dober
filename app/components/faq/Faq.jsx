import FaqBlock from "./FaqBlock";

export default function Faq({styles, blockRefs, faqData}) {
    
    return(
        <div className={styles["faq-container"]}>
            {faqData.map((block, index) => (
                <FaqBlock key={index} title={block.title} faqs={block.faqs} styles={styles}  blockRef={(el) => (blockRefs.current[index] = el)}/>
            ))}
        </div>
    )
}


