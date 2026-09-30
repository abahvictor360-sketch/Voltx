import Link from "next/link";
import Logo from "./Logo";
import { footerLinks } from "@/lib/data";

const socials = [
  { label: "Facebook", path: "M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H7v4h2v7h4v-7h3l1-4h-4V9c0-.6.4-1 1-1z" },
  { label: "Instagram", path: "M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm5 5a4 4 0 100 8 4 4 0 000-8zm5.5-2a1 1 0 100 2 1 1 0 000-2z" },
  { label: "X", path: "M4 4l7 9-7 7h2l6-6 5 6h4l-7-9 6-7h-2l-5 5-4-5H4z" },
  { label: "LinkedIn", path: "M4 9h4v12H4zM6 3a2 2 0 110 4 2 2 0 010-4zm4 6h4v2c.6-1 2-2.2 4-2.2 3.6 0 4 2.4 4 5.4V21h-4v-5.6c0-1.4 0-3-2-3s-2 1.4-2 3V21h-4z" },
  { label: "YouTube", path: "M22 8.2c-.2-1.6-1-2.6-2.6-2.8C17 5 12 5 12 5s-5 0-7.4.4C3 5.6 2.2 6.6 2 8.2 1.8 9.8 1.8 12 1.8 12s0 2.2.2 3.8c.2 1.6 1 2.6 2.6 2.8C7 19 12 19 12 19s5 0 7.4-.4c1.6-.2 2.4-1.2 2.6-2.8.2-1.6.2-3.8.2-3.8s0-2.2-.2-3.8zM10 15V9l5 3-5 3z" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="container-x grid grid-cols-2 gap-x-6 gap-y-10 py-14 sm:grid-cols-3 lg:grid-cols-[minmax(0,1.4fr)_repeat(5,minmax(0,1fr))]">
        <div className="col-span-2 sm:col-span-3 lg:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            VoltX is committed to accelerating the world&apos;s transition to sustainable mobility with innovation,
            integrity, and purpose.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="flex h-8 w-8 items-center justify-center rounded-full text-ink/70 transition hover:bg-volt-100 hover:text-ink"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
        {footerLinks.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-muted transition hover:text-volt-600">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-black/5">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-6 text-xs text-muted sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} VoltX. Concept project — VoltX is a fictional brand created for portfolio purposes.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-ink">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-ink">Terms of Use</Link>
            <Link href="/cookies" className="hover:text-ink">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
