"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function RevealEffects() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".reveal").forEach((element) => {
        element.classList.add("is-visible");
      });
      return undefined;
    }

    const particleLayer = document.querySelector(".particle-layer");
    if (particleLayer && particleLayer.childElementCount === 0) {
      const particleCount = window.innerWidth > 1200 ? 34 : 22;

      for (let index = 0; index < particleCount; index += 1) {
        const particle = document.createElement("span");
        const size = Math.random() * 5 + 3;
        const delay = Math.random() * -18;
        const duration = Math.random() * 12 + 16;

        particle.className = `particle${index % 3 === 0 ? " particle--soft" : ""}`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.bottom = `${Math.random() * 18 - 12}vh`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        particleLayer.appendChild(particle);
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
