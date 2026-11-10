import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import portrait from "@/assets/ismawati-portrait-placeholder.jpg";
import { Button } from "@/components/ui/button";

const projects = [
  {
    number: "01",
    title: "Ship Maintenance\nManagement System",
    type: "Full Stack Web Application",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    theme: "ship",
    overview: "A full-stack system for organizing vessel maintenance and keeping work activity in view.",
    role: "Full-stack web development",
    features: ["Vessel maintenance schedules", "Work-order tracking", "Maintenance status overview"],
  },
  {
    number: "02",
    title: "ERP Reporting\nDashboard",
    type: "Business Intelligence Dashboard",
    stack: ["React", "TypeScript", "Node.js", "Microsoft SQL Server"],
    theme: "erp",
    overview: "A reporting dashboard that makes business performance and ERP data easier to review.",
    role: "Full-stack web development",
    features: ["Business summary metrics", "Reporting dashboard", "Performance trend visualization"],
  },
  {
    number: "03",
    title: "Meeting Attendance\nSystem",
    type: "Web Application",
    stack: [],
    theme: "meeting",
    overview: "A web application for organizing meeting participation and recording attendance.",
    role: "Web application development",
    features: ["Meeting details", "Attendee lists", "Attendance recording"],
  },
  {
    number: "04",
    title: "CVRP Optimization\nusing Genetic Algorithm",
    type: "Research / Optimization Project",
    stack: [],
    theme: "research",
    overview: "A research project applying a genetic algorithm to the capacitated vehicle routing problem.",
    role: "Research and algorithm implementation",
    features: ["Vehicle route optimization", "Route distance evaluation", "Genetic algorithm approach"],
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ismawati Ainol Robbi — Full Stack Web Developer" },
      {
        name: "description",
        content:
          "Selected work and introduction of Ismawati Ainol Robbi, a full stack web developer building practical web applications and data-driven systems.",
      },
      { property: "og:title", content: "Ismawati Ainol Robbi — Full Stack Web Developer" },
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
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.14 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="portfolio-shell">
      <header className="site-header">
        <a href="#home" className="brand" aria-label="Ismawati Ainol Robbi, home" onClick={closeMenu}>
          <span className="brand-mark">I<span>.</span></span>
          <span className="brand-name">Ismawati Ainol Robbi</span>
        </a>
        <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <Button variant="outline" size="sm" className="cv-button" asChild>
            <a href="#contact" onClick={closeMenu}>Download CV <ArrowDownRight aria-hidden="true" /></a>
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
          <p className="eyebrow"><span className="status-dot" /> Portfolio / 2026</p>
          <h1>FULL STACK<br />WEB DEVELOPER<span className="headline-period">.</span></h1>
          <p className="hero-intro">I build web applications, dashboards,<br className="desktop-break" /> and data-driven systems.</p>
          <div className="hero-actions">
            <Button className="primary-action" asChild>
              <a href="#projects">View My Projects <ArrowRight aria-hidden="true" /></a>
            </Button>
            <a className="text-action" href="#about">About Me <ArrowDownRight aria-hidden="true" /></a>
          </div>
          <div className="hero-meta">
            <span><span className="meta-symbol">↗</span> Surabaya, Indonesia</span>
            <span><span className="availability-dot" /> Available for opportunities</span>
          </div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-index">01 / INTRODUCTION</div>
          <img src={portrait} alt="Editorial portrait placeholder for Ismawati Ainol Robbi" width={1024} height={1280} fetchPriority="high" />
          <span className="portrait-caption">ISMAWATI AINOL ROBBI — DEVELOPER</span>
          <span className="portrait-corner" aria-hidden="true">✳</span>
        </div>
        <a className="scroll-note" href="#projects"><span>Scroll to explore</span><ArrowDown aria-hidden="true" /></a>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-heading reveal">
          <div><p className="eyebrow section-eyebrow">02 / Selected work</p><h2>Projects<span className="headline-period">.</span></h2></div>
          <p className="section-note">A selection of systems and tools<br />designed to solve real problems.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <details className={`project-item reveal project-${project.theme}`} key={project.number}>
              <summary className="project-row" aria-label={`${project.title.replace("\n", " ")} — expand project details`}>
                <div className="project-visual" aria-hidden="true">
                  <ProjectArtwork theme={project.theme} />
                  <span className="screenshot-placeholder-label">Project screenshot placeholder</span>
                  <span className="visual-open"><ArrowUpRight /></span>
                </div>
                <div className="project-info">
                  <div className="project-topline"><span>{project.number} / 04</span><span className="project-type">{project.type}</span></div>
                  <h3>{project.title.split("\n").map((line, index) => <span key={line}>{index > 0 && <br />}{line}</span>)}</h3>
                  <div className="project-bottomline">
                    <span className="project-stack">{project.stack.length ? project.stack.map((item) => <span key={item}>{item}</span>) : <span>Project-specific stack not provided</span>}</span>
                    <span className="project-link"><span className="project-open-label">View details</span><span className="project-close-label">Close details</span><ArrowUpRight aria-hidden="true" /></span>
                  </div>
                </div>
              </summary>
              <div className="project-details">
                <p className="project-overview"><span>Overview</span>{project.overview}</p>
                <div className="project-detail-grid">
                  <p><span>Role</span>{project.role}</p>
                  <div className="project-features"><span>Key features</span><ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div>
                  <p><span>Tech stack</span>{project.stack.length ? project.stack.join(" · ") : "Project-specific technologies not provided"}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <p className="eyebrow section-eyebrow reveal">03 / A little about me</p>
        <div className="about-content reveal">
          <h2>Practical ideas,<br />built with <span>purpose.</span></h2>
          <div className="about-copy">
            <p>I’m Ismawati Ainol Robbi, a System Information graduate and Full Stack Web Developer based in Sidoarjo. I build practical web applications, dashboards, and data-driven systems.</p>
            <a className="text-action" href="#contact">More about me <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
        <div className="about-foot reveal"><span>SYSTEM INFORMATION GRADUATE</span><span>BASED IN SIDOARJO, INDONESIA</span></div>
        <div className="about-details reveal">
          <section className="background-column" aria-labelledby="experience-heading">
            <h3 id="experience-heading">Experience</h3>
            <div className="background-entry"><div><h4>Junior Web Developer</h4><p>PT Indoberka Investama</p></div><span>May 2026 – July 2026</span></div>
            <div className="background-entry"><div><h4>Web Developer Intern</h4><p>Balai Diklat Keagamaan Surabaya</p></div><span>June 2025 – August 2025</span></div>
          </section>
          <section className="background-column" aria-labelledby="education-heading">
            <h3 id="education-heading">Education</h3>
            <div className="background-entry"><div><h4>Universitas Nahdlatul Ulama Sidoarjo</h4><p>Sistem Informasi</p></div><span>2022–2026</span></div>
          </section>
          <section className="background-column stack-column" aria-labelledby="stack-heading">
            <h3 id="stack-heading">Tech Stack</h3>
            <p className="tech-stack-list">React · TypeScript · JavaScript · Node.js · Express.js · PostgreSQL · Microsoft SQL Server · Tailwind CSS · Git · GitHub</p>
          </section>
        </div>
      </section>

      <footer className="contact-section" id="contact">
        <div className="contact-topline"><span className="eyebrow">04 / Get in touch</span><span>OPEN TO NEW OPPORTUNITIES</span></div>
        <div className="contact-main"><h2>Let’s build<br />something useful<span className="headline-period">.</span></h2><a className="contact-cta" href="#contact-links"><span>Get in touch</span><span className="contact-arrow"><ArrowUpRight /></span></a></div>
        <div className="contact-bottom"><div className="contact-links" id="contact-links" aria-label="Contact and profile links"><span>Email <b>Not provided</b></span><span>GitHub <b>Profile not provided</b></span><span>LinkedIn <b>Profile not provided</b></span></div><span>© 2026 ISMAWATI AINOL ROBBI</span><a href="#home">Back to top ↑</a></div>
      </footer>
    </main>
  );
}

function ProjectArtwork({ theme }: { theme: string }) {
  if (theme === "ship") {
    return <div className="mock-window ship-window"><div className="mock-sidebar"><b>PORTLINE</b><i /><i /><i /><i /></div><div className="mock-main"><div className="mock-top"><span>Maintenance Overview</span><b>⌕　☷　●</b></div><div className="mock-stats"><div><small>ACTIVE VESSELS</small><b>12</b><em>↗ 3 this month</em></div><div><small>OPEN WORK ORDERS</small><b>08</b><em>Across 4 vessels</em></div><div><small>ON-TIME RATE</small><b>94<span>%</span></b><em>+2.4% this quarter</em></div></div><div className="mock-panel"><div className="panel-title">Maintenance schedule <small>View all　↗</small></div><div className="schedule-line"><b>MV Nusantara</b><span className="schedule-bar bar-red" /><small>Engine inspection</small><i>Today</i></div><div className="schedule-line"><b>MV Samudra</b><span className="schedule-bar bar-blue" /><small>Hull maintenance</small><i>12 Nov</i></div><div className="schedule-line"><b>MV Cakra</b><span className="schedule-bar bar-green" /><small>Safety equipment</small><i>16 Nov</i></div></div></div></div>;
  }
  if (theme === "erp") {
    return <div className="mock-window erp-window"><div className="erp-header"><b>Atlas <span>REPORTING</span></b><small>FY 2025　⌄　　●</small></div><div className="erp-title">Business overview <small>Last updated 9:41 AM</small></div><div className="erp-metrics"><div><small>TOTAL REVENUE</small><b>Rp 8.42<span>B</span></b><em>↗ 12.8%</em></div><div><small>NET PROFIT</small><b>Rp 1.26<span>B</span></b><em>↗ 8.4%</em></div><div><small>ORDERS</small><b>2,481</b><em>↗ 4.3%</em></div></div><div className="erp-chart"><div className="chart-label">Revenue performance <small>Monthly · 2025</small></div><div className="chart-bars">{[39,55,47,68,57,76,64,88,70,96,81,100].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div><div className="chart-axis"><span>JAN</span><span>MAR</span><span>MAY</span><span>JUL</span><span>SEP</span><span>DEC</span></div></div></div>;
  }
  if (theme === "meeting") {
    return <div className="meeting-art"><div className="meeting-calendar"><span>THURSDAY · NOVEMBER 06</span><b>Weekly team<br />stand-up</b><small>09:30 — 10:00 AM</small><div className="attendee-row"><i>NR</i><i>SA</i><i>DW</i><span>+ 8 attending</span></div><div className="meeting-check"><span>✓</span> Attendance recorded <b>11 / 12</b></div></div><span className="meeting-label">MEETINGS / WEEK 45</span></div>;
  }
  return <div className="research-art"><div className="route-graph"><svg viewBox="0 0 500 300" role="img" aria-label="Abstract vehicle route optimization diagram"><path d="M86 144 L172 74 L286 104 L398 61 M86 144 L158 231 L286 104 L356 220 L398 61 M172 74 L158 231 M286 104 L398 61" /><circle cx="86" cy="144" r="10" /><circle cx="172" cy="74" r="7" /><circle cx="286" cy="104" r="7" /><circle cx="398" cy="61" r="10" /><circle cx="158" cy="231" r="7" /><circle cx="356" cy="220" r="7" /></svg><div className="graph-label">ROUTE 04 — GENERATION 128</div><div className="graph-data"><span>BEST DISTANCE <b>184.6 km</b></span><span>VEHICLES <b>04</b></span><span>IMPROVEMENT <b>−18.2%</b></span></div></div></div>;
}