// import Image from "next/image";
// import mobile1 from "./assets/img/mobile_1.png";
// import mobile2 from "./assets/img/mobile_2.png";
// import styles from "./assets/styles/main-page.module.scss";

import Advantages from "./components/Advantages";
import FirstSection from "./components/FirstSection";
import Possibilities from "./components/Possibilities";
import Security from "./components/Security";
import UseDober from "./components/UseDober";


export default function Home() {
  return (
    <>
      <FirstSection />
      <Possibilities />
      <Security />
      <Advantages />
      <UseDober />
    </>
  );
}
