import SiteChrome from "../../components/SiteChrome";

const footerColumns = [
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
          <p>Connected customer support activity into CRM records to give teams a full relationship view.</p>
        </article>

        <article className="project-card">
          <p className="project-label">Project 03</p>
          <h2>Lifecycle Dashboard Suite</h2>
          <p>Built custom dashboards for acquisition, conversion, retention, and service health reporting.</p>
        </article>

        <article className="project-card">
          <p className="project-label">Project 04</p>
          <h2>Data Cleanup Framework</h2>
          <p>Created validation and duplicate-control systems to improve reporting reliability and user trust.</p>
        </article>
      </section>
    </SiteChrome>
  );
}
