"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ModelCard from "./ModelCard";
import { models } from "@/lib/data";

export default function ModelCarousel() {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 320) + 24), behavior: "smooth" });
  };

  return (
    <div className="relative">
      <button
        onClick={() => scroll(-1)}
        aria-label="Previous models"
        className="absolute -left-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-volt-300 bg-white text-volt-600 shadow-sm hover:bg-volt-50 md:flex xl:-left-14"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <div ref={track} className="no-scrollbar relative flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 pt-2">
        {models.map((m) => (
          <div key={m.slug} data-card className="w-[85%] shrink-0 snap-start sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
            <ModelCard model={m} featured={m.popular} />
          </div>
        ))}
      </div>
      <button
        onClick={() => scroll(1)}
        aria-label="Next models"
        className="absolute -right-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-volt-300 bg-white text-volt-600 shadow-sm hover:bg-volt-50 md:flex xl:-right-14"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
