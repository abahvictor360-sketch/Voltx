"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function Newsletter() {
  const [done, setDone] = useState(false);
  return (
    <section className="overflow-hidden bg-volt-100">
      <div className="grid md:grid-cols-[minmax(0,5fr)_minmax(0,9fr)]">
        <div className="relative hidden h-full min-h-56 md:block">
          <Image src="/images/public-charging.jpg" alt="VoltX charging" fill className="object-cover" sizes="35vw" />
        </div>
        <div className="flex flex-col gap-6 px-5 py-12 md:px-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-sm">
            <h2 className="text-2xl font-bold md:text-3xl">Stay Charged. Stay Informed.</h2>
            <p className="mt-2 text-sm text-muted">
              Get the latest updates on new models, innovations, and exclusive offers.
            </p>
          </div>
          {done ? (
            <p className="flex items-center gap-2 font-semibold text-volt-700">
              <Check className="h-5 w-5" /> You&apos;re subscribed. Welcome to VoltX!
            </p>
          ) : (
            <form
              className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto"
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
            >
              <input required name="name" placeholder="Your Name" aria-label="Your name" className="rounded-lg border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-volt-500" />
              <input required type="email" name="email" placeholder="Your Email" aria-label="Your email" className="rounded-lg border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-volt-500" />
              <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-black">
                Subscribe <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
