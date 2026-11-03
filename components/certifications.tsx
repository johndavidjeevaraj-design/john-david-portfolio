const project = {
  title: "AR Navigation for Visually Impaired Persons",
  category: "FINAL-YEAR ACADEMIC PROJECT",
  description:
    "Explored augmented reality as an assistive navigation approach, with the goal of helping visually impaired people navigate their surroundings more independently.",
};

export default function AcademicProject() {
  return (
    <section className="section certifications" id="academic-project">
      <div className="section-top">
        <span className="eyebrow">07 / ACADEMIC PROJECT</span>
        <span className="section-caption">
          APPLYING TECHNOLOGY TO A REAL-WORLD CHALLENGE.
        </span>
      </div>

      <h2>
        BUILT
        <br />
        <span>WITH PURPOSE.</span>
      </h2>

      <div className="certification-list">
        <article className="certification-item">
          <span className="certification-number">01</span>

          <div className="certification-info">
            <span className="project-category">{project.category}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>

          <span className="certification-pending">ACADEMIC WORK</span>
        </article>
      </div>
    </section>
  );
}
