"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Car, Leaf, Play, User, X, Zap } from "lucide-react";
import Button from "./Button";

const rail = [
  { icon: Zap, href: "/charging", label: "Charging" },
  { icon: Car, href: "/models", label: "Models" },
  { icon: Leaf, href: "/sustainability", label: "Sustainability" },
  { icon: User, href: "/support", label: "Account & Support" },
];

export default function Hero() {
  const [video, setVideo] = useState(false);
  const mediaRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Parallax: video drifts slower than the page, copy lifts and fades out
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = Math.min(window.scrollY, 900);
      if (mediaRef.current) mediaRef.current.style.transform = `translate3d(0, ${y * 0.3}px, 0) scale(${1 + y * 0.0002})`;
      if (textRef.current) {
        textRef.current.style.transform = `translate3d(0, ${y * -0.12}px, 0)`;
        textRef.current.style.opacity = String(Math.max(0, 1 - y / 650));
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section data-no-reveal className="relative overflow-hidden bg-gradient-to-b from-[#eef1f3] to-white">
      {/* Hero video */}
      <div className="animate-slide-in-right relative h-72 w-full sm:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[64%]">
        <div ref={mediaRef} className="h-full w-full will-change-transform">
        <video
          src="/images/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="VoltX electric sedan driving on the road"
          className="hero-media h-full w-full object-cover"
        />
        </div>
      </div>

      <div className="container-x relative">
        <div ref={textRef} className="max-w-lg py-12 will-change-transform lg:py-36">
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            <span className="block animate-fade-up delay-1">Drive the Future.</span>
            <span className="block animate-fade-up delay-2 text-volt-500">Today.</span>
          </h1>
          <p className="mt-6 max-w-sm animate-fade-up delay-3 text-muted">
            VoltX delivers intelligent performance, zero emissions, and a smarter way to go.
          </p>
          <div className="mt-8 flex animate-fade-up delay-4 flex-wrap gap-3">
            <Button href="/models">Explore Models</Button>
            <Button href="/test-drive" variant="outline" arrow={false}>
              Book a Test Drive
            </Button>
          </div>
          <button onClick={() => setVideo(true)} className="group mt-8 flex animate-fade-up delay-5 items-center gap-3 text-sm font-medium">
            <span className="animate-pulse-ring flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-white shadow-sm transition group-hover:scale-110">
              <Play className="h-4 w-4 fill-ink" />
            </span>
            Watch Full Video
          </button>
        </div>
      </div>

      {/* Quick-access rail */}
      <nav
        aria-label="Quick links"
        className="animate-float absolute right-6 top-1/2 z-10 hidden flex-col gap-1 rounded-full bg-white p-2 shadow-lg xl:flex"
      >
        {rail.map(({ icon: Icon, href, label }) => (
          <Link key={href} href={href} aria-label={label} title={label} className="flex h-10 w-10 items-center justify-center rounded-full text-ink/70 hover:bg-volt-100 hover:text-volt-700">
            <Icon className="h-4 w-4" />
          </Link>
        ))}
      </nav>

      {video && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setVideo(false)}
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setVideo(false)} aria-label="Close video" className="absolute -top-12 right-0 rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
              <X className="h-5 w-5" />
            </button>
            <video src="/images/hero.mp4" autoPlay controls loop playsInline className="w-full rounded-2xl bg-black" />
            <Link href="/models" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-volt-300">
              Discover the lineup <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
