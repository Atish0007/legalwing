import "../../assets/css/RentCTA.css";
import { FaWhatsapp } from "react-icons/fa";

export default function RentCTAAlt() {

    const handleWhatsApp = () => {

        const msg =
            "नमस्कार,\n" +
            "मला रजिस्टर भाडेकरार करायचा आहे.\n\n" +
            "धन्यवाद!";

        window.open(
            `https://wa.me/917709415315?text=${encodeURIComponent(msg)}`,
            "_blank"
        );
    };


    return (
        <section className="cta-alt-section py-5">
            <div className="cta-alt-wrapper">

                <div className="cta-alt-content text-center">
                    <span className="cta-badge">Registered Rent Agreement</span>

                    <h2>Need Registered Rent Agreement Today ?</h2>

                    <p className="text-center m-auto">
                        Skip the lines and agents. Join <strong>2000+</strong> happy residents
                        in Pune who registered their agreements from home.
                    </p>

                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-whatsapp-btn mt-4"
                        onClick={handleWhatsApp}
                    >
                        <FaWhatsapp className="fs-3" />
                        Chat with us on WhatsApp
                    </a>
                </div>

                {/* <div className="cta-alt-visual">
          <div className="glass-card">
            <span>✔ Government Registered</span>
            <span>✔ Doorstep Process</span>
            <span>✔ Legal Validity</span>
          </div>
        </div> */}

            </div>
        </section>
    );
}