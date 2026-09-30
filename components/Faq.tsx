"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-black/10 rounded-2xl border border-black/5 bg-white">
      {items.map((item, i) => (
        <div key={item.q}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="flex w-full items-center justify-between gap-4 p-6 text-left font-semibold"
          >
            {item.q}
            <ChevronDown className={`h-5 w-5 shrink-0 text-volt-600 transition ${open === i ? "rotate-180" : ""}`} />
          </button>
          {open === i && <p className="-mt-2 px-6 pb-6 text-sm leading-relaxed text-muted">{item.a}</p>}
        </div>
      ))}
    </div>
  );
}
