import { useState, useEffect } from 'react'
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
import AgreementDraft from './components/pages/AgreementDraft';
import CommonForm from './components/pages/CommonForm';

function App() {


  // Unlock State
  const [formTitle, setFormTitle] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [agreementUnlocked, setAgreementUnlocked] = useState(false);

  // Common Form Open
  const openForm = (title) => {
    console.log(title);
    setFormTitle(title);
    //setCurrentFormType(title); // new added
    setShowForm(true);
  };


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
      <AgreementDraft openForm={openForm} agreementUnlocked={agreementUnlocked} />
      <AgreementBenefits />
      <LegalAuthoritySafety />
      <HowItWorks />
      <RequiredDocuments />
      <PricingSection />
      <KeyClauses />
      <FaqSection />
      <RentCTA />

      <CommonForm
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        title={formTitle}
        onSuccess={() => {
          setAgreementUnlocked(true);
        }}
      />

      <Footer openForm={openForm} />
    </>
  )
}

export default App
