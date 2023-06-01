// import Image from "next/image";
// import mobile1 from "./assets/img/mobile_1.png";
// import mobile2 from "./assets/img/mobile_2.png";
// import styles from "./assets/styles/main-page.module.scss";

import FirstSection from "./components/MainPageFirstSection";
import Possibilities from "./components/Possibilities";
import Security from "./components/Security";


export default function Home() {
  return (
    <>
      <FirstSection />
      <Possibilities />
      <Security />
    </>
  );
}
