import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <section className="container-x grid gap-12 py-12 md:py-16 lg:grid-cols-[1fr_1.4fr]">
      <div>
        <p className="eyebrow">Contact Us</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Let&apos;s talk.</h1>
        <p className="mt-4 text-muted">Questions about a model, charging, or an order? Our specialists usually reply within a few hours.</p>
        <div className="mt-10 space-y-6">
          {[
            { icon: Phone, title: "Call us", text: "+1 (800) 865-8699 · 24/7" },
            { icon: Mail, title: "Email", text: "hello@voltx.com" },
            { icon: MapPin, title: "Headquarters", text: "200 Innovation Way, Palo Alto, CA" },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-volt-100"><Icon className="h-5 w-5 text-volt-700" /></span>
              <div><p className="font-semibold">{title}</p><p className="text-sm text-muted">{text}</p></div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
        <LeadForm
          submitLabel="Send Message"
          successTitle="Message sent"
          successText="A member of our team will get back to you shortly."
          fields={[
            { name: "firstName", label: "Full name", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            { name: "topic", label: "Topic", type: "select", options: ["Buying a VoltX", "Charging & Wallbox", "Service & Warranty", "Press", "Partnerships", "Other"], full: true, required: true },
            { name: "message", label: "Message", type: "textarea", required: true },
          ]}
        />
      </div>
    </section>
  );
}
