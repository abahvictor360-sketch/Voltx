import type { Metadata } from "next";
import Image from "next/image";
import { Heart, Lightbulb, Shield, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import Button from "@/components/Button";

export const metadata: Metadata = { title: "About Us" };

const values = [
  { icon: Lightbulb, title: "Innovation", text: "We question everything to build what's next." },
  { icon: Shield, title: "Integrity", text: "Honest engineering, transparent pricing." },
  { icon: Heart, title: "Purpose", text: "Every decision serves people and the planet." },
  { icon: Users, title: "Community", text: "Our drivers shape our roadmap." },
];

const timeline = [
  { year: "2016", text: "VoltX founded by a team of engineers with one mission: make EVs irresistible." },
  { year: "2019", text: "First prototype completes a 1,000 km test drive on a single day." },
  { year: "2021", text: "VoltX S launches and sells out its first production year." },
  { year: "2023", text: "VoltX X and the 800V platform debut; network reaches 250,000 stations." },
  { year: "2025", text: "VoltX GT and VoltX T join the lineup. Now in 45+ countries." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Accelerating the world's transition to sustainable mobility"
        text="We're designers, engineers and dreamers building electric vehicles that people genuinely love to drive."
        image="/images/gt-black.jpg"
      />
      <section className="container-x grid gap-12 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading eyebrow="Our Story" title="Born from a simple question" text="What if the best car you've ever driven was also the cleanest? That question started VoltX in a small garage in 2016. Today, more than 3,000 people across four continents are working to answer it." />
          <Button href="/careers" className="mt-8">Join Our Team</Button>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <Image src="/images/tech-crossover.jpg" alt="VoltX design studio" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
        </div>
      </section>
      <section className="bg-[#f6f7f6] py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Our Values" title="What drives us" center />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl bg-white p-7">
                <Icon className="h-7 w-7 text-volt-500" strokeWidth={1.6} />
                <h3 className="mt-4 font-bold">{title}</h3>
                <p className="mt-2 text-sm text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container-x py-20">
        <SectionHeading eyebrow="Milestones" title="Our journey so far" />
        <ol className="mt-12 space-y-0 border-l-2 border-volt-200">
          {timeline.map((t) => (
            <li key={t.year} className="relative pb-10 pl-8 last:pb-0">
              <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-volt-400 ring-4 ring-white" />
              <p className="text-lg font-bold text-volt-600">{t.year}</p>
              <p className="mt-1 text-muted">{t.text}</p>
            </li>
          ))}
        </ol>
      </section>
      <CtaBanner />
    </>
  );
}
