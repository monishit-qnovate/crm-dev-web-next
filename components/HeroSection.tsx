import Link from "next/link";

export default function HeroSection() {
  return (
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
  );
}
