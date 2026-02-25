import "../assets/css/footer.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { BsDiamondHalf } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="premium-footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-col brand-col">
          <h3 className="legal-footer-brand"><BsDiamondHalf className="ftr-brand-icon" /> LegalWing</h3>
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
            <li><FaPhoneAlt /> +91 7387484615</li>
            <li><FaEnvelope /> reg.rentagreement@legalwing.in</li>
            <li><FaMapMarkerAlt /> Pune, Maharashtra</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} LegalWing. All rights reserved.
      </div>
    </footer>
  );
}