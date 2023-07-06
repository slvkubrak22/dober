"use client"

import { useState, useRef } from "react";

import "../../assets/styles/slider.css";

const Slider = ({ slides }) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const contentRefs = useRef([]);
  
    const handleTitleClick = (index) => {
      setActiveSlide(index);
      scrollToContent(index);
    };
  
    const scrollToContent = (index) => {
      const contentRef = contentRefs.current[index];
      contentRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
  
    return (
      <div>
        <div className="slider-titles">
          {slides.map((slide, index) => (
            <h2
              key={index}
              className={`slide-title ${index === activeSlide ? 'active' : ''}`}
              onClick={() => handleTitleClick(index)}
            >
              {slide.title}
            </h2>
          ))}
        </div>
        <div className="slider-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slider-slide ${index === activeSlide ? 'active' : ''}`}
              ref={(el) => (contentRefs.current[index] = el)}
            >
              <p>{slide.content}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Slider;;


// const Slider = ({ slides }) => {
//     const [activeSlide, setActiveSlide] = useState(0);
//     const sliderWrapperRef = useRef(null);
  
//     const handleTitleClick = (index) => {
//       setActiveSlide(index);
//       scrollToSlide(index);
//     };
  
//     const scrollToSlide = (index) => {
//       const slideWidth = sliderWrapperRef.current.offsetWidth;
//       const transformValue = `translateX(-${slideWidth * index}px)`;
//       sliderWrapperRef.current.style.transform = transformValue;
//     };
  
//     return (
//       <div className="slider-container">
//         <div className="slider-titles">
//           {slides.map((slide, index) => (
//             <h2
//               key={index}
//               className={`slide-title ${index === activeSlide ? 'active' : ''}`}
//               onClick={() => handleTitleClick(index)}
//             >
//               {slide.title}
//             </h2>
//           ))}
//         </div>
//         <div className="slider-wrapper" ref={sliderWrapperRef}>
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className={`slider-slide ${index === activeSlide ? 'active' : ''}`}
//             >
//               <p>{slide.content}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };
  
//   export default Slider;
