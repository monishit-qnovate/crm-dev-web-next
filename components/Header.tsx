"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" }
];

export default function Header() {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  return (
    <header className="topbar">
      <Link className="brand" href="/">
        <span className="brand-mark">C</span>
        <span>
          <strong>CRM Developer</strong>
          <small>Portfolio</small>
        </span>
      </Link>

      <button
        className="nav-toggle"
        type="button"
        aria-expanded={navOpen}
        aria-label="Toggle navigation"
        onClick={() => setNavOpen((open) => !open)}
      >
        <span />
        <span />
      </button>

      <nav className={`nav${navOpen ? " open" : ""}`}>
        {navItems.map((item) => (
          <Link key={item.href} className={pathname === item.href ? "active" : ""} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
