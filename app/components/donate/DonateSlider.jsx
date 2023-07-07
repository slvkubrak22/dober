"use client"

import { useState, useRef, useEffect } from "react";

import "../../assets/styles/slider.css";

// const Slider = ({ slides }) => {
//     const [activeSlide, setActiveSlide] = useState(0);
//     const contentRefs = useRef([]);
  
//     const handleTitleClick = (index) => {
//       setActiveSlide(index);
//       scrollToContent(index);
//     };
  
//     const scrollToContent = (index) => {
//       const contentRef = contentRefs.current[index];
//       contentRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     };
  
//     return (
//       <div>
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
//         <div className="slider-container">
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className={`slider-slide ${index === activeSlide ? 'active' : ''}`}
//               ref={(el) => (contentRefs.current[index] = el)}
//             >
//               <p>{slide.content}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };
  
//   export default Slider;;


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

// const Slider = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleTitleClick = (index) => {
//     setActiveIndex(index);
//   };

//   const slides = [
//     { id: 1, text: 'Text 1' },
//     { id: 2, text: 'Text 2' },
//     { id: 3, text: 'Text 3' },
//   ];

//   return (
//     <div>
//       <div>
//         <h3
//           onClick={() => handleTitleClick(0)}
//           style={{
//             fontWeight: activeIndex === 0 ? 'bold' : 'normal',
//             textDecoration: activeIndex === 0 ? 'underline' : 'none',
//             cursor: 'pointer',
//           }}
//         >
//           Image1
//         </h3>
//         <h3
//           onClick={() => handleTitleClick(1)}
//           style={{
//             fontWeight: activeIndex === 1 ? 'bold' : 'normal',
//             textDecoration: activeIndex === 1 ? 'underline' : 'none',
//             cursor: 'pointer',
//           }}
//         >
//           Image2
//         </h3>
//         <h3
//           onClick={() => handleTitleClick(2)}
//           style={{
//             fontWeight: activeIndex === 2 ? 'bold' : 'normal',
//             textDecoration: activeIndex === 2 ? 'underline' : 'none',
//             cursor: 'pointer',
//           }}
//         >
//           Image3
//         </h3>
//       </div>

//       <div style={{ width: '100%', height: '300px', overflowX: 'scroll' }}>
//         {slides.map((slide) => (
//           // <img
//           //   key={slide.id}
//           //   src={slide.image}
//           //   alt={`Image ${slide.id}`}
//           //   style={{ width: '100%', height: 'auto' }}
//           // />
//           <p>
//             {slide.text}
//             key={slide.id}
//           </p>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;


// const Slider = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleTitleClick = (index) => {
//     setActiveIndex(index);
//   };

//   const slides = [
//     { id: 1, image: '/image1.jpg' },
//     { id: 2, image: '/image2.jpg' },
//     { id: 3, image: '/image3.jpg' },
//   ];

//   const activeSlide = slides[activeIndex];

//   return (
//     <div>
//       <div>
//         <h3
//           onClick={() => handleTitleClick(0)}
//           style={{
//             fontWeight: activeIndex === 0 ? 'bold' : 'normal',
//             textDecoration: activeIndex === 0 ? 'underline' : 'none',
//             cursor: 'pointer',
//           }}
//         >
//           Image1
//         </h3>
//         <h3
//           onClick={() => handleTitleClick(1)}
//           style={{
//             fontWeight: activeIndex === 1 ? 'bold' : 'normal',
//             textDecoration: activeIndex === 1 ? 'underline' : 'none',
//             cursor: 'pointer',
//           }}
//         >
//           Image2
//         </h3>
//         <h3
//           onClick={() => handleTitleClick(2)}
//           style={{
//             fontWeight: activeIndex === 2 ? 'bold' : 'normal',
//             textDecoration: activeIndex === 2 ? 'underline' : 'none',
//             cursor: 'pointer',
//           }}
//         >
//           Image3
//         </h3>
//       </div>

//       <div>
//         <img
//           src={activeSlide.image}
//           alt={`Image ${activeSlide.id}`}
//           style={{ width: '100%', height: 'auto' }}
//         />
//       </div>
//     </div>
//   );
// };

// export default Slider;




// const Slider = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleTitleClick = (index) => {
//     setActiveIndex(index);
//   };

//   const slides = [
//     { id: 1, image: '/image1.jpg' },
//     { id: 2, image: '/image2.jpg' },
//     { id: 3, image: '/image3.jpg' },
//   ];

//   const activeSlide = slides[activeIndex];

//   return (
//     <div>
//       <div>
//         <h3
//           onClick={() => handleTitleClick(0)}
//           style={{
//             fontWeight: activeIndex === 0 ? 'bold' : 'normal',
//             textDecoration: activeIndex === 0 ? 'underline' : 'none',
//             cursor: 'pointer',
//           }}
//         >
//           Image1
//         </h3>
//         <h3
//           onClick={() => handleTitleClick(1)}
//           style={{
//             fontWeight: activeIndex === 1 ? 'bold' : 'normal',
//             textDecoration: activeIndex === 1 ? 'underline' : 'none',
//             cursor: 'pointer',
//           }}
//         >
//           Image2
//         </h3>
//         <h3
//           onClick={() => handleTitleClick(2)}
//           style={{
//             fontWeight: activeIndex === 2 ? 'bold' : 'normal',
//             textDecoration: activeIndex === 2 ? 'underline' : 'none',
//             cursor: 'pointer',
//           }}
//         >
//           Image3
//         </h3>
//       </div>

//       <div
//         style={{
//           width: '100%',
//           height: '300px',
//           overflowX: 'scroll',
//           whiteSpace: 'nowrap',
//         }}
//       >
//         {slides.map((slide) => (
//           <img
//             key={slide.id}
//             src={slide.image}
//             alt={`Image ${slide.id}`}
//             style={{
//               display: 'inline-block',
//               width: '100%',
//               height: 'auto',
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;





// const Slider = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const sliderRef = useRef(null);

//   const handleTitleClick = (index) => {
//     setActiveIndex(index);
//     scrollToSlide(index);
//   };

//   const scrollToSlide = (index) => {
//     const sliderElement = sliderRef.current;
//     if (sliderElement) {
//       const slideWidth = sliderElement.offsetWidth;
//       sliderElement.scrollTo({
//         left: slideWidth * index,
//         behavior: 'smooth',
//       });
//     }
//   };

//   const slides = [
//     { id: 1, image: '/image1.jpg' },
//     { id: 2, image: '/image2.jpg' },
//     { id: 3, image: '/image3.jpg' },
//   ];

//   const activeSlide = slides[activeIndex];

//   return (
//     <div>
//       <div>
//         <h3
//           onClick={() => handleTitleClick(0)}
//           style={{
//             fontWeight: activeIndex === 0 ? 'bold' : 'normal',
//             textDecoration: activeIndex === 0 ? 'underline' : 'none',
//             cursor: 'pointer',
//           }}
//         >
//           Image1
//         </h3>
//         <h3
//           onClick={() => handleTitleClick(1)}
//           style={{
//             fontWeight: activeIndex === 1 ? 'bold' : 'normal',
//             textDecoration: activeIndex === 1 ? 'underline' : 'none',
//             cursor: 'pointer',
//           }}
//         >
//           Image2
//         </h3>
//         <h3
//           onClick={() => handleTitleClick(2)}
//           style={{
//             fontWeight: activeIndex === 2 ? 'bold' : 'normal',
//             textDecoration: activeIndex === 2 ? 'underline' : 'none',
//             cursor: 'pointer',
//           }}
//         >
//           Image3
//         </h3>
//       </div>

//       <div
//         ref={sliderRef}
//         style={{
//           width: '100%',
//           height: '300px',
//           overflowX: 'scroll',
//           whiteSpace: 'nowrap',
//         }}
//       >
//         {slides.map((slide) => (
//           <img
//             key={slide.id}
//             src={slide.image}
//             alt={`Image ${slide.id}`}
//             style={{
//               display: 'inline-block',
//               width: '100%',
//               height: 'auto',
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;


// const Slider = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const sliderRef = useRef(null);

//   const handleTitleClick = (index) => {
//     setActiveIndex(index);
//     scrollToSlide(index);
//   };

//   const scrollToSlide = (index) => {
//     const sliderElement = sliderRef.current;
//     if (sliderElement) {
//       const slideWidth = sliderElement.offsetWidth;
//       sliderElement.scrollTo({
//         left: slideWidth * index,
//         behavior: 'smooth',
//       });
//     }
//   };

//   const handleScroll = () => {
//     const sliderElement = sliderRef.current;
//     if (sliderElement) {
//       const slideWidth = sliderElement.offsetWidth;
//       const currentIndex = Math.floor(
//         sliderElement.scrollLeft / slideWidth + 0.5
//       );
//       setActiveIndex(currentIndex);
//     }
//   };

//   useEffect(() => {
//     const sliderElement = sliderRef.current;
//     if (sliderElement) {
//       sliderElement.addEventListener('scroll', handleScroll);
//     }
//     return () => {
//       if (sliderElement) {
//         sliderElement.removeEventListener('scroll', handleScroll);
//       }
//     };
//   }, []);

//   const slides = [
//     { id: 1, image: '/image1.jpg' },
//     { id: 2, image: '/image2.jpg' },
//     { id: 3, image: '/image3.jpg' },
//   ];

//   const activeSlide = slides[activeIndex];

//   return (
//     <div>
//       <div>
//         <h3
//           onClick={() => handleTitleClick(0)}
//           style={{
//             fontWeight: activeIndex === 0 ? 'bold' : 'normal',
//             textDecoration: activeIndex === 0 ? 'underline' : 'none',
//             cursor: 'pointer',
//           }}
//         >
//           Image1
//         </h3>
//         <h3
//           onClick={() => handleTitleClick(1)}
//           style={{
//             fontWeight: activeIndex === 1 ? 'bold' : 'normal',
//             textDecoration: activeIndex === 1 ? 'underline' : 'none',
//             cursor: 'pointer',
//           }}
//         >
//           Image2
//         </h3>
//         <h3
//           onClick={() => handleTitleClick(2)}
//           style={{
//             fontWeight: activeIndex === 2 ? 'bold' : 'normal',
//             textDecoration: activeIndex === 2 ? 'underline' : 'none',
//             cursor: 'pointer',
//           }}
//         >
//           Image3
//         </h3>
//       </div>

//       <div
//         ref={sliderRef}
//         style={{
//           width: '100%',
//           height: '300px',
//           overflowX: 'scroll',
//           whiteSpace: 'nowrap',
//         }}
//       >
//         {slides.map((slide) => (
//           <img
//             key={slide.id}
//             src={slide.image}
//             alt={`Image ${slide.id}`}
//             style={{
//               display: 'inline-block',
//               width: '100%',
//               height: 'auto',
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;