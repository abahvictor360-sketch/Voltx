"use client";

import { useMemo, useState } from "react";
import { MapPin, Search, Zap } from "lucide-react";

const stations = [
  { name: "VoltX Hub Downtown", city: "London", kw: 350, stalls: 16, open: "24/7" },
  { name: "Canary Wharf Supercharge", city: "London", kw: 250, stalls: 10, open: "24/7" },
  { name: "Alexanderplatz Station", city: "Berlin", kw: 350, stalls: 12, open: "24/7" },
  { name: "Champs-Élysées Garage", city: "Paris", kw: 150, stalls: 8, open: "6am–12am" },
  { name: "Brooklyn Navy Yard", city: "New York", kw: 350, stalls: 20, open: "24/7" },
  { name: "Lekki Phase 1 Hub", city: "Lagos", kw: 250, stalls: 8, open: "24/7" },
  { name: "Victoria Island Plaza", city: "Lagos", kw: 150, stalls: 6, open: "6am–11pm" },
  { name: "Marina Bay Charging", city: "Singapore", kw: 350, stalls: 14, open: "24/7" },
  { name: "Dubai Mall Parking", city: "Dubai", kw: 250, stalls: 18, open: "24/7" },
];

export default function StationFinder() {
  const [q, setQ] = useState("");
  const [ultra, setUltra] = useState(false);
  const results = useMemo(
    () =>
      stations.filter(
        (s) =>
          (s.city + s.name).toLowerCase().includes(q.toLowerCase()) && (!ultra || s.kw >= 350),
      ),
    [q, ultra],
  );

  return (
    <div className="grid overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm lg:grid-cols-[1fr_1.4fr]">
      <div className="p-6">
        <div className="flex items-center gap-2 rounded-lg border border-black/10 px-3 focus-within:border-volt-500">
          <Search className="h-4 w-4 text-muted" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search city or station" aria-label="Search stations" className="w-full py-3 text-sm outline-none" />
        </div>
        <label className="mt-4 flex items-center gap-2 text-sm">
          <input type="checkbox" checked={ultra} onChange={(e) => setUltra(e.target.checked)} className="accent-volt-500" />
          Ultra-fast only (350 kW)
        </label>
        <ul className="mt-5 max-h-80 space-y-3 overflow-y-auto pr-1">
          {results.map((s) => (
            <li key={s.name} className="rounded-xl border border-black/5 p-4 hover:border-volt-300">
              <p className="font-semibold">{s.name}</p>
              <p className="mt-1 flex items-center gap-1 text-xs text-muted"><MapPin className="h-3 w-3" /> {s.city} · {s.open}</p>
              <p className="mt-2 flex items-center gap-1 text-xs font-medium text-volt-700"><Zap className="h-3 w-3" /> {s.kw} kW · {s.stalls} stalls</p>
            </li>
          ))}
          {results.length === 0 && <li className="text-sm text-muted">No stations match your search.</li>}
        </ul>
      </div>
      <div className="relative min-h-80 bg-[#e9efe6]">
        <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" aria-hidden>
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0v40" fill="none" stroke="#d3dccf" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <path d="M0 120 C 200 80, 300 260, 700 200" stroke="#fff" strokeWidth="14" fill="none" />
          <path d="M150 0 C 180 200, 420 250, 380 600" stroke="#fff" strokeWidth="10" fill="none" />
        </svg>
        {results.slice(0, 9).map((s, i) => (
          <span
            key={s.name}
            title={s.name}
            className="absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-volt-400 shadow-lg ring-4 ring-white"
            style={{ left: `${12 + ((i * 37) % 78)}%`, top: `${15 + ((i * 53) % 70)}%` }}
          >
            <Zap className="h-4 w-4" />
          </span>
        ))}
      </div>
    </div>
  );
}
