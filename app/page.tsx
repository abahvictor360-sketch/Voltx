import CountUp from "@/components/CountUp";
import Image from "next/image";
import { BatteryCharging, Car, Globe, Leaf, RefreshCw, ShieldCheck, Trees, Zap, Gauge } from "lucide-react";
import Hero from "@/components/Hero";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import ModelCarousel from "@/components/ModelCarousel";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";

const stats = [
  { icon: BatteryCharging, title: "Up to 620 km", sub: "Range", note: "WLTP Certified" },
  { icon: Gauge, title: "4.2s", sub: "0–100 km/h", note: "Dual Motor AWD" },
  { icon: Zap, title: "800V", sub: "Ultra-Fast Charging", note: "10–80% in 18 Min" },
  { icon: Car, title: "SmartDrive OS", sub: "AI-Powered", note: "Always Evolving" },
  { icon: ShieldCheck, title: "5-Star", sub: "Safety Rating", note: "Euro NCAP" },
];

const charging = [
  { title: "Home Charging", text: "Convenient. Fast. Reliable.", image: "/images/home-charging.jpg" },
  { title: "Public Network", text: "500,000+ Stations Worldwide", image: "/images/public-charging.jpg" },
  { title: "Ultra-Fast Charging", text: "Ready in Minutes.", image: "/images/fast-charging.jpg" },
];

const impact = [
  { icon: Leaf, value: "0", label: "Tailpipe Emissions", note: "100% Electric" },
  { icon: Trees, value: "2.4M+", label: "Trees Planted", note: "And Counting" },
  { icon: RefreshCw, value: "100%", label: "Renewable Energy", note: "In Our Operations" },
  { icon: Globe, value: "45+", label: "Countries", note: "And Growing" },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Stats bar */}
      <section className="container-x relative z-10 -mt-4 lg:-mt-10">
        <div className="grid grid-cols-2 gap-y-6 rounded-2xl border border-black/5 bg-white p-6 shadow-xl shadow-black/5 md:grid-cols-5 md:divide-x md:divide-black/10">
          {stats.map(({ icon: Icon, title, sub, note }) => (
            <div key={title} className="flex gap-3 md:justify-center md:px-4">
              <Icon className="mt-0.5 h-7 w-7 shrink-0 text-volt-500" strokeWidth={1.6} />
              <div>
                <p className="text-sm font-semibold leading-tight"><CountUp value={title} /></p>
                <p className="text-sm font-semibold leading-tight">{sub}</p>
                <p className="mt-2 text-xs text-muted">{note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Charging ecosystem */}
      <section className="container-x grid gap-10 py-20 lg:grid-cols-[1fr_2.2fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Charge Anywhere"
            title="A Smarter Charging Ecosystem"
            text="VoltX gives you complete freedom with access to the largest and fastest-growing charging network."
          />
          <Button href="/charging" className="mt-8">
            Explore Charging
          </Button>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          {charging.map((c) => (
            <article key={c.title} className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={c.image} alt={c.title} fill sizes="(max-width: 640px) 90vw, 22vw" className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold">{c.title}</h3>
                <p className="mt-1 text-xs text-muted">{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Lineup */}
      <section className="container-x pb-20">
        <SectionHeading eyebrow="Our Lineup" title="Built for Every Journey" center />
        <div className="mt-10">
          <ModelCarousel />
        </div>
      </section>

      {/* Impact */}
      <section className="bg-gradient-to-r from-volt-50 via-volt-100/60 to-volt-50">
        <div className="container-x grid gap-10 py-16 lg:grid-cols-[1fr_2.2fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Our Impact" title="Driving Change for a Better Tomorrow" />
            <Button href="/sustainability" className="mt-8">
              Our Sustainability
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:divide-x md:divide-black/10">
            {impact.map(({ icon: Icon, value, label, note }) => (
              <div key={label} className="text-center">
                <Icon className="mx-auto h-9 w-9 text-volt-500" strokeWidth={1.4} />
                <p className="mt-4 text-3xl font-bold"><CountUp value={value} /></p>
                <p className="mt-1 text-xs font-semibold">{label}</p>
                <p className="text-xs text-muted">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-x py-20">
        <SectionHeading eyebrow="What Drivers Say" title="Real Stories. Real Drivers." center />
        <div className="mt-10">
          <Testimonials />
        </div>
      </section>

      <Newsletter />
    </>
  );
}
