"use client";

import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/data";

const PER_PAGE = 3;

export default function Testimonials() {
  const pages = Math.ceil(testimonials.length / PER_PAGE);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setPage((p) => (p + 1) % pages), 7000);
    return () => clearInterval(t);
  }, [pages]);

  const items = testimonials.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <div>
      <div key={page} className="grid animate-fade-up gap-6 md:grid-cols-3">
        {items.map((t) => (
          <figure key={t.name} className="flex flex-col justify-between rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
            <div className="flex gap-3">
              <Quote className="h-6 w-6 shrink-0 fill-volt-400 text-volt-400" />
              <blockquote className="text-sm leading-relaxed text-ink/80">{t.quote}</blockquote>
            </div>
            <figcaption className="mt-6 flex items-end justify-between">
              <div className="pl-9">
                <p className="text-sm font-semibold">— {t.name}</p>
                <div className="mt-2 flex gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-volt-500 text-volt-500" />
                  ))}
                </div>
              </div>
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-volt-200 to-volt-400 text-sm font-bold">
                {t.initials}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-8 flex justify-center gap-2">
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            aria-label={`Show testimonials page ${i + 1}`}
            className={`h-2 rounded-full transition-all ${i === page ? "w-6 bg-volt-500" : "w-2 bg-black/15"}`}
          />
        ))}
      </div>
    </div>
  );
}
