import CountUp from "@/components/CountUp";
import type { Metadata } from "next";
import Image from "next/image";
import { Check, Smartphone, Zap, Home, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ChargeCalculator from "@/components/ChargeCalculator";
import StationFinder from "@/components/StationFinder";
import CtaBanner from "@/components/CtaBanner";
import Button from "@/components/Button";

export const metadata: Metadata = { title: "Charging" };

const tiers = [
  { icon: Home, name: "Home Wallbox", power: "11 kW", time: "0–100% overnight", text: "Wake up to a full battery every morning." },
  { icon: MapPin, name: "Destination", power: "22 kW", time: "+100 km per hour", text: "Top up while you shop, dine or work." },
  { icon: Zap, name: "Ultra-Fast", power: "350 kW", time: "10–80% in 18 min", text: "Road-trip speed on our 800V network." },
];

export default function ChargingPage() {
  return (
    <>
      <PageHero
        eyebrow="Charge Anywhere"
        title="A Smarter Charging Ecosystem"
        text="At home, at work or on the road — VoltX gives you access to the largest and fastest-growing charging network in the world."
        image="/images/fast-charging.jpg"
      />

      <section className="container-x py-20">
        <SectionHeading eyebrow="Ways to charge" title="Power that fits your life" center />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map(({ icon: Icon, ...t }) => (
            <div key={t.name} className="rounded-2xl border border-black/5 bg-[#f6f7f6] p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-volt-400"><Icon className="h-5 w-5" /></span>
              <h3 className="mt-6 text-lg font-bold">{t.name}</h3>
              <p className="mt-1 text-3xl font-bold text-volt-600">{t.power}</p>
              <p className="mt-1 text-sm font-medium">{t.time}</p>
              <p className="mt-3 text-sm text-muted">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="home" className="container-x grid scroll-mt-24 gap-12 pb-20 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl lg:aspect-[4/4.5]">
          <Image src="/images/home-charging.jpg" alt="Plugging in a VoltX charger" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
        </div>
        <div>
          <SectionHeading eyebrow="Home Charging" title="Convenient. Fast. Reliable." text="The VoltX Wallbox installs in a single visit and charges up to 11 kW. Schedule charging for off-peak hours right from the app to save even more." />
          <ul className="mt-8 space-y-3">
            {["Professional installation included", "Smart scheduling with off-peak tariffs", "Solar integration ready", "Weatherproof for indoor or outdoor use"].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm"><Check className="h-4 w-4 text-volt-600" /> {f}</li>
            ))}
          </ul>
          <Button href="/contact" className="mt-8">Order a Wallbox</Button>
        </div>
      </section>

      <section id="network" className="scroll-mt-24 bg-ink py-20 text-white">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow text-volt-300!">Public Network</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">500,000+ stations worldwide</h2>
            <p className="mt-4 text-white/70">One app, one account, one bill. Plug in at VoltX Hubs and partner networks across 45+ countries — the car handles authentication automatically.</p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[["500K+", "Stations"], ["45+", "Countries"], ["99.2%", "Uptime"]].map(([v, l]) => (
                <div key={l}><p className="text-3xl font-bold text-volt-300"><CountUp value={v} /></p><p className="text-sm text-white/60">{l}</p></div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image src="/images/solar-charging.jpg" alt="Solar-powered VoltX charging hub" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section id="map" className="container-x scroll-mt-24 py-20">
        <SectionHeading eyebrow="Charging Map" title="Find a station near you" />
        <div className="mt-10"><StationFinder /></div>
      </section>

      <section id="app" className="container-x grid scroll-mt-24 gap-12 pb-20 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading eyebrow="Charging App" title="Your car, in your pocket" text="Start and stop charging, pre-condition the cabin, plan trips with automatic charging stops and pay in one tap." />
          <div className="mt-8 flex items-center gap-3 text-sm font-medium"><Smartphone className="h-5 w-5 text-volt-600" /> Available on iOS and Android</div>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
          <Image src="/images/smart-tech.jpg" alt="VoltX app features" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
        </div>
      </section>

      <section className="container-x pb-10">
        <SectionHeading eyebrow="Savings" title="Calculate your fuel savings" />
        <div className="mt-10"><ChargeCalculator /></div>
      </section>
      <CtaBanner />
    </>
  );
}
