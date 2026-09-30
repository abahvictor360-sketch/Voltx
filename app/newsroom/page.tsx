import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Newsroom" };

const posts = [
  { date: "Sep 18, 2026", tag: "Product", title: "VoltX T pickup begins deliveries across Europe", image: "/images/truck.jpg" },
  { date: "Aug 30, 2026", tag: "Charging", title: "VoltX network surpasses 500,000 charging points", image: "/images/fast-charging.jpg" },
  { date: "Aug 02, 2026", tag: "Technology", title: "SmartDrive OS 6.0 brings natural voice control to every model", image: "/images/smart-tech.jpg" },
  { date: "Jul 14, 2026", tag: "Sustainability", title: "2.4 million trees planted through the VoltX Forest programme", image: "/images/solar-charging.jpg" },
  { date: "Jun 21, 2026", tag: "Product", title: "VoltX GT sets a new lap record for electric grand tourers", image: "/images/gt-black.jpg" },
  { date: "May 09, 2026", tag: "Company", title: "VoltX expands to five new markets in Africa and Asia", image: "/images/sedan-teal.jpg" },
];

export default function NewsroomPage() {
  return (
    <>
      <PageHero eyebrow="Newsroom" title="The latest from VoltX" text="Product launches, technology milestones and stories from the road." image="/images/gt-white.jpg" />
      <section className="container-x grid gap-8 py-20 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <article key={p.title} className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image src={p.image} alt="" fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <p className="text-xs text-muted"><span className="font-semibold text-volt-700">{p.tag}</span> · {p.date}</p>
              <h2 className="mt-2 text-lg font-bold leading-snug">{p.title}</h2>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
