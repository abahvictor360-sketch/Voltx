import Image from "next/image";
import { Check } from "lucide-react";

export default function FeatureSplit({
  id,
  eyebrow,
  title,
  text,
  points,
  image,
  reverse = false,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  text: string;
  points: string[];
  image: string;
  reverse?: boolean;
}) {
  return (
    <section id={id} className="container-x grid scroll-mt-24 gap-12 py-16 lg:grid-cols-2 lg:items-center">
      <div className={`relative aspect-[4/3] overflow-hidden rounded-3xl ${reverse ? "lg:order-2" : ""}`}>
        <Image src={image} alt={title} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
      </div>
      <div>
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
        <p className="mt-4 leading-relaxed text-muted">{text}</p>
        <ul className="mt-8 space-y-3">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3 text-sm">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-volt-600" /> {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
