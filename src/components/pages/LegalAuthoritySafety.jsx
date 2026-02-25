// import { useEffect, useState } from "react";
import "../../assets/css/LegalAuthoritySafety.css";
import AnimatedCounter from "../AnimatedCounter";

import user1 from "../../assets/images/gglrating/user1_abhishek_M.png";
import user2 from "../../assets/images/gglrating/user2_rushikesh_S.png";
import user3 from "../../assets/images/gglrating/user3_rajan_G.png";
import user4 from "../../assets/images/gglrating/user4_omkar_P.png";
import user5 from "../../assets/images/gglrating/user5_pratham_D.png";
import ratingImg from "../../assets/images/rating.png";

function LegalAuthoritySafety() {
  // const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/api/reviews")
  //     .then((res) => res.json())
  //     .then((data) => setReviews(data))
  //     .catch((err) => console.error(err));
  // }, []);

const reviews = [
  {
    name: "Abhishek Margale",
    rating: 4.9,
    text: "Authentic and very fast service. We satisfy..Gratitude thanks...",
    time: "2 weeks ago",
    profilePhoto: user1
  },
  {
    name: "Rushikesh Shahane",
    rating: 5,
    text: "Very good service...",
    time: "2 weeks ago",
    profilePhoto: user2
  },
  {
    name: "Rajan Ghosh",
    rating: 5,
    text: "Very prompt and efficient service...",
    time: "3 months ago",
    profilePhoto: user3
  },
  {
    name: "Omkar Palange",
    rating: 4.9,
    text: "Excellent service by Legalwing!",
    time: "2 weeks ago",
    profilePhoto: user4
  },
  {
    name: "Pratham Devle",
    rating: 5,
    text: "Good service and excellent staff",
    time: "2 months ago",
    profilePhoto: user5
  }
];


  // ⭐⭐⭐⭐⭐ STAR RENDER FUNCTION (FULL + HALF + EMPTY)
  const renderStars = (rating) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        // full star
        stars.push(
          <i key={i} className="fa-solid fa-star text-warning me-1"></i>
        );
      } else if (rating >= i - 0.5) {
        // half star
        stars.push(
          <i
            key={i}
            className="fa-solid fa-star-half-stroke text-warning me-1"
          ></i>
        );
      } else {
        // empty star
        stars.push(
          <i key={i} className="fa-regular fa-star text-warning me-1"></i>
        );
      }
    }

    return stars;
  };

  return (
    <section className="legal-authority-section py-4">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-12 col-md-12 col-lg-12 text-center">
            <h2 className="fw-bold mb-2 mb-md-3">
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
                  <h2>
                    <AnimatedCounter end={30000} duration={1800} suffix="+" />
                  </h2>
                  <p>AGREEMENTS DONE</p>
                </div>
              </div>

              <div className="col-6">
                <div className="stat-card d-grid d-md-flex align-items-center justify-content-center p-4">
                  <img
                    src={ratingImg}
                    width="95"
                    alt=""
                    className="ratingClass me-1 me-md-2"
                  />
                  <h2>
                    <AnimatedCounter end={4.9} duration={1800} decimals={1} /> /5
                  </h2>
                </div>
              </div>

              {/* ⭐ REVIEW CAROUSEL */}
              <div className="col-12">
                <div className="rating-carousel">
                  <div className="rating-track">
                    {[...reviews, ...reviews].map((review, i) => (
                      <div className="rating-card" key={i}>
                        <div className="rating-stars">
                          {renderStars(review.rating)}
                        </div>

                        <p className="rating-text">“{review.text}”</p>

                        <div className="rating-user">
                          <div className="avatar">
                            <img
                              src={review.profilePhoto}
                              style={{ borderRadius: "50%" }}
                              width="35"
                              alt={review.name}
                            />
                          </div>
                          <span>{review.name}</span>
                          <small>{review.time}</small>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TRUST BAR */}
          <div className="col-12">
            <div className="trust-card d-flex align-items-center justify-content-between">
              <div className="avatars ">
                <span>
                  <img src={user1} width="25" alt="" />
                </span>
                <span><img src={user2} width="25" alt="" /></span>
                <span>
                  <img src={user3} width="25" alt="" />
                </span>
                <span className="count">+2k</span>
              </div>
              <p className="mb-0 fw-semibold text-center">
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