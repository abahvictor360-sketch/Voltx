import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Model } from "@/lib/data";

export default function ModelCard({ model, featured = false }: { model: Model; featured?: boolean }) {
  return (
    <article
      className={`group flex h-full flex-col rounded-2xl p-6 transition ${
        featured ? "border-2 border-volt-300 bg-white shadow-xl shadow-volt-500/10" : "border border-transparent bg-[#f6f7f6] hover:bg-white hover:shadow-lg"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-bold">{model.name}</h3>
          <p className="mt-1 text-sm text-muted">{model.tagline}</p>
        </div>
        {model.popular && (
          <span className="rounded-full bg-volt-400 px-3 py-1 text-xs font-semibold">Popular</span>
        )}
      </div>
      <div className="relative my-6 aspect-[16/9] overflow-hidden rounded-xl bg-white">
        <Image
          src={model.image}
          alt={model.name}
          fill
          sizes="(max-width: 768px) 90vw, 30vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <dl className="grid grid-cols-3 divide-x divide-black/10 text-center">
        <div>
          <dt className="sr-only">Range</dt>
          <dd className="text-sm font-semibold">{model.range} km</dd>
          <dd className="text-[11px] text-muted">Range (WLTP)</dd>
        </div>
        <div>
          <dt className="sr-only">Acceleration</dt>
          <dd className="text-sm font-semibold">{model.accel}s</dd>
          <dd className="text-[11px] text-muted">0–100 km/h</dd>
        </div>
        <div>
          <dt className="sr-only">Drive</dt>
          <dd className="text-sm font-semibold">{model.drive}</dd>
          <dd className="text-[11px] text-muted">Drive Type</dd>
        </div>
      </dl>
      <Link
        href={`/models/${model.slug}`}
        className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${featured ? "text-volt-600" : "text-ink"} hover:text-volt-600`}
      >
        Learn More <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </Link>
    </article>
  );
}
