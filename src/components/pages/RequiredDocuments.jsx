import "../../assets/css/RequiredDocuments.css";
import ownerImg from "../../assets/images/requireDoc/map.png"; 
import aadhaarImg from "../../assets/images/requireDoc/aadhar.png";
import panImg from "../../assets/images/requireDoc/pan.png";
import electricityImg from "../../assets/images/requireDoc/home.png";

const documents = [
  {
    img: aadhaarImg,
    name: "Aadhar Card Copy",
    role: "Owner / Tenant",
  },
  {
    img: panImg,
    name: "PAN Card Copy",
    role: "Owner / Tenant",
  },
  {
    img: electricityImg,
    name: "Electricity Bill / Index 2",
    role: "Owner / Tenant",
  },
];

export default function RequiredDocuments() {
  return (
    <section className="docs-section py-4">
      <div className="container">
        <h2 className="docs-title">
          Required <span className="HeadCstmColor">Documents</span>
        </h2>

        <div className="docs-layout pt-4">
          {/* LEFT IMAGE */}
          <div className="docs-image text-center">
            <h4>Available <span className="HeadCstmColor">Across Maharashtra</span></h4>
            <img src={ownerImg} alt="Required Documents" />
          </div>

          {/* RIGHT LIST */}
          <div className="docs-list">
            {documents.map((doc, index) => (
              <div className="doc-row" key={index}>
                <img src={doc.img} alt={doc.name} />
                <div className="doc-info ms-2">
                  <h4>{doc.name}</h4>
                  <span>{doc.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}