import Link from "next/link";
import SiteChrome from "../components/SiteChrome";

const footerColumns = [
  {
    title: "CRM Developer",
    items: [
      {
        label:
          "Modern CRM development portfolio with editorial styling, dark themes, and a stronger screen presence."
      }
    ]
  },
  {
    title: "Pages",
    items: [
      { label: "About", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "/contact" }
    ]
  },
  {
    title: "Focus",
    items: [{ label: "CRM customization" }, { label: "Automation workflows" }, { label: "Integration strategy" }]
  }
];

export default function HomePage() {
  return (
    <SiteChrome footerColumns={footerColumns}>
      <section className="hero reveal">
        <aside className="hero-rail">
          <span>Follow Us</span>
          <div className="hero-socials">
            <Link href="/contact">In</Link>
            <Link href="/contact">Tw</Link>
            <Link href="/contact">Mail</Link>
          </div>
        </aside>

        <div className="hero-copy">
          <p className="eyebrow">CRM Development / Automation / Integrations</p>
          <h1>Build CRM systems that turn customer data into momentum.</h1>
          <p className="hero-text">
            I design CRM experiences that connect sales, service, and marketing into one modern operating system for
            growth.
          </p>
          <div className="hero-actions">
            <Link className="button button--primary" href="/projects">
              View Projects
            </Link>
            <Link className="button button--ghost" href="/contact">
              Let&apos;s Work Together
            </Link>
          </div>
          <ul className="hero-metrics">
            <li>
              <strong>30+</strong>
              <span>CRM workflows delivered</span>
            </li>
            <li>
              <strong>99.9%</strong>
              <span>process reliability focus</span>
            </li>
            <li>
              <strong>24/7</strong>
              <span>automation mindset</span>
            </li>
          </ul>
        </div>

        <aside className="hero-index">
          <strong>Start</strong>
          <ul>
            <li>01</li>
            <li>02</li>
            <li>03</li>
          </ul>
        </aside>
      </section>

      <section className="story-stack">
        <article className="story-row reveal">
          <div className="story-copy">
            <span className="story-number">01</span>
            <p className="eyebrow">CRM Foundations</p>
            <h2>Design pipelines your team can actually move through.</h2>
            <p>
              I build CRM structures around real customer stages, team handoffs, and reporting needs so the platform
              feels clear from day one.
            </p>
            <Link className="story-link" href="/about">
              Learn more
            </Link>
          </div>
          <div className="story-visual story-visual--crm" />
        </article>

        <article className="story-row story-row--reverse reveal">
          <div className="story-copy">
            <span className="story-number">02</span>
            <p className="eyebrow">Automation Systems</p>
            <h2>Remove manual work with smarter routing and follow-up.</h2>
            <p>
              From lead assignment to lifecycle triggers, I create automation flows that keep sales and support moving
              without adding noise.
            </p>
            <Link className="story-link" href="/projects">
              See projects
            </Link>
          </div>
          <div className="story-visual story-visual--automation" />
        </article>

        <article className="story-row reveal">
          <div className="story-copy">
            <span className="story-number">03</span>
            <p className="eyebrow">Reporting & Growth</p>
            <h2>Understand customer movement with clean reporting layers.</h2>
            <p>
              I turn CRM data into dashboards, service visibility, and decision-ready metrics that support better
              retention and revenue planning.
            </p>
            <Link className="story-link" href="/contact">
              Start a conversation
            </Link>
          </div>
          <div className="story-visual story-visual--analytics" />
        </article>
      </section>
    </SiteChrome>
  );
}
