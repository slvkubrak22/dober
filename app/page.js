
import Advantages from "./components/Advantages";
import FirstSection from "./components/FirstSection";
import InfoForCompanies from "./components/InfoForCompanies";
import Possibilities from "./components/Possibilities";
import Security from "./components/Security";
import Subscribe from "./components/Subscribe";
import UseDober from "./components/UseDober";


export default function Home() {
  return (
    <>
      <FirstSection />
      <Possibilities />
      <Security />
      <Advantages />
      <UseDober />
      <InfoForCompanies />
      <Subscribe />
    </>
  );
}
