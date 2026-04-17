import Link from "next/link";
import SiteChrome from "../components/SiteChrome";

interface FooterItem {
  label: string;
  href?: string;
}

interface FooterColumn {
  title: string;
  items: FooterItem[];
}

const footerColumns: FooterColumn[] = [
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
            <Link className="button button--secondary" href="/contact">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="section story reveal">
        <p className="eyebrow">What I Build</p>
        <h2>CRM systems that scale operations, not just data.</h2>
      </section>
    </SiteChrome>
  );
}
