import SiteChrome from "../../components/SiteChrome";

const footerColumns = [
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

        <form className="contact-form">
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="your@email.com" />
          </label>
          <label>
            Project Type
            <input type="text" placeholder="CRM automation, integration, setup..." />
          </label>
          <label>
            Message
            <textarea rows="5" placeholder="Tell me about your CRM goals" />
          </label>
          <button className="button button--primary" type="button">
            Send Inquiry
          </button>
        </form>
      </section>
    </SiteChrome>
  );
}
