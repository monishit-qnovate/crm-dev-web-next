import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ParticleBackground from "./ParticleBackground";
import RevealEffects from "./RevealEffects";
import { FooterColumn } from "./types";

type SiteChromeProps = {
  children: ReactNode;
  footerColumns: FooterColumn[];
};

export default function SiteChrome({ children, footerColumns }: SiteChromeProps) {
  return (
    <>
      <ParticleBackground />
      <RevealEffects />
      <div className="site-shell">
        <Header />
        <main>{children}</main>
        <Footer columns={footerColumns} />
      </div>
    </>
  );
}
