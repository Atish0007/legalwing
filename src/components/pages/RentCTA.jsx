import "../../assets/css/RentCTA.css";
import { FaWhatsapp } from "react-icons/fa";

export default function RentCTAAlt() {

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