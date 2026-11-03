
const training = [
  {
    number: "01",
    name: "Data Science",
    provider: "Internship / Training",
    category: "DATA & ANALYTICS",
  },
  {
    number: "02",
    name: "Azure Cloud Computing",
    provider: "Internship / Training",
    category: "CLOUD COMPUTING",
  },
  {
    number: "03",
    name: "Cybersecurity",
    provider: "Internship / Training",
    category: "INFORMATION SECURITY",
  },
];

export default function Certifications() {
  return (
    <section className="section certifications" id="certifications">
      <div className="section-top">
        <span className="eyebrow">07 / PROFESSIONAL DEVELOPMENT</span>
        <span className="section-caption">
          CONTINUOUS LEARNING. PRACTICAL EXPOSURE.
        </span>
      </div>

      <h2>
        KEEP
        <br />
        <span>LEARNING.</span>
      </h2>

      <div className="certification-list">
        {training.map((item) => (
          <article className="certification-item" key={item.number}>
            <span className="certification-number">
              {item.number}
            </span>

            <div className="certification-info">
              <span className="project-category">
                {item.category}
              </span>

              <h3>{item.name}</h3>
              <p>{item.provider}</p>
            </div>

            <span className="certification-pending">
              TRAINING EXPERIENCE
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
