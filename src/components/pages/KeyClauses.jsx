import "../../assets/css/KeyClauses.css";
import { FaCheckCircle } from "react-icons/fa";
import headingImg from "../../assets/images/keyclause/head.png"
import shield from "../../assets/images/keyclause/shield.svg";

import one from "../../assets/images/keyclause/1.png";
import two from "../../assets/images/keyclause/2.png";
import three from "../../assets/images/keyclause/3.png";
import four from "../../assets/images/keyclause/4.png";
import five from "../../assets/images/keyclause/5.png";
import six from "../../assets/images/keyclause/6.png";
import seven from "../../assets/images/keyclause/7.png";
import eigth from "../../assets/images/keyclause/8.png";
import nine from "../../assets/images/keyclause/9.png";
import ten from "../../assets/images/keyclause/10.png";

const clauses = [
    { icon: one, title: "Lock-in Period Clause" },
    { icon: two, title: "Rent Increase Clause" },
    { icon: three, title: "Painting & Restoration Clause" },
    { icon: four, title: "Pet Policy Clause" },
    { icon: five, title: "Cheque Bounce / Failed Payment Clause" },
    { icon: six, title: "Society Rules Compliance Clause" },
    { icon: seven, title: "Deposit Refund Timeline Clause" },
    { icon: eigth, title: "Damage & Deduction Clause" },
    { icon: nine, title: "Usage Restriction Clause" },
    { icon: ten, title: "Late Payment Penalty Clause" },
    //"Rent Increase Clause",
    //"Painting & Restoration Clause",
    //"Pet Policy Clause",
    //"Cheque Bounce / Failed Payment Clause",
    //"Society Rules Compliance Clause",
    //"Deposit Refund Timeline Clause",
    //"Damage & Deduction Clause",
    //"Usage Restriction Clause",
    //"Late Payment Penalty Clause",
];

export default function KeyClauses() {
    return (


        <>

            <section className="key-clauses-header">
                <div className="container">
                    <div className="row align-items-center">

                        {/* LEFT : HEADING */}
                        <div className="col-lg-6 col-md-7">
                            <h2 className="header-title mt-4 mt-md-0 pt-1 pt-md-5 ms-0 ms-md-5 ">
                                <span>Key Clauses</span> Included in <br />
                                a <strong>Rent Agreement</strong>
                            </h2>
                        </div>


                    </div>
                </div>
            </section>


            <section className="clauses-header py-4">
                {/* <div className=" clauses-header-container">
                </div> */}


                {/* Clauses Grid */}
                <div className="container">
                    <div className="clauses-grid">
                        {clauses.map((item, index) => (
                            <div className="clause-card" key={index}>
                                <div className="d-flex align-items-center justify-content-center"> {/*clause-left*/}
                                    <span className="clause-number"><img src={item.icon} alt={item.title} width="100" style={{ padding: "12px", transform:"scale(1.3)"}} /></span>
                                    <p className="fs-6 fs-md-5 ms-5" style={{ paddingTop: "20px" }}>{item.title}</p>
                                </div>
                                 <img
                                        src={shield}
                                        alt="Shield"
                                        width="35"
                                        className="me-2"
                                    />
                                {/* <FaCheckCircle className="clause-check" /> */}
                            </div>
                        ))}
                    </div>
                </div>

            </section>

        </>
    );
}