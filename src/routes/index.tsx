import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import portrait from "@/assets/ISMA.JPG";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { ProjectDetails } from "@/components/project-details";

// GANTI INI - EMAIL
const CONTACT_EMAIL = "ismawatiainur@gmail.com";

// GANTI INI - WHATSAPP
// Format: https://wa.me/6285868316101
const CONTACT_WHATSAPP_NUMBER = "6285868316101";
const CONTACT_WHATSAPP_URL = `https://wa.me/${CONTACT_WHATSAPP_NUMBER}`;

// GANTI INI - GITHUB
const CONTACT_GITHUB_URL = "https://github.com/ismawati1485";

// GANTI INI - LINKEDIN
const CONTACT_LINKEDIN_URL = "www.linkedin.com/in/ismawatiar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ismawati Ainol Robbi — Web Developer" },
      {
        name: "description",
        content:
          "Selected work and introduction of Ismawati Ainol Robbi, a web developer building practical web applications and data-driven systems.",
      },
      { property: "og:title", content: "Ismawati Ainol Robbi — Web Developer" },
      {
        property: "og:description",
        content: "Web applications, dashboards, and data-driven systems by Ismawati Ainol Robbi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    setRevealed(true);
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && entry.target.classList.add("is-visible"),
        ),
      { threshold: 0.14 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="portfolio-shell">
      <header className="site-header">
        <a
          href="#home"
          className="brand"
          aria-label="Ismawati Ainol Robbi, home"
          onClick={closeMenu}
        >
          <span className="brand-mark">
            I<span>.</span>
          </span>
          <span className="brand-name">Ismawati Ainol Robbi</span>
        </a>
        <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
          <Button variant="outline" size="sm" className="cv-button" asChild>
            <a
              href="/Ismawati%20Ainol%20Robbi_Web%20Developer.pdf"
              download="Ismawati_Ainol_Robbi_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Download CV <ArrowDownRight aria-hidden="true" />
            </a>
          </Button>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </header>

      <section className={`hero-section${revealed ? " hero-ready" : ""}`} id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> Portfolio / 2026
          </p>
          <h1>
            <br />
            WEB DEVELOPER<span className="headline-period">.</span>
          </h1>
          <p className="hero-intro">
            I build web applications, dashboards,
            <br className="desktop-break" /> and data-driven systems.
          </p>
          <div className="hero-actions">
            <Button className="primary-action" asChild>
              <a href="#projects">
                View My Projects <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <a className="text-action" href="#about">
              About Me <ArrowDownRight aria-hidden="true" />
            </a>
          </div>
          <div className="hero-meta">
            <span>
              <span className="meta-symbol">↗</span> Surabaya, Indonesia
            </span>
            <span>
              <span className="availability-dot" /> Available for opportunities
            </span>
          </div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-index">01 / INTRODUCTION</div>
          <img
            src={portrait}
            alt="Portrait of Ismawati Ainol Robbi"
            width={1024}
            height={1536}
            fetchPriority="high"
          />
          <span className="portrait-caption">ISMAWATI AINOL ROBBI — DEVELOPER</span>
          <span className="portrait-corner" aria-hidden="true">
            ✳
          </span>
        </div>
        <a className="scroll-note" href="#projects">
          <span>Scroll to explore</span>
          <ArrowDown aria-hidden="true" />
        </a>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow section-eyebrow">02 / Selected work</p>
            <h2>
              Projects<span className="headline-period">.</span>
            </h2>
          </div>
          <p className="section-note">
            A selection of systems and tools
            <br />
            designed to solve real problems.
          </p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <details
              className={`project-item reveal project-${project.theme}`}
              key={project.number}
            >
              <summary
                className="project-row"
                aria-label={`${project.title.replace("\n", " ")} — expand project details`}
              >
                <div className="project-visual" aria-hidden="true">
                  <img
                    src={project.screenshots[0]?.src || ""}
                    alt=""
                    className="project-cover-img"
                    loading="lazy"
                  />
                  <span className="screenshot-placeholder-label">
                    {project.screenshots.length} Screenshots
                  </span>
                  <span className="visual-open">
                    <ArrowUpRight />
                  </span>
                </div>
                <div className="project-info">
                  <div className="project-topline">
                    <span>{project.number} / 04</span>
                    <span className="project-type">{project.type}</span>
                  </div>
                  <h3>
                    {project.title.split("\n").map((line, index) => (
                      <span key={line}>
                        {index > 0 && <br />}
                        {line}
                      </span>
                    ))}
                  </h3>
                  <div className="project-bottomline">
                    <span className="project-stack">
                      {project.stack.length ? (
                        project.stack.map((item) => <span key={item}>{item}</span>)
                      ) : (
                        <span>Project-specific stack not provided</span>
                      )}
                    </span>
                    <span className="project-link">
                      <span className="project-open-label">View details</span>
                      <span className="project-close-label">Close details</span>
                      <ArrowUpRight aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </summary>
              <ProjectDetails project={project} />
            </details>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <p className="eyebrow section-eyebrow reveal">03 / A little about me</p>
        <div className="about-content reveal">
          <h2>
            Practical ideas,
            <br />
            built with <span>purpose.</span>
          </h2>
          <div className="about-copy">
            <p>
              I’m Ismawati Ainol Robbi, a System Information graduate and Full Stack Web Developer
              based in Sidoarjo. I build practical web applications, dashboards, and data-driven
              systems using technologies such as React, TypeScript, Node.js, and PostgreSQL.
            </p>
            <p>
              I enjoy turning business needs into structured digital solutions — from developing
              operational systems and reporting dashboards to working with APIs, databases, and
              application logic. I’m interested in building reliable products, solving real-world
              problems, and continuously growing as a web developer through hands-on work and
              collaboration.
            </p>
            <a className="text-action" href="#contact">
              More about me <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="about-foot reveal">
          <span>SYSTEM INFORMATION GRADUATE</span>
          <span>BASED IN SIDOARJO, INDONESIA</span>
        </div>
        <div className="about-details reveal">
          <section className="background-column" aria-labelledby="experience-heading">
            <h3 id="experience-heading">Experience</h3>
            <div className="background-entry">
              <div>
                <h4>Freelance Full Stack Developer</h4>
                <p>PT. Pelita Indonesia Djaya (PELNI Services)</p>
              </div>
              <span>Oktober 2026 — Sekarang</span>
            </div>
            <div className="background-entry">
              <div>
                <h4>Junior Web Developer</h4>
                <p>PT Indoberka Investama</p>
              </div>
              <span>May 2026 – July 2026</span>
            </div>
            <div className="background-entry">
              <div>
                <h4>Web Developer Intern</h4>
                <p>Balai Diklat Keagamaan Surabaya</p>
              </div>
              <span>June 2025 – August 2025</span>
            </div>
          </section>
          <section className="background-column" aria-labelledby="education-heading">
            <h3 id="education-heading">Education</h3>
            <div className="background-entry">
              <div>
                <h4>Universitas Nahdlatul Ulama Sidoarjo</h4>
                <p>Sistem Informasi</p>
                <p>IPK: 3.90 / 4.00</p>
              </div>
              <span>2022–2026</span>
            </div>
          </section>
          <section className="background-column stack-column" aria-labelledby="stack-heading">
            <h3 id="stack-heading">Tech Stack</h3>
            <p className="tech-stack-list">
              React · TypeScript · JavaScript · Node.js · Express.js · PostgreSQL · Microsoft SQL
              Server · Tailwind CSS · Git · GitHub
            </p>
          </section>
        </div>
      </section>

      <footer className="contact-section" id="contact">
        <div className="contact-topline">
          <span className="eyebrow">04 / Get in touch</span>
          <span>OPEN TO NEW OPPORTUNITIES</span>
        </div>
        <div className="contact-main">
          <h2>
            Let’s build
            <br />
            something useful<span className="headline-period">.</span>
          </h2>
          {/* GANTI INI - WHATSAPP */}
          <a
            className="contact-cta"
            href={CONTACT_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get in touch via WhatsApp"
          >
            <span>Get in touch</span>
            <span className="contact-arrow">
              <ArrowUpRight />
            </span>
          </a>
        </div>
        <div className="contact-bottom">
          <div className="contact-links" id="contact-links" aria-label="Contact and profile links">
            <span>
              Email {/* GANTI INI - EMAIL */}
              <a href={`mailto:${CONTACT_EMAIL}`} target="_blank" rel="noopener noreferrer">
                <b>{CONTACT_EMAIL}</b>
              </a>
            </span>
            <span>
              WhatsApp {/* GANTI INI - WHATSAPP */}
              <a href={CONTACT_WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <b>{CONTACT_WHATSAPP_NUMBER}</b>
              </a>
            </span>
            <span>
              GitHub {/* GANTI INI - GITHUB */}
              <a href={CONTACT_GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <b>{CONTACT_GITHUB_URL}</b>
              </a>
            </span>
            <span>
              LinkedIn {/* GANTI INI - LINKEDIN */}
              <a href={CONTACT_LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                <b>{CONTACT_LINKEDIN_URL}</b>
              </a>
            </span>
          </div>
          <span>© 2026 ISMAWATI AINOL ROBBI</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
