import { Manrope, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: "CRM Developer Portfolio",
  description: "Modern CRM developer portfolio built with Next.js.",
  openGraph: {
    title: "CRM Developer Portfolio",
    description: "Modern CRM developer portfolio built with Next.js.",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>{children}</body>
    </html>
  );
}
