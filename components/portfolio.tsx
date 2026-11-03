
import Hero from "./hero";
import Experience from "./experience";
import Skills from "./skills";
import Certifications from "./certifications";

type Project = {
  number: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  status: string;
  statusType: "live" | "development" | "concept";
  visual: "fresh" | "food" | "smart";
  href?: string;
  github?: string;
  action: string;
};

const projects: Project[] = [
  {
    number: "01",
    name: "Rebesta Fresh",
    category: "FULL STACK / E-COMMERCE",
    description:
      "Built and deployed a full-stack farm-to-home e-commerce platform, independently implementing backend APIs, database integration, product management, cart, authentication, checkout and admin workflows.",
    technologies: [
      "JavaScript",
      "Backend APIs",
      "Database Integration",
      "Authentication",
      "E-Commerce",
    ],
    status: "LIVE PROJECT",
    statusType: "live",
    visual: "fresh",
    href: "https://rebestafresh.in",
    github:
      "https://github.com/johndavidjeevaraj-design/rebesta-own-store",
    action: "OPEN LIVE PROJECT ↗",
  },
  {
    number: "02",
    name: "Rebesta",
    category: "FULL STACK / FOOD DELIVERY",
    description:
      "Developing a multi-role food delivery platform designed to connect customers, delivery partners, business partners and administrators through an integrated digital experience.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Full-Stack Development",
    ],
    status: "IN DEVELOPMENT",
    statusType: "development",
    visual: "food",
    github:
      "https://github.com/johndavidjeevaraj-design/rebesta-platform",
    action: "IN DEVELOPMENT",
  },
  {
    number: "03",
    name: "SmartNest",
    category: "WEB DEVELOPMENT / INTERACTIVE 3D",
    description:
      "Designing an interactive smart-home web experience featuring architectural visualisation, 3D-inspired presentation and demonstrations of home automation concepts.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "Interactive 3D",
      "UI Design",
    ],
    status: "CONCEPT",
    statusType: "concept",
    visual: "smart",
    github:
      "https://github.com/johndavidjeevaraj-design/smartnest",
    action: "VIEW PROJECT ↗",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Digital products",
    description:
      "Full-stack applications, e-commerce platforms and digital systems.",
  },
  {
    number: "02",
    title: "Interface engineering",
    description:
      "Responsive interfaces, frontend development and thoughtful interactions.",
  },
  {
    number: "03",
    title: "Creative technology",
    description:
      "Interactive visual experiences, 3D concepts and experimental web design.",
  },
];

function ProjectVisual({ type }: { type: Project["visual"] }) {
  if (type === "fresh") {
    return (
      <div className="project-visual visual-fresh">
        <div className="fresh-top">
          <span>
            rebesta<span className="fresh-dot">.</span>
          </span>
          <span>FRESH FROM THE FARM</span>
        </div>

        <div className="fresh-content">
          <div className="fresh-copy">
            <span className="visual-label">
              GOOD FOOD. GOOD MORNING.
            </span>

            <h4>
              Freshness
              <br />
              starts here.
            </h4>

            <span className="fresh-button">
              SHOP VEGETABLES ↗
            </span>
          </div>

          <div className="fresh-produce" aria-hidden="true">
            <div className="produce produce-tomato">●</div>
            <div className="produce produce-orange">●</div>
            <div className="produce produce-green">●</div>
            <span className="produce-leaf">✳</span>
          </div>
        </div>

        <div className="fresh-bottom">
          <span>HANDPICKED DAILY</span>
          <span>DELIVERED FRESH</span>
          <span>01 / STOREFRONT</span>
        </div>
      </div>
    );
  }

  if (type === "food") {
    return (
      <div className="project-visual visual-food">
        <div className="food-window">
          <div className="food-status">
            <span>9:41</span>
            <span aria-hidden="true">● ● ▰</span>
          </div>

          <div className="food-brand">
            <span>
              rebesta<span className="food-dot">.</span>
            </span>
            <span className="food-avatar">JD</span>
          </div>

          <span className="visual-label">
            GOOD FOOD, ON ITS WAY
          </span>

          <h4>
            What are you
            <br />
            craving today?
          </h4>

          <div className="food-search">
            ⌕ &nbsp; Search dishes and restaurants
          </div>

          <div className="food-categories">
            <div>
              <span>🍛</span>
              <small>Meals</small>
            </div>

            <div>
              <span>🥗</span>
              <small>Healthy</small>
            </div>

            <div>
              <span>🍜</span>
              <small>Noodles</small>
            </div>
          </div>

          <div className="food-promo">
            <span>MADE FOR YOUR HUNGER</span>

            <strong>
              Something
              <br />
              delicious awaits.
            </strong>

            <i aria-hidden="true">↗</i>
          </div>
        </div>

        <div className="food-orbit food-orbit-a" />
        <div className="food-orbit food-orbit-b" />

        <span className="food-side-label">
          PRODUCT / 002
        </span>
      </div>
    );
  }

  return (
    <div className="project-visual visual-smart">
      <div className="smart-top">
        <span>
          SMARTNEST <i>®</i>
        </span>
        <span>HOME / 001</span>
      </div>

      <div className="smart-scene">
        <div className="smart-glow" />

        <svg
          className="smart-house"
          viewBox="0 0 440 280"
          role="img"
          aria-label="Architectural illustration of a modern smart home"
        >
          <defs>
            <linearGradient
              id="houseFront"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop offset="0%" stopColor="#deddd2" />
              <stop offset="100%" stopColor="#a9aa9d" />
            </linearGradient>

            <linearGradient
              id="houseSide"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop offset="0%" stopColor="#a2a69a" />
              <stop offset="100%" stopColor="#6c736b" />
            </linearGradient>
          </defs>

          <path
            d="M60 126 L204 38 L365 122 L220 210 Z"
            fill="#252b27"
          />

          <path
            d="M82 130 L204 59 L204 191 L82 233 Z"
            fill="url(#houseFront)"
          />

          <path
            d="M204 59 L342 130 L342 211 L204 191 Z"
            fill="url(#houseSide)"
          />

          <path
            d="M62 126 L204 38 L365 122 L342 134 L204 65 L84 139 Z"
            fill="#444c43"
          />

          <path
            d="M111 133 L158 106 L158 155 L111 183 Z"
            fill="#c4f15a"
            opacity=".9"
          />

          <path
            d="M235 105 L281 129 L281 165 L235 142 Z"
            fill="#d5e6bd"
          />

          <path
            d="M294 135 L323 150 L323 184 L294 169 Z"
            fill="#c4f15a"
            opacity=".75"
          />

          <path
            d="M163 168 L196 187 L196 228 L163 209 Z"
            fill="#343c34"
          />

          <path
            d="M204 191 L342 211 L220 256 L82 233 Z"
            fill="#8d9386"
            opacity=".8"
          />

          <path
            d="M102 246 L220 269 L385 220"
            fill="none"
            stroke="#c4f15a"
            strokeWidth="1.5"
            opacity=".8"
          />

          <path
            d="M130 258 L220 276 L354 237"
            fill="none"
            stroke="#f4f3ee"
            strokeWidth="1"
            opacity=".5"
          />
        </svg>

        <span className="smart-tag smart-tag-one">
          LIGHTING / ACTIVE
        </span>

        <span className="smart-tag smart-tag-two">
          HOME AUTOMATION
        </span>
      </div>

      <div className="smart-bottom">
        <span>INTELLIGENCE, IN EVERY DETAIL.</span>
        <span>INTERACTIVE CONCEPT ↗</span>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <main>
      <svg className="portfolio-filters" aria-hidden="true" focusable="false">
        <defs>
          <filter id="capability-goo" x="-30%" y="-60%" width="160%" height="220%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
      <Hero />

      {/* INTRO */}
      <section className="intro">
        <span className="eyebrow">
          A DIFFERENT WAY OF THINKING
        </span>

        <p>
          Turning ambitious ideas into{" "}
          <em>real digital things.</em>
        </p>

        <span className="intro-index">JD / 001</span>
      </section>

      {/* SELECTED WORK */}
      <section className="section work" id="work">
        <div className="section-top">
          <span className="eyebrow">
            01 / SELECTED WORK
          </span>

          <span className="section-caption">
            THINGS I HAVE BUILT AND EXPLORED.
          </span>
        </div>

        <h2>
          SELECTED
          <br />
          <span>WORK.</span>
        </h2>

        <div className="project-list">
          {projects.map((project) => (
            <article
              className="project"
              key={project.number}
            >
              <span className="project-number">
                {project.number}
              </span>

              <div
                className={`project-preview ${
                  project.number === "01" ? "project-preview-featured" : ""
                }`}
              >
                <ProjectVisual type={project.visual} />
              </div>

              <div className="project-content">
                <div className="project-heading">
                  <h3>{project.name}</h3>

                  <span
                    className={`status ${project.statusType}`}
                  >
                    <span className="status-indicator" />
                    {project.status}
                  </span>
                </div>

                <span className="project-category">
                  {project.category}
                </span>

                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action project-action-primary"
                      aria-label={`${project.action} - ${project.name}`}
                    >
                      {project.action}
                    </a>
                  ) : null}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action project-action-secondary"
                      aria-label={`View ${project.name} source code on GitHub`}
                    >
                      VIEW SOURCE ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="section about" id="about">
        <span className="eyebrow">
          02 / ABOUT ME
        </span>

        <div className="about-layout">
          <h2>
            CURIOUS
            <br />
            <span>BY DEFAULT.</span>
          </h2>

          <div className="about-copy">
            <p className="about-lead">
              Technology is my medium.{" "}
              <em>Creativity is my approach.</em>
            </p>

            <p>
              I am an Information Technology graduate interested
              in building digital products that combine engineering,
              design and functionality.
            </p>

            <p>
              From developing a live e-commerce platform to exploring
              interactive 3D experiences, I enjoy taking ideas from
              concept to implementation.
            </p>

            <div className="about-actions">
              <a
                href="/John-David-Jeevaraj-Resume.pdf"
                download="John-David-Jeevaraj-Resume.pdf"
                className="text-link"
              >
                DOWNLOAD RESUME ↓
              </a>

              <a
                href="mailto:johndavid.jeevaraj@gmail.com"
                className="text-link"
              >
                LET&apos;S CONNECT ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section
        className="section capabilities"
        id="capabilities"
      >
        <span className="eyebrow">
          03 / CAPABILITIES
        </span>

        <h2>
          WHAT I
          <br />
          <span>BRING.</span>
        </h2>

        <div className="capability-list">
          {capabilities.map((capability) => (
            <div
              className="capability"
              key={capability.number}
            >
              <div className="capability-gooey" aria-hidden="true">
                <span />
                <span />
              </div>
              <span>{capability.number}</span>

              <h3>{capability.title}</h3>

              <p>{capability.description}</p>
            </div>
          ))}
        </div>

        <div className="technology">
          <span className="eyebrow">
            TECHNOLOGIES
          </span>

          <p>
            Next.js <i>·</i> React <i>·</i> TypeScript
            <i> ·</i> JavaScript <i>·</i> Node.js
            <i> ·</i> Express <i>·</i> Python
            <i> ·</i> Git <i>·</i> Google Cloud
          </p>
        </div>
      </section>

      {/* EXPERIENCE & EDUCATION */}
      <Experience />

      {/* TECHNICAL SKILLS */}
      <Skills />

      {/* PROFESSIONAL DEVELOPMENT */}
      <Certifications />

      {/* CONTACT */}
      <section className="contact" id="contact">
        <span className="eyebrow">
          08 / START A CONVERSATION
        </span>

        <h2>
          LET&apos;S
          <br />
          <span>CONNECT.</span>
        </h2>

        <a
          className="email-link"
          href="mailto:johndavid.jeevaraj@gmail.com"
        >
          JOHNDAVID.JEEVARAJ@GMAIL.COM ↗
        </a>

        <div className="contact-footer">
          <span>HOSUR, TAMIL NADU / INDIA</span>

          <div>
            <a
              href="https://github.com/johndavidjeevaraj-design"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              GITHUB ↗
            </a>

            <a
              href="https://www.linkedin.com/in/johndavid-jeevaraj-5b2460278/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              LINKEDIN ↗
            </a>

            <a href="mailto:johndavid.jeevaraj@gmail.com">
              EMAIL ↗
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="logo">
          JD<span>.</span>
        </a>

        <span>
          DESIGNED &amp; BUILT BY JOHN DAVID JEEVARAJ
        </span>

        <a href="#home">
          BACK TO TOP ↑
        </a>

        <span>© 2026</span>
      </footer>
    </main>
  );
}
