import SiteChrome from "../../components/SiteChrome";

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
    items: [{ label: "Focused on systems, automation, and growth." }]
  },
  {
    title: "Expertise",
    items: [{ label: "Revenue operations" }, { label: "Workflow architecture" }, { label: "Cross-team adoption" }]
  },
  {
    title: "Explore",
    items: [
      { label: "Home", href: "/" },
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "/contact" }
    ]
  }
];

export default function AboutPage() {
  return (
    <SiteChrome footerColumns={footerColumns}>
      <section className="page-hero reveal">
        <p className="eyebrow">About Me</p>
        <h1>I turn CRM platforms into clear systems for teams, data, and customer growth.</h1>
        <p>My focus is on building CRM environments that are clean, scalable, and easy for real teams to adopt.</p>
      </section>

      <section className="section split-section reveal">
        <div className="profile-card">
          <h2>Core Strengths</h2>
          <ul className="stack-list">
            <li>CRM workflow design</li>
            <li>Lead lifecycle automation</li>
            <li>Customer data architecture</li>
            <li>Sales and support alignment</li>
            <li>Third-party integrations</li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Approach</p>
          <h2>Technology should reduce friction, not add to it.</h2>
          <p>
            I approach CRM work from both a technical and operational angle. That means every automation, form,
            pipeline, and integration is designed to support the people using it every day.
          </p>
          <p>
            Whether the goal is better lead conversion, cleaner reporting, or more reliable follow-up, I build systems
            that your team will actually use and trust.
          </p>
        </div>
      </section>
    </SiteChrome>
  );
}
