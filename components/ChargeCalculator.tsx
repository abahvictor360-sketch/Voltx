"use client";

import { useState } from "react";

export default function ChargeCalculator() {
  const [km, setKm] = useState(40);
  const [price, setPrice] = useState(0.18);
  const [fuel, setFuel] = useState(1.7);
  const yearlyKm = km * 365;
  const ev = (yearlyKm / 100) * 15 * price;
  const ice = (yearlyKm / 100) * 7.5 * fuel;
  const fmt = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`;

  return (
    <div className="grid gap-8 rounded-3xl border border-black/5 bg-white p-8 shadow-sm lg:grid-cols-2">
      <div className="space-y-6">
        <label className="block">
          <span className="flex justify-between text-sm font-medium">Daily driving <span>{km} km</span></span>
          <input type="range" min={5} max={200} value={km} onChange={(e) => setKm(+e.target.value)} className="mt-3 w-full accent-volt-500" />
        </label>
        <label className="block">
          <span className="flex justify-between text-sm font-medium">Electricity price <span>${price.toFixed(2)}/kWh</span></span>
          <input type="range" min={0.05} max={0.5} step={0.01} value={price} onChange={(e) => setPrice(+e.target.value)} className="mt-3 w-full accent-volt-500" />
        </label>
        <label className="block">
          <span className="flex justify-between text-sm font-medium">Fuel price <span>${fuel.toFixed(2)}/L</span></span>
          <input type="range" min={0.8} max={3} step={0.05} value={fuel} onChange={(e) => setFuel(+e.target.value)} className="mt-3 w-full accent-volt-500" />
        </label>
        <p className="text-xs text-muted">Assumes 15 kWh/100 km for VoltX and 7.5 L/100 km for a comparable petrol car.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
        <div className="rounded-2xl bg-volt-50 p-5">
          <p className="text-xs text-muted">VoltX per year</p>
          <p className="mt-2 text-2xl font-bold">{fmt(ev)}</p>
        </div>
        <div className="rounded-2xl bg-[#f6f7f6] p-5">
          <p className="text-xs text-muted">Petrol per year</p>
          <p className="mt-2 text-2xl font-bold">{fmt(ice)}</p>
        </div>
        <div className="rounded-2xl bg-ink p-5 text-white">
          <p className="text-xs text-white/60">You save</p>
          <p className="mt-2 text-2xl font-bold text-volt-300">{fmt(Math.max(0, ice - ev))}</p>
        </div>
      </div>
    </div>
  );
}
