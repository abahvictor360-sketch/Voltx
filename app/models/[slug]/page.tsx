import CountUp from "@/components/CountUp";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Configurator from "@/components/Configurator";
import ModelCard from "@/components/ModelCard";
import CtaBanner from "@/components/CtaBanner";
import SectionHeading from "@/components/SectionHeading";
import { getModel, models } from "@/lib/data";

export function generateStaticParams() {
  return models.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const model = getModel(slug);
  return { title: model?.name ?? "Model", description: model?.description };
}

export default async function ModelPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const model = getModel(slug);
  if (!model) notFound();

  const specs = [
    { value: `${model.range} km`, label: "Range (WLTP)" },
    { value: `${model.accel}s`, label: "0–100 km/h" },
    { value: `${model.topSpeed} km/h`, label: "Top speed" },
    { value: `${model.battery} kWh`, label: "Battery" },
    { value: model.drive, label: "Drive" },
    { value: `${model.seats}`, label: "Seats" },
  ];

  return (
    <>
      <section className="container-x py-10 md:py-14">
        <Configurator model={model} />
      </section>

      <section className="container-x">
        <div className="grid grid-cols-2 gap-6 rounded-2xl bg-ink p-8 text-white sm:grid-cols-3 lg:grid-cols-6">
          {specs.map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-bold text-volt-300"><CountUp value={s.value} /></p>
              <p className="mt-1 text-xs text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x grid gap-12 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading eyebrow="Overview" title={`Meet the ${model.name}`} text={model.description} />
          <ul className="mt-8 space-y-6">
            {model.highlights.map((h) => (
              <li key={h.title} className="border-l-2 border-volt-400 pl-5">
                <h3 className="font-semibold">{h.title}</h3>
                <p className="mt-1 text-sm text-muted">{h.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted">Fast charging: <span className="font-semibold text-ink">{model.charge}</span></p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <Image src={model.gallery[1]} alt={`${model.name} lifestyle`} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
        </div>
      </section>

      <section className="container-x pb-10">
        <SectionHeading title="Explore other models" />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {models.filter((m) => m.slug !== model.slug).map((m) => (
            <ModelCard key={m.slug} model={m} />
          ))}
        </div>
      </section>
      <CtaBanner title={`Experience the ${model.name}`} />
    </>
  );
}
