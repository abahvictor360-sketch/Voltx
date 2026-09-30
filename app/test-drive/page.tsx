import type { Metadata } from "next";
import Image from "next/image";
import { Car, Clock, MapPin } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { getModel, models } from "@/lib/data";

export const metadata: Metadata = { title: "Book a Test Drive" };

export default async function TestDrivePage({ searchParams }: { searchParams: Promise<{ model?: string }> }) {
  const { model: slug } = await searchParams;
  const selected = (slug && getModel(slug)) || models[1];

  return (
    <section className="container-x grid gap-12 py-12 md:py-16 lg:grid-cols-[1fr_1.3fr]">
      <div>
        <p className="eyebrow">Test Drive</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Feel it for yourself.</h1>
        <p className="mt-4 text-muted">Choose your model and a time that suits you. Drive from a VoltX Studio, or we&apos;ll bring the car to your door — free.</p>
        <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-3xl bg-[#f6f7f6]">
          <Image src={selected.image} alt={selected.name} fill priority sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" />
        </div>
        <ul className="mt-8 space-y-4 text-sm">
          <li className="flex items-center gap-3"><Clock className="h-5 w-5 text-volt-600" /> 45-minute guided or solo drive</li>
          <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-volt-600" /> 180+ VoltX Studios or at-home delivery</li>
          <li className="flex items-center gap-3"><Car className="h-5 w-5 text-volt-600" /> No obligation, no pressure</li>
        </ul>
      </div>
      <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-bold">Your details</h2>
        <div className="mt-6">
          <LeadForm
            submitLabel="Confirm Test Drive"
            successTitle="Your test drive is booked!"
            successText="We've sent a confirmation to your email. See you behind the wheel."
            fields={[
              { name: "firstName", label: "First name", required: true },
              { name: "lastName", label: "Last name", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "phone", label: "Phone", type: "tel", required: true },
              { name: "model", label: "Model", type: "select", options: models.map((m) => m.name), defaultValue: selected.name, required: true },
              { name: "location", label: "Location", type: "select", options: ["VoltX Studio", "At my home / office"], required: true },
              { name: "date", label: "Preferred date", type: "date", required: true },
              { name: "time", label: "Preferred time", type: "select", options: ["Morning (9–12)", "Afternoon (12–4)", "Evening (4–7)"], required: true },
              { name: "city", label: "City / Postcode", full: true, required: true },
              { name: "notes", label: "Anything we should know?", type: "textarea" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
