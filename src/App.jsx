import { useEffect } from 'react'
import './App.css'

import Header from "./components/Header";
import Hero from './components/pages/Hero';
import Govtcard from './components/pages/Govtcard';
import WhyRegisteredAgreement from './components/pages/WhyRegisteredAgreement';
import AgreementBenefits from './components/pages/AgreementBenefits';
import LegalAuthoritySafety from './components/pages/LegalAuthoritySafety';
import HowItWorks from './components/pages/HowItWorks';
import RequiredDocuments from './components/pages/RequiredDocuments';
import PricingSection from './components/pages/PricingSection';
import KeyClauses from './components/pages/KeyClauses';
import FaqSection from './components/pages/FaqSection';
import RentCTA from './components/pages/RentCTA';
import Footer from './components/Footer';

function App() {

//Prevent Inspect  
useEffect(() => {
   const handleContextMenu = (e) => {
      e.preventDefault();
    };
  const handleKeyDown = (e) => {
    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && e.key === "I") ||
      (e.ctrlKey && e.shiftKey && e.key === "J") ||
      (e.ctrlKey && e.key === "U")
    ) {
      e.preventDefault();
    }
  };
  document.addEventListener("contextmenu", handleContextMenu);
  document.addEventListener("keydown", handleKeyDown);

  return () => {
    document.removeEventListener("keydown", handleKeyDown);
    document.removeEventListener("contextmenu", handleContextMenu);
  };
}, []);


  return (
    <>
      <Header />
      <Hero />
      <Govtcard />
      <WhyRegisteredAgreement />
      <AgreementBenefits />
      <LegalAuthoritySafety />
      <HowItWorks />
      <RequiredDocuments />
      <PricingSection />
      <KeyClauses />
      <FaqSection />
      <RentCTA />
      <Footer />
    </>
  )
}

export default App
