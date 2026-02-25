import { useEffect, useState } from "react";
import { FaShieldAlt, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { BsDiamondHalf } from 'react-icons/bs';
import "../assets/css/header.css";

function Header() {

    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                // scroll down
                setShowHeader(false);
            } else {
                // scroll up
                setShowHeader(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const handleWhatsApp = () => {

        const message = "Hello, \n" +
                        "I am looking for a Rent Agreement service.\n\n" +
                        "Please share:\n" +
                        "• Process\n" +
                        "• Required documents\n" +
                        "• Charges\n\n" +
                        "Thanks!";
        //const message = `नमस्कार, \n मला भाडेकरार (Rent Agreement) संदर्भात माहिती हवी आहे.\n कृपया process आणि charges कळवा. \n\nधन्यवाद!`;

        const whatsappUrl = `https://wa.me/917709415315?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <header className={`legal-header ${showHeader ? "show" : "hide"}`}>
            <div className="container">
            <nav className="navbar navbar-expand-lg">
                <div className="container legal-container">

                    {/* Brand */}
                    <a className="navbar-brand legal-brand" href="/">
                        {/* <FaShieldAlt className="brand-icon" /> */}
                        <BsDiamondHalf className="brand-icon" />

                        LegalWing
                    </a>

                    {/* Toggle */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#legalNavbar"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Menu */}
                    <div className="collapse navbar-collapse" id="legalNavbar">
                        <ul className="navbar-nav mx-auto legal-menu">
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">About Us</a> */}
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Support</a>
                            </li> */}
                        </ul>

                        {/* CTA */}
                        <div className="d-flex gap-2 legal-cta">
                            <a className="btn legal-whatsapp" href="#" onClick={handleWhatsApp}>
                                <FaWhatsapp /> WhatsApp
                            </a>
                            <a className="btn legal-call" href="tel:7709415315">
                                <FaPhoneAlt /> 7709415315
                            </a>
                        </div>
                    </div>

                </div>
            </nav>
            </div>
        </header>
    )
}

export default Header;