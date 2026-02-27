import { useEffect, useState } from "react";
import { Plus, Dash } from "react-bootstrap-icons";
import "../../assets/css/FaqSection.css";
import faqImg from "../../assets/images/faq.png";

const faqs = [
  {
    q: "What is the New Rent Act (Model Tenancy Act 2021)?",
    a: "The Model Tenancy Act, 2021 is a law introduced by the Government of India to regulate rental housing, protect the rights of landlords and tenants, and reduce disputes through a clear legal framework."
  },
  {
    q: "Is a written Rent Agreement mandatory under the New Rent Act?",
    a: "Yes. A written rent agreement is compulsory. The agreement must clearly mention rent amount, security deposit, duration, notice period, and other terms."
  },
  {
    q: "Is registration of Rent Agreement required?",
    a: "Yes. The agreement must be submitted to the Rent Authority within the prescribed time after execution. Both landlord and tenant are required to inform the Rent Authority."
  },
  {
    q: "What is the maximum security deposit allowed?",
    a: "Under the Model Tenancy Act: Residential property: Maximum 2 months’ rent Commercial property: Maximum 6 months’ rent Landlords cannot demand excessive deposits beyond this limit."
  },
  {
    q: "Who is responsible for property maintenance?",
    a: "The Act clearly divides responsibilities: ✔️ Landlord’s responsibility: Structural repairs Whitewashing (if agreed) Major plumbing & electrical repairs ✔️ Tenant’s responsibility: Minor repairs Routine maintenance Keeping property in good condition"
  },
  {
    q: "Can the landlord increase rent anytime?",
    a: "No. Rent can only be revised as per terms mentioned in the agreement.Proper notice (as agreed) must be given before increasing rent."
  },
  {
    q: "What is the notice period to vacate?",
    a: "The notice period should be clearly mentioned in the agreement. If not specified, generally one month notice is required for residential property."
  },
  {
    q: "Can a landlord forcefully evict a tenant?",
    a: "No. The landlord cannot evict a tenant without following legal procedure. Eviction must be done through the Rent Authority as per the Act."
  },
  {
    q: "What if the tenant does not pay rent?",
    a: "If the tenant fails to pay rent: Landlord can approach Rent Authority Tenant may be given time to clear dues Continuous default may lead to eviction"
  }
];

export default function FaqSection() {
  const [active, setActive] = useState(null);


  return (
    <section className="faq-section m-0 py-4">
      <div className="container">
        <div className="row g-4 align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-5">
            <h2 className="faq-title text-center text-md-start">Frequently <span className="HeadCstmColor">Asked</span> Questions</h2>
            <p className="faq-subtitle text-center text-md-start">
              Clear answers to common questions about registered rent agreements.
            </p>



            {/* FAQ IMAGE */}
            <div className="faq-image-wrapper text-center text-lg-start mt-0">
              <img
                src={faqImg}
                alt="Rent Agreement FAQ"
                className="img-fluid faq-image"
              />
            </div>

            <div className="faq-info-box text-center">
              Government Registered • Secure • Trusted
            </div>


          </div>

          {/* RIGHT FAQ */}
          <div className="col-lg-7">
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
