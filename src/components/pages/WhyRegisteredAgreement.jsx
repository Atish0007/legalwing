import "../../assets/css/WhyRegisteredAgreement.css";
import one from "../../assets/images/whyregister/one.png";
import two from "../../assets/images/whyregister/two.png";
import three from "../../assets/images/whyregister/three.png";
function WhyRegisteredAgreement() {
    const points = [
        {
            icon: one,
            title: "Tenant Disputes",
            desc: "Unregistered agreements have no legal standing in court. Without a registered agreement, eviction or damage claims become extremely difficult."
        },
        {
            icon: two,
            title: "Police Verification",
            desc: "In Pune, Do your police verification free with registered rent agreement. Non-compliance may attract legal penalties for property owners."
        },
        {
            icon: three,
            title: "Address Proof Issues",
            desc: "Banks, Passport Offices & RTOs reject notarized agreements. Only a government registered agreement is accepted as valid address proof."
        }
    ];

    return (
        <section className="rent-why-section py-4" id="show-fixed-draft-button">
            <div className="container">

                {/* Heading */}
                <div className="text-center  mb-3 mb-md-5 ">
                    <h2 className="fw-bold">
                        Why You Need a Registered <span className="HeadCstmColor">Rent Agreement</span> ?
                    </h2>
                    <p className="text-muted mt-2">
                        Unregistered or notarized agreements carry serious legal risks for
                        both property owners and tenants.
                    </p>
                </div>

                {/* Cards */}
                <div className="row g-4 justify-content-center">
                    {points.map((item, i) => (
                        <div className="col-12 col-md-6 col-lg-3" key={i}>
                            <div className="rent-card h-100">

                                <div className="RegIcon text-center">  {/* icon-box */}
                                    {/* <span className="step-badge">{i + 1}</span> */}
                                    <img className="img-fluid mb-1" src={item.icon} alt={item.title} style={{transform:"scale(1.3)"}} />
                                </div>

                                <h5 className="fw-semibold mt-3 text-center">{item.title}</h5>
                                <p className="text-muted small mt-2 text-center">{item.desc}</p>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default WhyRegisteredAgreement;
