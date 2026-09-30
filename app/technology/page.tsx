import type { Metadata } from "next";
import { Cpu, Radar, ShieldCheck, Wifi } from "lucide-react";
import PageHero from "@/components/PageHero";
import FeatureSplit from "@/components/FeatureSplit";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = { title: "Technology" };

const pillars = [
  { icon: Cpu, title: "SmartDrive OS", text: "An AI-powered operating system that learns your routines." },
  { icon: Radar, title: "Driver Assist", text: "12 cameras, radar and ultrasonic sensors for 360° awareness." },
  { icon: ShieldCheck, title: "5-Star Safety", text: "Euro NCAP 5-star rating across the entire lineup." },
  { icon: Wifi, title: "Always Connected", text: "5G connectivity and monthly over-the-air updates." },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="Intelligence in every kilometre"
        text="From our in-house 800V powertrain to the SmartDrive OS, every VoltX is engineered to get smarter, safer and more efficient over time."
        image="/images/tech-crossover.jpg"
      />
      <section className="container-x -mt-12 relative z-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-black/5 bg-white p-6 shadow-lg shadow-black/5">
              <Icon className="h-7 w-7 text-volt-500" strokeWidth={1.6} />
              <h3 className="mt-4 font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <FeatureSplit
        id="os"
        eyebrow="SmartDrive OS"
        title="An operating system that knows you"
        text="SmartDrive OS brings navigation, media, climate and vehicle controls together on one fluid interface, with a natural-language voice assistant that actually understands you."
        points={["Personal driver profiles synced to the cloud", "Route planning with live charger availability", "Natural voice control for 200+ functions", "Third-party app ecosystem"]}
        image="/images/smart-tech.jpg"
      />
      <FeatureSplit
        id="battery"
        eyebrow="Battery & Powertrain"
        title="800V. Designed in-house."
        text="Our cell-to-pack battery and silicon-carbide inverters deliver more range from less weight, with charging speeds up to 350 kW."
        points={["Up to 123 kWh usable capacity", "8-year / 200,000 km battery warranty", "Thermal management for all climates", "Bi-directional vehicle-to-load up to 11 kW"]}
        image="/images/fast-charging.jpg"
        reverse
      />
      <FeatureSplit
        id="safety"
        eyebrow="Safety"
        title="Protection engineered from the ground up"
        text="A rigid battery floor structure lowers the centre of gravity and reinforces the cabin, while our driver-assist suite watches the road with you."
        points={["Automatic emergency braking & evasive steering", "Adaptive cruise with lane centring", "Blind-spot and cross-traffic alerts", "9 airbags including far-side centre airbag"]}
        image="/images/gt-black.jpg"
      />
      <FeatureSplit
        id="ota"
        eyebrow="Over-the-Air Updates"
        title="Your VoltX gets better while you sleep"
        text="New features, efficiency improvements and safety upgrades arrive wirelessly — no service visit required."
        points={["Monthly feature drops", "Powertrain efficiency updates", "Security patches within 48 hours", "Rollback protection"]}
        image="/images/sedan-teal.jpg"
        reverse
      />
      <CtaBanner />
    </>
  );
}
