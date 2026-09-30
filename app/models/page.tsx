import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ModelCard from "@/components/ModelCard";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import { formatPrice, models } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = { title: "Models" };

const rows: { label: string; get: (m: (typeof models)[number]) => string }[] = [
  { label: "Body type", get: (m) => m.type },
  { label: "Starting price", get: (m) => formatPrice(m.price) },
  { label: "Range (WLTP)", get: (m) => `${m.range} km` },
  { label: "0–100 km/h", get: (m) => `${m.accel}s` },
  { label: "Top speed", get: (m) => `${m.topSpeed} km/h` },
  { label: "Battery", get: (m) => `${m.battery} kWh` },
  { label: "Fast charge", get: (m) => m.charge },
  { label: "Drive", get: (m) => m.drive },
  { label: "Seats", get: (m) => `${m.seats}` },
];

export default function ModelsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Lineup"
        title="Built for Every Journey"
        text="From the city-smart VoltX S to the go-anywhere VoltX T, there's an electric VoltX for every road and every lifestyle."
        image="/images/sedan-teal.jpg"
      />
      <section className="container-x py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {models.map((m) => (
            <ModelCard key={m.slug} model={m} featured={m.popular} />
          ))}
        </div>
      </section>

      <section id="compare" className="container-x scroll-mt-24 pb-10">
        <SectionHeading eyebrow="Compare" title="Find your perfect VoltX" text="All specifications are for the long-range configuration of each model." />
        <div className="mt-10 overflow-x-auto rounded-2xl border border-black/5">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-[#f6f7f6]">
              <tr>
                <th className="p-4 font-semibold text-muted">Specification</th>
                {models.map((m) => (
                  <th key={m.slug} className="p-4 font-bold">
                    <Link href={`/models/${m.slug}`} className="hover:text-volt-600">{m.name}</Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label} className="border-t border-black/5">
                  <td className="p-4 text-muted">{r.label}</td>
                  {models.map((m) => (
                    <td key={m.slug} className="p-4 font-medium">{r.get(m)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
