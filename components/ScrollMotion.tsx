"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Elements that get a scroll-reveal automatically, in document order.
const TARGETS = [
  ".grid > *",
  "ol > li",
  "h2",
  ".eyebrow",
  "h2 + p",
  "table",
  "form",
  "[data-reveal-me]",
].join(",");

export default function ScrollMotion() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);

  // Scroll progress bar
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  // Reveal-on-scroll
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let observer: IntersectionObserver | undefined;
    let pending: HTMLElement[] = [];
    let raf = 0;
    // Safety net for very fast scrolling/jumps: reveal anything on or above the screen
    const sweep = () => {
      raf = 0;
      pending = pending.filter((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.95) {
          el.dataset.in = "";
          observer?.unobserve(el);
          return false;
        }
        return true;
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(sweep);
    };

    const frame = requestAnimationFrame(() => {
      const main = document.querySelector("main");
      if (!main) return;
      const fold = window.innerHeight * 0.92;
      const marked: HTMLElement[] = [];

      main.querySelectorAll<HTMLElement>(TARGETS).forEach((el) => {
        if (el.dataset.reveal || el.closest("[data-no-reveal]")) return;
        if (el.parentElement?.closest("[data-reveal]")) return; // parent already animates
        if (el.getBoundingClientRect().top < fold) return; // already on screen: don't flash it
        const isMedia = !!el.querySelector(":scope > img, :scope > video");
        el.dataset.reveal = isMedia ? "zoom" : "up";
        marked.push(el);
      });

      // Stagger siblings that reveal together (cards in a grid, list items…)
      marked.forEach((el) => {
        const siblings = el.parentElement ? Array.from(el.parentElement.children) : [];
        const idx = siblings.filter((s) => (s as HTMLElement).dataset.reveal).indexOf(el);
        el.style.transitionDelay = `${Math.min(Math.max(idx, 0), 6) * 90}ms`;
      });

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            // Reveal when visible, or if the user already scrolled past it quickly
            if (e.isIntersecting || e.boundingClientRect.top < 0) {
              (e.target as HTMLElement).dataset.in = "";
              observer?.unobserve(e.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
      );
      marked.forEach((el) => observer!.observe(el));
      pending = marked;
      window.addEventListener("scroll", onScroll, { passive: true });
    });

    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, [pathname]);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[3px]" aria-hidden>
      <div
        className="h-full origin-left bg-gradient-to-r from-volt-300 to-volt-500"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
