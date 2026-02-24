import { useEffect, useState } from "react";
import { Plus, Dash } from "react-bootstrap-icons";
//import { FaPlus, FaMinus } from "react-icons/fa";
// import AOS from "aos";
// import "aos/dist/aos.css";
import "../../assets/css/FaqSection.css";

const faqs = [
  {
    q: "Is rent agreement registration mandatory in Maharashtra?",
    a: "Yes. A registered rent agreement is mandatory and is considered a valid legal proof in Maharashtra."
  },
  {
    q: "Is a notarized rent agreement legally valid?",
    a: "No. Notarized agreements are not accepted for police verification, banks, or most government services."
  },
  {
    q: "How long does it take to complete the registration?",
    a: "The digital copy is delivered within 24 hours and the physical copy within 48 hours."
  },
  {
    q: "Is biometric verification done at home?",
    a: "Yes. Our executive visits your location for doorstep biometric and photo verification."
  },
  {
    q: "What if the owner or tenant is not available?",
    a: "Biometric presence of both parties is mandatory. Appointments can be rescheduled if required."
  },
  {
    q: "What is the validity period of the rent agreement?",
    a: "Generally, the agreement is valid for 11 months, or as per mutual agreement."
  }
];

export default function FaqSection() {
  const [active, setActive] = useState(null);

//   useEffect(() => {
//     AOS.init({
//       duration: 900,
//       easing: "ease-in-out",
//       once: true
//     });
//   }, []);


  return (
    <section className="faq-section m-0">
      <div className="container">
        <div className="row g-5 align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-5" > {/* data-aos="fade-right" */}
            <h2 className="faq-title text-center text-md-start">Frequently <span className="HeadCstmColor">Asked</span> Questions</h2>
            <p className="faq-subtitle">
              Clear answers to common questions about registered rent agreements.
            </p>

            <div className="faq-info-box">
              Government Registered • Secure • Trusted
            </div>
          </div>

          {/* RIGHT FAQ */}
          <div className="col-lg-7" > {/* data-aos="fade-left" */}
            <div className="faq-card">
              {faqs.map((item, i) => (
                <div
                  key={i}
                  className={`faq-item ${active === i ? "open" : ""}`}
                  onClick={() => setActive(active === i ? null : i)}
                >
                  <div className="faq-question">
                    <span className="faq-icon">
                      {active === i ? <Dash /> : <Plus />}
                    </span>

                    <h6>{item.q}</h6>
                  </div>

                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
