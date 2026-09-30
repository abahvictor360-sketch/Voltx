"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "date" | "select" | "textarea";
  options?: string[];
  required?: boolean;
  full?: boolean;
  defaultValue?: string;
};

const input =
  "mt-1.5 w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-volt-500 focus:ring-2 focus:ring-volt-200";

export default function LeadForm({
  fields,
  submitLabel,
  successTitle,
  successText,
}: {
  fields: Field[];
  submitLabel: string;
  successTitle: string;
  successText: string;
}) {
  const [sent, setSent] = useState<string | null>(null);

  if (sent !== null) {
    return (
      <div className="rounded-2xl border border-volt-200 bg-volt-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-volt-600" />
        <h3 className="mt-4 text-xl font-bold">{successTitle}</h3>
        <p className="mt-2 text-sm text-muted">
          {sent ? `Thanks, ${sent}! ` : ""}
          {successText}
        </p>
        <button onClick={() => setSent(null)} className="mt-6 text-sm font-semibold text-volt-700 hover:underline">
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      className="grid gap-5 sm:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        setSent(String(data.get("firstName") ?? data.get("name") ?? "").split(" ")[0]);
      }}
    >
      {fields.map((f) => (
        <label key={f.name} className={`block text-sm font-medium ${f.full || f.type === "textarea" ? "sm:col-span-2" : ""}`}>
          {f.label}
          {f.required && <span className="text-volt-600"> *</span>}
          {f.type === "select" ? (
            <select name={f.name} required={f.required} defaultValue={f.defaultValue ?? ""} className={input}>
              <option value="" disabled>
                Select…
              </option>
              {f.options?.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          ) : f.type === "textarea" ? (
            <textarea name={f.name} required={f.required} rows={5} className={input} />
          ) : (
            <input name={f.name} type={f.type ?? "text"} required={f.required} defaultValue={f.defaultValue} className={input} />
          )}
        </label>
      ))}
      <div className="sm:col-span-2">
        <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-volt-400 px-6 py-3.5 text-sm font-semibold transition hover:bg-volt-500 sm:w-auto">
          {submitLabel} <ArrowRight className="h-4 w-4" />
        </button>
        <p className="mt-3 text-xs text-muted">By submitting, you agree to our Privacy Policy. We&apos;ll never share your details.</p>
      </div>
    </form>
  );
}
