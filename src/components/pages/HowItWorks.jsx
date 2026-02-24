import "../../assets/css/HowItWorks.css";
import {
  FaWhatsapp,
  FaFileSignature,
  FaFingerprint,
  FaTruck
} from "react-icons/fa";

import one from "../../assets/images/howitworks/1.png";
import two from "../../assets/images/howitworks/2.png";
import three from "../../assets/images/howitworks/3.png";
import four from "../../assets/images/howitworks/4.png";

const steps = [
  {
    id: 1,
    title: "Share Details",
    desc: "Send us the draft or basic details of Owner, Tenant & Property on WhatsApp.",
    icon: one,
  },
  {
    id: 2,
    title: "Draft Approval",
    desc: "We prepare the legal draft. You review it and suggest changes if any.",
    icon: two,  /*<FaFileSignature />*/
  },
  {
    id: 3,
    title: "Biometric",
    desc: "Our executive visits your doorstep for fingerprint & photo verification.",
    icon: three, /* <FaFingerprint /> */
  },
  {
    id: 4,
    title: "Delivery",
    desc: "Get the digital copy in 24h & physical copy at your doorstep in 48h.",
    icon: four, /* <FaTruck /> */
  },
];

export default function HowItWorks() {
  return (
    <section className="how-section py-5">

      <div className="container">
        <h2 className="how-title">How It <span className="HeadCstmColor">Works</span></h2>
        <p className="how-sub">
          Get your agreement registered in 4 simple steps without leaving your home.
        </p>

        <div className="steps-wrapper">
          {steps.map((step, index) => (
            <div className="step-card" key={step.id}>
              <div className="step-badge">{step.id}</div>
              <div className="step-icon"><img src={step.icon} width="100" alt={step.title} style={{transform:"scale(1.5)"}} /></div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
