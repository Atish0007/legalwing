import "bootstrap/dist/css/bootstrap.min.css";
import { FaCheckCircle } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaMapPin } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../../assets/css/hero.css";
import { MdCheckCircle } from "react-icons/md";
import heroImage from "../../assets/images/heroImage1.png";

function Hero() {
  return (
    <section className="hero-section homeBG">
      <div className="container">
        <div className="row align-items-center gy-5 pt-5">

          {/* LEFT CONTENT */}
          <div className="col-lg-6 text-start"> {/* data-aos="fade-right" */}
            <span className="hero-badge">AUTHORIZED LEGAL PARTNER</span>

            <h1 className="hero-title">
              Rent Agreement Registrations&nbsp;
              <span>in Kothrud</span>
            </h1>

            {/* <h3 className="fw-bold pt-2">Starting at <span className="HeadCstmColor">₹799</span> + <small className="text-muted fs-13">Govt. Charges</small></h3> */}

            <h3 className="fw-bold pt-2">
              Starting at{" "}
              <span className="HeadCstmColor">₹799</span>{" "}
              +{" "}
              <small className="text-muted fs-13 d-block d-md-inline">
                Govt. Charges
              </small>
            </h3>

            {/* <p className="hero-subtitle">
             <MdCheckCircle className="text-success"/> Doorstep Biometric Appointment <br />
             <MdCheckCircle className="text-success"/> No Office Visit Required <br />
             <MdCheckCircle className="text-success"/> 100% Legal & Govt. Approved <br />
            </p> */}
            <p className="hero-subtitle d-none d-md-block">
              Professional doorstep registration service across Pune. Legal, secure, and government-compliant in Kothrud, Bavdhan, and beyond.
            </p>

            {/* Desktop View Only Button */}
            <div className="hero-actions d-none d-md-block d-md-flex">
              <button className="btn btn-success hero-btn">
                Check Your Price
              </button>
              <button className="btn btn-outline-success hero-btn-outline">
               <FaPhone /> Talk to Expert
              </button>
            </div>

            <div className="hero-features d-grid d-md-flex">
              <span><FaCheckCircle /> 100% Legal</span>
              <span><FaCheckCircle /> 24-48hr Process</span>
              <span><FaMapMarkerAlt /> Kothrud - Bavdhan</span>
            </div>
          </div>


          {/* Mobile View Only Buttons */}
          <div className="hero-actions d-block d-md-none d-grid">
              <button className="btn btn-success hero-btn">
                Check Your Price
              </button>
              <button className="btn btn-outline-success hero-btn-outline">
               <FaPhone /> Talk to Expert
              </button>
            </div>

          {/* RIGHT IMAGE */}
          {/* <div className="col-lg-6 text-center">
            <div className="hero-image-wrapper">
              <img
                src={heroImage}
                alt="Legal Expert"
                className="img-fluid hero-image"
              />

              <div className="hero-card">
                <h6>5000+</h6>
                <p>Agreements Completed</p>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </section>
  );
}

export default Hero;