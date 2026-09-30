import type { Metadata } from "next";
import { Globe, Leaf, Recycle, RefreshCw, Sun, Trees } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FeatureSplit from "@/components/FeatureSplit";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = { title: "Sustainability" };

const impact = [
  { icon: Leaf, value: "0", label: "Tailpipe Emissions" },
  { icon: Trees, value: "2.4M+", label: "Trees Planted" },
  { icon: RefreshCw, value: "100%", label: "Renewable Energy in Operations" },
  { icon: Globe, value: "45+", label: "Countries" },
];

const goals = [
  { year: "2026", text: "100% renewable electricity across all factories and offices." },
  { year: "2028", text: "95% of battery materials recovered through closed-loop recycling." },
  { year: "2030", text: "Carbon-neutral supply chain for every VoltX model." },
  { year: "2035", text: "Net-zero across the full vehicle lifecycle." },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Impact"
        title="Driving Change for a Better Tomorrow"
        text="Zero emissions is where we start, not where we stop. We're rethinking how cars are made, powered and recycled."
        image="/images/solar-charging.jpg"
      />
      <section className="bg-gradient-to-r from-volt-50 via-volt-100/60 to-volt-50">
        <div className="container-x grid grid-cols-2 gap-10 py-16 md:grid-cols-4">
          {impact.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <Icon className="mx-auto h-9 w-9 text-volt-500" strokeWidth={1.4} />
              <p className="mt-4 text-4xl font-bold">{value}</p>
              <p className="mt-1 text-sm text-muted">{label}</p>
            </div>
          ))}
        </div>
      </section>
      <FeatureSplit
        eyebrow="Clean Energy"
        title="Charged by the sun"
        text="Our charging hubs are topped with solar canopies and paired with battery storage, so thousands of kilometres every day are powered by clean energy."
        points={["Solar canopies at 1,200+ VoltX Hubs", "Green-energy tariffs for home charging", "Grid-balancing with vehicle-to-grid pilots"]}
        image="/images/solar-charging.jpg"
      />
      <FeatureSplit
        eyebrow="Circular Design"
        title="Built to be reborn"
        text="From recycled aluminium bodies to vegan interiors made from plant fibres and ocean plastics, we design every VoltX with its second life in mind."
        points={["30% recycled aluminium in body structures", "Vegan, animal-free interior materials", "Battery second-life energy storage programme"]}
        image="/images/sedan-white.jpg"
        reverse
      />
      <section className="container-x py-16">
        <SectionHeading eyebrow="Roadmap" title="Our commitments" center />
        <ol className="mt-12 grid gap-6 md:grid-cols-4">
          {goals.map((g) => (
            <li key={g.year} className="rounded-2xl border border-black/5 bg-[#f6f7f6] p-6">
              <p className="text-3xl font-bold text-volt-600">{g.year}</p>
              <p className="mt-3 text-sm text-muted">{g.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex items-center justify-center gap-3 text-sm text-muted">
          <Recycle className="h-5 w-5 text-volt-600" /> <Sun className="h-5 w-5 text-volt-600" /> Read our full Impact Report — published annually.
        </div>
      </section>
      <CtaBanner title="Join the movement" text="Every VoltX on the road is a step toward cleaner air. Book a test drive and be part of it." />
    </>
  );
}
