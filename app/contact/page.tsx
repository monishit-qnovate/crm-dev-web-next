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
    items: [{ label: "Ready for personal branding and lead generation." }]
  },
  {
    title: "Reach Out",
    items: [{ label: "Email inquiries" }, { label: "CRM consulting" }, { label: "Project discovery" }]
  },
  {
    title: "Browse",
    items: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Projects", href: "/projects" }
    ]
  }
];

export default function ContactPage() {
  return (
    <SiteChrome footerColumns={footerColumns}>
      <section className="page-hero reveal">
        <p className="eyebrow">Contact</p>
        <h1>Let&apos;s build a CRM setup that feels faster, clearer, and easier to scale.</h1>
        <p>
          If you want help with CRM customization, workflow automation, or integrations, this portfolio is ready to
          introduce your work professionally.
        </p>
      </section>

      <section className="section contact-layout reveal">
        <div className="contact-card">
          <h2>Start a Conversation</h2>
          <p>Use your real contact details here when you are ready to publish.</p>
          <div className="contact-lines">
            <p>
              <strong>Email</strong> hello@yourcrmportfolio.com
            </p>
            <p>
              <strong>Phone</strong> +91 00000 00000
            </p>
            <p>
              <strong>Location</strong> India
            </p>
          </div>
        </div>

        <div className="contact-card">
          <h2>Available For</h2>
          <ul>
            <li>CRM customization projects</li>
            <li>Workflow and automation design</li>
            <li>Data architecture consulting</li>
            <li>Integration strategy</li>
            <li>Full-cycle implementation</li>
          </ul>
        </div>
      </section>
    </SiteChrome>
  );
}
