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
    items: [{ label: "Selected implementation stories and outcomes." }]
  },
  {
    title: "Project Lens",
    items: [{ label: "Automation quality" }, { label: "Pipeline clarity" }, { label: "Reliable reporting" }]
  },
  {
    title: "Navigate",
    items: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" }
    ]
  }
];

export default function ProjectsPage() {
  return (
    <SiteChrome footerColumns={footerColumns}>
      <section className="page-hero reveal">
        <p className="eyebrow">Selected Work</p>
        <h1>Projects centered on automation, customer operations, and scalable CRM architecture.</h1>
        <p>Examples of how I approach implementation with performance, adoption, and data quality in mind.</p>
      </section>

      <section className="projects-grid reveal">
        <article className="project-card project-card--wide">
          <div>
            <p className="project-label">Project 01</p>
            <h2>Sales Pipeline Automation</h2>
            <p>
              Designed an automated sales workflow that routed leads, updated deal stages, and triggered follow-up
              tasks based on customer behavior.
            </p>
          </div>
          <ul className="project-tags">
            <li>Workflow Automation</li>
            <li>Lead Management</li>
            <li>Pipeline Visibility</li>
          </ul>
        </article>

        <article className="project-card">
          <p className="project-label">Project 02</p>
          <h2>CRM + Support Integration</h2>
          <p>
            Connected a CRM platform with a support ticketing system, enabling real-time customer context for support
            agents.
          </p>
          <ul className="project-tags">
            <li>System Integration</li>
            <li>API Development</li>
            <li>Data Sync</li>
          </ul>
        </article>

        <article className="project-card">
          <p className="project-label">Project 03</p>
          <h2>Customer Data Architecture</h2>
          <p>
            Restructured customer data model to eliminate duplicates, improve segmentation accuracy, and enable
            targeted marketing campaigns.
          </p>
          <ul className="project-tags">
            <li>Data Modeling</li>
            <li>ETL</li>
            <li>Segmentation</li>
          </ul>
        </article>

        <article className="project-card">
          <p className="project-label">Project 04</p>
          <h2>Team Adoption & Training</h2>
          <p>
            Led CRM training rollout for sales and support teams, designed workflows to match their processes, and
            measured adoption metrics.
          </p>
          <ul className="project-tags">
            <li>Change Management</li>
            <li>Training</li>
            <li>User Adoption</li>
          </ul>
        </article>
      </section>
    </SiteChrome>
  );
}
