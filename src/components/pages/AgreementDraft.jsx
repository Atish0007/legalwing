import React from "react";
import "../../assets/css/agreementdraft.css";

import agreementImg from "../../assets/images/agreement-draft.jpeg";
import agreementPdf from "../../assets/pdf/agreement-draft.pdf";

const AgreementDraft = ({ openForm, agreementUnlocked }) => {

    const handleDraftClick = () => {
        if (!agreementUnlocked) {
            openForm("Agreement Draft");
        } else {
            //window.open(agreementImg, "_blank");
            const link = document.createElement("a");

            link.href = agreementPdf;

            link.download = "Agreement-Draft.pdf";

            document.body.appendChild(link);

            link.click();

            document.body.removeChild(link);
        }
    };

    return (
        <section className="agreement-sec pt-3 pb-3 ">

            <div className="container">

                <div className="agreement-wrapper">

                    <div
                        className={`agreement-card ${!agreementUnlocked ? "agreement-blur" : ""}`}
                        onClick={handleDraftClick}
                    >

                        <img src={agreementImg} alt="Agreement Draft" />

                        {!agreementUnlocked && (
                            <>
                                <span className="agreement-cta-text">
                                    Download Draft
                                </span>

                                <div className="agreement-overlay">
                                    <button>Download Draft</button>
                                </div>
                            </>
                        )}

                        {agreementUnlocked && (
                            <div className="agreement-unlocked">
                                <h6>Click Here To Download Draft</h6>
                            </div>
                        )}

                    </div>

                </div>

            </div>

        </section>
    );
};

export default AgreementDraft;