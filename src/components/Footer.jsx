import { useEffect, useState } from "react";
import "../assets/css/footer.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import { BsDiamondHalf } from 'react-icons/bs';
import legalwingLogo from "../assets/images/legalwingLogo.png";

export default function Footer() {

  // For Show Fixed btn
  const [showWhatsAppBtn, setShowWhatsAppBtn] = useState(false);
  const [showDraftBtn, setShowDraftBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const whatsappTrigger = document.getElementById("show-fixed-whatsapp-button");
      const draftTrigger = document.getElementById("show-fixed-draft-button");

      if (whatsappTrigger) {
        const rectWA = whatsappTrigger.getBoundingClientRect();
        setShowWhatsAppBtn(rectWA.top <= window.innerHeight - 100);
      }

      if (draftTrigger) {
        const rectDraft = draftTrigger.getBoundingClientRect();
        setShowDraftBtn(rectDraft.top <= window.innerHeight - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // Fixed Whats app Circle
  const handleFooterWhatsAppBtn = () => {
    const msg =
      "नमस्कार,\n" +
      "मला रजिस्टर भाडेकरार करायचा आहे.\n\n" +
      // "कृपया खालील माहिती द्यावी:\n" +
      // "• प्रक्रिया\n" +
      // "• लागणारी कागदपत्रे\n" +
      // "• शुल्क\n\n" +
      "धन्यवाद!";

    window.open(
      `https://wa.me/917709415315?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  // Fixed Draft Button
  const handleFooterDraftBtn = () => {
    const msg =
      "नमस्कार,\n" +
      "मला रजिस्टर भाडेकरार याचा Draft हवा आहे.\n\n" +
      "धन्यवाद!";

    window.open(
      `https://wa.me/917709415315?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  }

  return (
    <footer className="premium-footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-col brand-col">
          <h3 className="legal-footer-brand"><img src={legalwingLogo} alt="Legalwing" className="footer-brand-icon" /> Legalwing</h3>
          <p>
            Trusted platform for government-registered rent agreements,
            ensuring legal protection for property owners and tenants
            with a seamless doorstep process.
          </p>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>Registered Rent Agreement</li>
            <li>Leave & License</li>
            <li>Police Verification</li>
            <li>Agreement Renewal</li>
          </ul>
        </div>

        {/* Locations (SPECIAL WRAPPER) */}
        <div className="footer-col locations-col">
          <h4 className="locations-title">Locations</h4>

          <div className="locations-grid">
            <ul>
              <li>Kothrud</li>
              <li>Bavdhan</li>
              <li>Karve Nagar</li>
              <li>Shivaji Nagar</li>
              <li>Katraj</li>
            </ul>

            <ul>
              <li>Hinjewadi</li>
              <li>Wakad</li>
              <li>Baner</li>
              <li>Aundh</li>
              <li>Pimpri</li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="contact-list">
            <li><FaPhoneAlt /> +91 7709415315</li>
            <li><FaEnvelope /> reg.rentagreement@legalwing.in</li>
            <li><FaMapMarkerAlt /> Pune, Maharashtra</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} LegalWing. All rights reserved.
      </div>


      {/* FLOATING CIRCULAR WHATSAPP BUTTONS */}
      <div
        className={`floating-btn-wrapper mobile-only animate-fade-slide ${showWhatsAppBtn ? "show" : ""
          }`}
      >
        <a
          href="tel:7709415315"
          className="floating-btn call-btn"
          aria-label="Call Us"
        >
          <i className="fa-solid fa-phone"></i>
        </a>

        <button
          className="floating-btn whatsapp-btn"
          onClick={handleFooterWhatsAppBtn}
          aria-label="WhatsApp Chat"
        >
          <i className="fab fa-whatsapp"></i>
        </button>
      </div>


      {/* Footer Fixed Draft Button */}
      <div
        className={`fixed-btn-wrapper mobile-only animate-fade-slide ${showDraftBtn ? "show" : ""
          }`}
      >
        <button className="fixed-btn fixed-whatsapp fs-3 whatsappFixedBtn text-uppercase" onClick={handleFooterDraftBtn}>
          <i className="fab fa-whatsapp me-2 fs-3"></i>
          Get Your Draft
        </button>
      </div>
      


    </footer>
  );
}