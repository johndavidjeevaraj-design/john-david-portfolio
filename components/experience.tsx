
const internships = [
  {
    number: "01",
    title: "Data Science",
    type: "INTERNSHIP",
    description:
      "Gained practical exposure to data science concepts, data-driven problem solving, and the fundamentals of working with data.",
  },
  {
    number: "02",
    title: "Azure Cloud Computing",
    type: "INTERNSHIP",
    description:
      "Developed foundational knowledge of cloud computing concepts and Microsoft Azure services through internship learning.",
  },
  {
    number: "03",
    title: "Cybersecurity",
    type: "INTERNSHIP",
    description:
      "Explored cybersecurity fundamentals, information security concepts, and approaches to understanding digital threats.",
  },
];

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <span className="eyebrow">05 / EXPERIENCE & EDUCATION</span>

      <h2>
        MY
        <br />
        <span>JOURNEY.</span>
      </h2>

      <div className="experience-heading">
        <span className="eyebrow">INTERNSHIP EXPERIENCE</span>
        <span className="section-caption">
          BUILDING KNOWLEDGE THROUGH PRACTICAL EXPOSURE.
        </span>
      </div>

      <div className="experience-list">
        {internships.map((item) => (
          <article className="experience-item" key={item.number}>
            <span className="experience-number">
              {item.number}
            </span>

            <div className="experience-info">
              <span className="project-category">
                {item.type}
              </span>

              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>

            <span className="experience-arrow" aria-hidden="true">
              ↗
            </span>
          </article>
        ))}
      </div>

      <div className="education">
        <span className="eyebrow">EDUCATION</span>

        <article className="education-item">
          <span className="experience-number">01</span>

          <div className="experience-info">
            <span className="project-category">
              BACHELOR OF TECHNOLOGY
            </span>

            <h3>Information Technology</h3>

            <p>
              Er. Perumal Manimekalai College of Engineering
            </p>

            <span className="education-location">
              TAMIL NADU, INDIA
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}
