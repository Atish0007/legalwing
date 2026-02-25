import { useEffect, useState } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import "../../assets/css/PricingSection.css";

export default function PricingSection() {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 799;
    const duration = 1200;
    const stepTime = Math.max(Math.floor(duration / end), 5);

    const timer = setInterval(() => {
      start += 5;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setPrice(start);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);


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
    <section className="pricing-wrapper py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="pricing-heading">Transparent & Lowest <span className="HeadCstmColor">Pricing</span></h2>
          <p className="pricing-desc">
            No hidden charges. Pay only official Government fees + service cost.
          </p>
        </div>

        <div className="row align-items-center g-4">
          {/* LEFT INFO */}
          <div className="col-lg-6 ps-5">
            <div className="pricing-info">
              <h4>Rent Agreement Package Includes:</h4>

              <ul>
                <li><BsCheck2Circle /> Biometric Verification 1 visit</li>
                <li><BsCheck2Circle /> Drafting by Legal Expert</li>
                <li><BsCheck2Circle /> Govt. Approved Format</li>
                <li><BsCheck2Circle /> Digital - WhatsApp and Mail Soft Copy</li>
                <li><BsCheck2Circle /> Police Verification Guidance</li>
                <li><BsCheck2Circle /> Free Corrections Support</li>
              </ul>
            </div>
          </div>

          {/* RIGHT PRICE CARD */}
          <div className="col-lg-6">
            <div className="price-glass-card">
              <span className="badge-tag">Registered Rent Agreement</span>

              <div className="animated-price">
                ₹{price}
                <span className="plus">+</span>
              </div>

              <p className="small-note">Government charges applicable</p>

              <div className="govt-fee-box">
                <div>
                  <span>Registration Fee</span>
                  <span>₹1,000</span>
                </div>
                <div>
                    <span>Govt. DHC Fee</span>
                    <span>₹300</span>
                </div>
                <div>
                  <span>Stamp Duty</span>
                  <span className="text-end text-md-start" style={{fontSize:"13px", fontStyle:"italic"}}>Approx. 0.25% of Depend on <br className="d-none d-md-block" /> duration + rent + deposit</span>
                </div>
              </div>

              <button className="btn btn-success w-100 mt-4" onClick={handleWhatsApp}>
                Check Your Price
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
