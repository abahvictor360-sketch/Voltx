"use client";

import Link from "next/link";
import { useState } from "react";
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

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#eef1f3] to-white">
      {/* Hero GIF */}
      <div className="relative h-72 w-full sm:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[64%]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/hero.gif" alt="VoltX electric car at a charging station" className="h-full w-full object-cover" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-[#eef1f3] via-[#eef1f3]/40 to-transparent lg:block lg:w-1/2" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="container-x relative">
        <div className="max-w-lg py-12 lg:py-36 animate-fade-up">
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Drive the Future.
            <br />
            <span className="text-volt-500">Today.</span>
          </h1>
          <p className="mt-6 max-w-sm text-muted">
            VoltX delivers intelligent performance, zero emissions, and a smarter way to go.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/models">Explore Models</Button>
            <Button href="/test-drive" variant="outline" arrow={false}>
              Book a Test Drive
            </Button>
          </div>
          <button onClick={() => setVideo(true)} className="mt-8 flex items-center gap-3 text-sm font-medium">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-white shadow-sm">
              <Play className="h-4 w-4 fill-ink" />
            </span>
            Watch Full Video
          </button>
        </div>
      </div>

      {/* Quick-access rail */}
      <nav
        aria-label="Quick links"
        className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-1 rounded-full bg-white p-2 shadow-lg xl:flex"
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/hero.gif" alt="VoltX film" className="w-full rounded-2xl" />
            <Link href="/models" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-volt-300">
              Discover the lineup <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
