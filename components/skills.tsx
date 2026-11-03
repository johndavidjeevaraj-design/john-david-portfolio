
const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive, accessible and interactive web applications.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Building server-side application logic, APIs and data-driven features.",
    skills: [
      "Node.js",
      "Express.js",
      "REST API Development",
      "Authentication",
      "Database Integration",
      "CRUD Operations",
    ],
  },
  {
    number: "03",
    title: "Databases & Development Tools",
    description:
      "Working with application data, version control and development environments.",
    skills: [
      "Database Management",
      "Git",
      "GitHub",
      "Linux",
      "VS Code",
    ],
  },
  {
    number: "04",
    title: "Programming & Additional Knowledge",
    description:
      "Programming fundamentals, cloud concepts and creative digital tools.",
    skills: [
      "Python",
      "C++",
      "Google Cloud Fundamentals",
      "Microsoft Azure Fundamentals",
      "Canva",
      "UI Design",
    ],
  },
];

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="section-top">
        <span className="eyebrow">06 / TECHNICAL EXPERTISE</span>
        <span className="section-caption">
          TECHNOLOGIES BEHIND THE PRODUCTS I BUILD.
        </span>
      </div>

      <h2>
        MY
        <br />
        <span>TOOLKIT.</span>
      </h2>

      <div className="skills-list">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.number}>
            <span className="skill-number">{group.number}</span>

            <div className="skill-info">
              <h3>{group.title}</h3>
              <p>{group.description}</p>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <span className="skill-arrow" aria-hidden="true">
              ↗
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
