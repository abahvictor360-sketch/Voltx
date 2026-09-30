import type { Metadata } from "next";
import Link from "next/link";
import { BatteryCharging, BookOpen, CalendarCheck, MessageCircle, Phone, ShieldCheck, Wrench } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Faq from "@/components/Faq";
import LeadForm from "@/components/LeadForm";
import { models } from "@/lib/data";

export const metadata: Metadata = { title: "Support" };

const topics = [
  { icon: BookOpen, title: "Owner's Manuals", text: "Guides for every VoltX model.", href: "#faq" },
  { icon: BatteryCharging, title: "Charging Help", text: "Home, public and app support.", href: "/charging" },
  { icon: ShieldCheck, title: "Warranty", text: "What's covered and for how long.", href: "#warranty" },
  { icon: Wrench, title: "Book a Service", text: "Mobile or in-studio servicing.", href: "#service" },
];

const faqs = [
  { q: "How long does it take to charge a VoltX?", a: "On a 350 kW ultra-fast charger, most VoltX models charge from 10–80% in about 18 minutes. On a home wallbox (11 kW) a full charge takes around 7–10 hours — perfect for overnight." },
  { q: "What is covered by the battery warranty?", a: "Every VoltX battery and drive unit is covered for 8 years or 200,000 km, whichever comes first, with a guaranteed minimum of 70% capacity retention." },
  { q: "Do I need to service an electric car?", a: "Much less often than a petrol car. We recommend a check-up every 2 years or 40,000 km covering brakes, tyres, cabin filters and coolant." },
  { q: "How do over-the-air updates work?", a: "Updates download automatically over Wi-Fi or 5G. You'll get a notification and can install immediately or schedule the update for later — it usually takes under 30 minutes." },
  { q: "Can I use other charging networks?", a: "Yes. VoltX supports CCS and plug-and-charge on 500,000+ partner stations. Billing is handled automatically through your VoltX account." },
  { q: "What happens if I run out of charge?", a: "VoltX Roadside Assistance is included for 4 years. We'll bring a mobile charger or tow you to the nearest station, free of charge." },
];

export default function SupportPage() {
  return (
    <>
      <PageHero eyebrow="Help Center" title="How can we help?" text="Answers, guides and real people ready to support you — whenever you need it." image="/images/public-charging.jpg" />

      <section className="container-x relative z-10 -mt-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map(({ icon: Icon, title, text, href }) => (
            <Link key={title} href={href} className="rounded-2xl border border-black/5 bg-white p-6 shadow-lg shadow-black/5 transition hover:-translate-y-1">
              <Icon className="h-7 w-7 text-volt-500" strokeWidth={1.6} />
              <h3 className="mt-4 font-bold">{title}</h3>
              <p className="mt-1 text-sm text-muted">{text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section id="faq" className="container-x grid scroll-mt-24 gap-12 py-20 lg:grid-cols-[1fr_2fr]">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" text="Can't find what you're looking for? Our team is available 24/7." />
        <Faq items={faqs} />
      </section>

      <section id="warranty" className="scroll-mt-24 bg-[#f6f7f6] py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Warranty" title="Peace of mind, built in" center />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["4 yrs / 80,000 km", "Basic Vehicle", "Bumper-to-bumper coverage for defects in materials and workmanship."],
              ["8 yrs / 200,000 km", "Battery & Drive Unit", "Guaranteed 70% minimum capacity retention over the warranty period."],
              ["12 yrs / unlimited", "Body Rust-Through", "Protection against corrosion perforation on all body panels."],
            ].map(([term, title, text]) => (
              <div key={title} className="rounded-2xl bg-white p-7">
                <p className="text-2xl font-bold text-volt-600">{term}</p>
                <h3 className="mt-2 font-bold">{title}</h3>
                <p className="mt-2 text-sm text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="service" className="container-x grid scroll-mt-24 gap-12 py-20 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <SectionHeading eyebrow="Book a Service" title="We'll come to you" text="Most repairs and maintenance can be handled by our Mobile Service team at your home or office." />
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-center gap-3"><CalendarCheck className="h-5 w-5 text-volt-600" /> Same-week appointments</li>
            <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-volt-600" /> 24/7 Roadside: +1 (800) 865-8699</li>
            <li className="flex items-center gap-3"><MessageCircle className="h-5 w-5 text-volt-600" /> Live chat in the VoltX app</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
          <LeadForm
            submitLabel="Request Service"
            successTitle="Service request received"
            successText="A service advisor will confirm your appointment within 24 hours."
            fields={[
              { name: "firstName", label: "Full name", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "model", label: "Vehicle", type: "select", options: models.map((m) => m.name), required: true },
              { name: "date", label: "Preferred date", type: "date", required: true },
              { name: "type", label: "Service type", type: "select", options: ["Scheduled maintenance", "Tyres", "Repair", "Charging issue", "Other"], full: true, required: true },
              { name: "notes", label: "Describe the issue", type: "textarea" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
