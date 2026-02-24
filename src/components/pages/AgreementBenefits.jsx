import "../../assets/css/AgreementBenefits.css";
import owner from "../../assets/images/agreementbenefits/owner.png";
import rent from "../../assets/images/agreementbenefits/rent.png";


const ownersBenefits = [
    "Legally Valid Proof of Tenancy & Ownership",
    "Faster & Stronger Eviction Support in Case of Default",
    "Clear Lock-in & Notice Period Protection",
    "Legal Recovery Support for Unpaid Rent",
    "Protection Under Maharashtra Rent Control Act",
    "Structured Terms to Prevent Future Disputes",
    "Police Verification Compliance for Safety",
];

const tenantsBenefits = [
    "Government-Registered Address Proof for Bank, Passport & KYC",
    "Protection Against Sudden Eviction",
    "Fixed Rent Terms – No Arbitrary Increase",
    "Deposit Safety with Written Terms",
    "Clear Maintenance & Utility Responsibilities",
    "Legal Security of Tenure",
    "Transparent Lock-in & Exit Clauses",
];

export default function AgreementBenefits() {
    return (
        <section className="agreement-section py-4">
            <div className="container">

                <div className="text-center mb-5">
                    <h2 className="fw-bold">How a Rent Agreement Protects <span className="HeadCstmColor">Owners & Tenants</span> ?</h2>
                    {/* <p className="text-muted mt-2">Unregistered or notarized agreements carry serious legal risks for both property owners and tenants.</p> */}
                </div>

                <div className="cards-wrapper">

                    {/* Property Owners */}
                    <div className="benefit-card owner-card">
                        <div className="card-header">
                            <span className="card-icon"><img src={owner} alt="Owner" className="img-fluid AgreementOwnerImg" /></span>
                            <div>
                                <h3>For Property Owners</h3>
                                <p>( घरमालक )</p>
                            </div>
                        </div>

                        <ul className="benefit-list">
                            {ownersBenefits.map((item, index) => (
                                <li key={index}>
                                    <span className="check">✔</span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="card-footer highlight">
                            💡 Avoid Legal Risk, Rental Fraud & Tenant Disputes.
                        </div>
                    </div>

                    {/* Tenants */}
                    <div className="benefit-card tenant-card">
                        <div className="card-header">
                            <span className="card-icon"><img src={rent} alt="Rent" className="img-fluid AgreementRentImg" /></span>
                            <div>
                                <h3>For Tenants</h3>
                                <p>( भाडेकरू )</p>
                            </div>
                        </div>

                        <ul className="benefit-list">
                            {tenantsBenefits.map((item, index) => (
                                <li key={index}>
                                    <span className="check">✔</span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="card-footer highlight">
                            💡 Secure Your Stay with Proper Legal Documentation.
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}