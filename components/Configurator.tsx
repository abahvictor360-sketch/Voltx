"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { formatPrice, type Model } from "@/lib/data";

const colors = [
  { name: "Glacier White", hex: "#f2f3f5", add: 0 },
  { name: "Midnight Black", hex: "#111213", add: 1200 },
  { name: "Arctic Teal", hex: "#2f6f7e", add: 1500 },
  { name: "Volt Lime", hex: "#9bd93a", add: 2000 },
];

const trims = [
  { name: "Standard Range", add: 0, note: "Great for daily driving" },
  { name: "Long Range", add: 6000, note: "+25% range" },
  { name: "Performance", add: 12000, note: "Quickest acceleration" },
];

export default function Configurator({ model }: { model: Model }) {
  const [active, setActive] = useState(0);
  const [color, setColor] = useState(0);
  const [trim, setTrim] = useState(1);
  const total = model.price + colors[color].add + trims[trim].add;

  return (
    <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
      <div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-[#f6f7f6]">
          <Image src={model.gallery[active]} alt={model.name} fill priority sizes="(max-width:1024px) 100vw, 60vw" className="object-cover" />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-4">
          {model.gallery.map((g, i) => (
            <button
              key={g}
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1}`}
              className={`relative aspect-[16/10] overflow-hidden rounded-xl border-2 ${i === active ? "border-volt-400" : "border-transparent opacity-70 hover:opacity-100"}`}
            >
              <Image src={g} alt="" fill sizes="20vw" className="object-cover" />
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-black/5 bg-white p-7 shadow-sm">
        <p className="eyebrow">{model.type}</p>
        <h1 className="mt-2 text-4xl font-bold">{model.name}</h1>
        <p className="mt-1 text-muted">{model.tagline}</p>

        <h2 className="mt-8 text-sm font-semibold">Trim</h2>
        <div className="mt-3 space-y-2">
          {trims.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setTrim(i)}
              className={`flex w-full items-center justify-between rounded-xl border p-4 text-left text-sm transition ${i === trim ? "border-volt-500 bg-volt-50" : "border-black/10 hover:border-black/30"}`}
            >
              <span>
                <span className="block font-semibold">{t.name}</span>
                <span className="text-xs text-muted">{t.note}</span>
              </span>
              <span className="font-medium">{t.add ? `+${formatPrice(t.add)}` : "Included"}</span>
            </button>
          ))}
        </div>

        <h2 className="mt-6 text-sm font-semibold">
          Paint <span className="font-normal text-muted">— {colors[color].name}</span>
        </h2>
        <div className="mt-3 flex gap-3">
          {colors.map((c, i) => (
            <button
              key={c.name}
              onClick={() => setColor(i)}
              aria-label={c.name}
              title={c.name}
              style={{ background: c.hex }}
              className={`flex h-10 w-10 items-center justify-center rounded-full border border-black/10 ring-offset-2 ${i === color ? "ring-2 ring-volt-500" : ""}`}
            >
              {i === color && <Check className={`h-4 w-4 ${i === 1 || i === 2 ? "text-white" : "text-ink"}`} />}
            </button>
          ))}
        </div>

        <div className="mt-8 flex items-end justify-between border-t border-black/5 pt-6">
          <div>
            <p className="text-xs text-muted">Estimated price</p>
            <p className="text-3xl font-bold">{formatPrice(total)}</p>
          </div>
          <p className="text-right text-xs text-muted">Before incentives
            <br />& delivery fees</p>
        </div>
        <Link
          href={`/test-drive?model=${model.slug}`}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-volt-400 py-3.5 text-sm font-semibold hover:bg-volt-500"
        >
          Book a Test Drive <ArrowRight className="h-4 w-4" />
        </Link>
        <Link href="/contact" className="mt-3 flex w-full items-center justify-center rounded-lg border border-black/15 py-3.5 text-sm font-semibold hover:border-black/40">
          Talk to a Specialist
        </Link>
      </div>
    </div>
  );
}
