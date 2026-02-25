
import { useEffect, useState } from "react";
import "../../assets/css/Govtcard.css";
import { MdVerified } from "react-icons/md";
//import { FaShieldAlt } from "react-icons/fa";
//import { IoCheckmarkCircleSharp } from "react-icons/io5";

function Govtcard(){

  //const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1800); // skeleton demo
  }, []);

 return(
    <section className="py-4">
        <div className="container my-4"> {/*{`container my-4 ${dark ? "dark-mode" : ""}`}*/}
        <div className="row justify-content-center">
            <div className="col-12 col-md-9 col-lg-7">

            {/* Dark Mode Toggle */}
            {/* <div className="text-end mb-2">
                <button
                className="btn btn-sm btn-outline-secondary"
                onClick={() => setDark(!dark)}
                >
                {dark ? "☀ Light" : "🌙 Dark"}
                </button>
            </div> */}

            {/* CARD */}
            <div className="govt-card glass">

                {/* WATERMARK */}
                <span className="govt-watermark">GOVT</span>

                {loading ? (
                <div className="skeleton-wrapper">
                    <div className="sk-icon"></div>
                    <div className="sk-line w-75"></div>
                    <div className="sk-line w-50"></div>
                    <div className="sk-chip"></div>
                </div>
                ) : (
                <div className="d-flex gap-3 align-items-start">

                    {/* ICON */}
                    <div className="govt-icon">
                    <MdVerified className="text-success fs-2" />
                    <span className="verified-badge"></span>
                    </div>

                    {/* CONTENT */}
                    <div className="w-100">
                    <h5 className="fw-bold mb-1 ms-4 ms-md-0">
                        Maharashtra Government
                    </h5>
                    <p className="small text-muted mb-3">
                        Authorized Service Provider
                    </p>

                    <div className="reg-box d-flex justify-content-between flex-wrap gap-2">
                        <span className="small text-muted GovRegPD">
                        Govt. Reg. Number
                        </span>
                        <span className="reg-chip">
                        MRD-ASP/5764/2020
                        </span>
                    </div>
                    </div>

                </div>
                )}

            </div>

            </div>
        </div>
        </div>
    </section>
 );
}

export default Govtcard;