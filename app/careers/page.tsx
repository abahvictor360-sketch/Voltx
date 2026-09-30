import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = { title: "Careers" };

const jobs = [
  { title: "Senior Battery Systems Engineer", team: "Engineering", location: "Palo Alto, CA" },
  { title: "Embedded Software Engineer — SmartDrive OS", team: "Software", location: "Berlin, DE" },
  { title: "Product Designer, In-Car Experience", team: "Design", location: "London, UK" },
  { title: "Charging Network Operations Lead", team: "Energy", location: "Lagos, NG" },
  { title: "Sales Advisor", team: "Retail", location: "Dubai, AE" },
  { title: "Mobile Service Technician", team: "Service", location: "New York, NY" },
];

const perks = ["Employee vehicle programme", "Equity for every employee", "Flexible & hybrid work", "Learning budget", "Parental leave", "Home charger on us"];

export default function CareersPage() {
  return (
    <>
      <PageHero eyebrow="Careers" title="Build the future of mobility" text="Join 3,000+ people across four continents on a mission to make sustainable transport the obvious choice." image="/images/tech-crossover.jpg" />
      <section className="container-x py-20">
        <SectionHeading eyebrow="Why VoltX" title="Perks that power you" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {perks.map((p) => (
            <div key={p} className="rounded-2xl bg-volt-50 p-6 font-semibold">{p}</div>
          ))}
        </div>
      </section>
      <section className="container-x pb-20">
        <SectionHeading eyebrow="Open Roles" title={`${jobs.length} open positions`} />
        <ul className="mt-10 divide-y divide-black/10 rounded-2xl border border-black/5">
          {jobs.map((j) => (
            <li key={j.title}>
              <Link href="/contact" className="group flex flex-col justify-between gap-2 p-6 hover:bg-[#f6f7f6] sm:flex-row sm:items-center">
                <div>
                  <p className="font-semibold">{j.title}</p>
                  <p className="mt-1 flex items-center gap-2 text-sm text-muted">{j.team} · <MapPin className="h-3.5 w-3.5" /> {j.location}</p>
                </div>
                <span className="flex items-center gap-2 text-sm font-semibold text-volt-700">Apply <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
