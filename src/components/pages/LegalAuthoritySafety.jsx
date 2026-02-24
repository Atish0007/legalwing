import { useEffect, useState } from "react";

import "../../assets/css/LegalAuthoritySafety.css";
import AnimatedCounter from "../AnimatedCounter";


const ratings = [
    {
        name: "Rahul Patil",
        rating: 5,
        review: "Very smooth process. Entire rent agreement done online without hassle.",
    },
    {
        name: "Priya Deshmukh",
        rating: 4,
        review: "Professional service, quick response and fully legal process.",
    },
    {
        name: "Amit Kulkarni",
        rating: 5,
        review: "Trusted service. Pune residents can blindly go with them.",
    },
    {
        name: "Sneha Kulkarni",
        rating: 5,
        review: "Excellent support and transparent process.",
    },
];


function LegalAuthoritySafety() {




    // const [index, setIndex] = useState(0);

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setIndex((prev) => (prev + 1) % reviews.length);
    //     }, 4000);

    //     return () => clearInterval(timer);
    // }, []);

     const [reviews, setReviews] = useState([]);

     useEffect(() => {
    fetch("http://localhost:5000/api/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error(err));
  }, []);




    return (
        <section className="legal-authority-section py-5">
            <div className="container">
                <div className="row align-items-center g-4">


                    <div className="col-12 col-md-12 col-lg-12 text-center">
                        <h2 className="fw-bold mb-3">
                            Official Legal <span className="HeadCstmColor">Authority & Safety</span>
                        </h2>
                    </div>

                    {/* LEFT CONTENT */}
                    <div className="col-lg-6">


                        <p className="text-muted">
                            We strictly follow the Maharashtra Government e-Registration rules.
                            Your data is processed through the official{" "}
                            <span className="highlight fst-italic">
                                Department of Registration and Stamps
                            </span>{" "}
                            portal, ensuring complete transparency and legal security.
                        </p>

                        <div className="row mt-4 g-3">
                            <div className="col-12 col-md-6">
                                <div className="security-item">
                                    <div className="icon">
                                        <i className="fa-solid fa-shield-halved"></i>
                                    </div>
                                    <div>
                                        <h6>Encrypted Data</h6>
                                        <p>
                                            Your Aadhaar and PAN details are securely handled via
                                            official government channels.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="security-item">
                                    <div className="icon">
                                        <i className="fa-solid fa-fingerprint"></i>
                                    </div>
                                    <div>
                                        <h6>Fraud Protection</h6>
                                        <p>
                                            Biometric verification prevents identity theft and forged
                                            signatures.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT STATS */}
                    <div className="col-lg-6">
                        <div className="row g-3">

                            <div className="col-6">
                                <div className="stat-card p-4">
                                    {/* <img src="../src/assets/images/agrmnt.png" width="120" alt="" /> */}
                                    <h2><AnimatedCounter end={30000} duration={1800} suffix="+" /></h2>
                                    <p>AGREEMENTS DONE</p>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="stat-card d-flex align-items-center p-4">
                                    <img src="../src/assets/images/rating.png" width="95" alt="" className="ratingClass me-2" />
                                    <h2><AnimatedCounter end={4.9} duration={1800} decimals={1}  /> /5</h2>
                                    {/* <p>GOOGLE RATING</p> */}
                                </div>
                            </div>

                            <div className="col-12">
                                {/* <div className="trust-card d-flex align-items-center justify-content-between">
                                    <div className="avatars">
                                        <span>👤</span>
                                        <span>👤</span>
                                        <span>👤</span>
                                        <span className="count">+2k</span>
                                    </div>
                                    <p className="mb-0 fw-semibold">
                                        Trusted by Pune residents
                                    </p>
                                </div> */}


                                {/* <div className="trust-card google-review-card">
                                    <h5 className="review-title">
                                        ⭐ Google Reviews <span>(4.0 / 5)</span>
                                    </h5>

                                    <div className="review-slider">
                                        <div
                                            className="review-track"
                                            style={{ transform: `translateX(-${index * 100}%)` }}
                                        >
                                            {reviews.map((review, i) => (
                                                <div className="review-item" key={i}>
                                                    <p className="review-text">“{review.text}”</p>

                                                    <div className="review-user">
                                                        <div className="avatar">👤</div>
                                                        <div>
                                                            <strong>{review.name}</strong>
                                                            <div className="stars">
                                                                {"⭐".repeat(review.rating)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div> */}


                                <div className="rating-carousel">
                                    <div className="rating-track">
                                        {[...reviews, ...reviews].map((review, i) => (
                                            <div className="rating-card" key={i}>
                                                <div className="rating-stars">
                                                    {"★".repeat(review.rating)}
                                                    {"☆".repeat(5 - review.rating)}
                                                </div>

                                                <p className="rating-text">“{review.text}”</p>

                                                <div className="rating-user">
                                                    <div className="avatar"><img src={review.profilePhoto} style={{borderRadius: "50%"}} width="35" alt={review.name} /></div>
                                                    <span>{review.name}</span>
                                                    <small>{review.time}</small>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div> {/* Right 6 col*/}


                    {/* New Div for Trusted Pune */}

                    <div className="col-12">
                        <div className="trust-card d-flex align-items-center justify-content-between">
                            <div className="avatars">
                                <span><img src="../src/assets/images/user.png" width="25" alt="" /></span>
                                <span>👤</span>
                                <span><img src="../src/assets/images/user.png" width="25" alt="" /></span>
                                <span className="count">+2k</span>
                            </div>
                            <p className="mb-0 fw-semibold">
                                16000+ Satisfied and Trusted Pune Residents
                            </p>
                        </div>
                    </div>





                </div>
            </div>
        </section>
    );
}

export default LegalAuthoritySafety;
