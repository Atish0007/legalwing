import "../../assets/css/footer.css";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="premium-footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-col brand-col">
          <h3>LegalWing</h3>
          <p>
            Trusted platform for government-registered rent agreements,
            ensuring legal protection for property owners and tenants
            with a seamless doorstep process.
          </p>

          {/* <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-whatsapp"
          >
            <FaWhatsapp />
            Chat on WhatsApp
          </a> */}
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

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>FAQs</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="contact-list">
            <li>
              <FaPhoneAlt /> +91 7387484615
            </li>
            <li>
              <FaEnvelope /> support@legalwing.in
            </li>
            <li>
              <FaMapMarkerAlt /> Pune, Maharashtra
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} LegalWing. All rights reserved.
      </div>
    </footer>
  );
}