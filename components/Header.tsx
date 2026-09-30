"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Globe, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { nav } from "@/lib/data";

const languages = ["EN", "FR", "DE", "ES"];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("EN");
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
    setLangOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur transition-shadow ${scrolled ? "shadow-sm" : ""}`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-6 md:h-20">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition hover:text-volt-600 ${active ? "text-volt-600" : "text-ink/80"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm font-medium text-ink/80 hover:bg-black/5"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
            >
              <Globe className="h-4 w-4" /> {lang} <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {langOpen && (
              <ul className="absolute right-0 mt-2 w-24 overflow-hidden rounded-lg border border-black/5 bg-white py-1 shadow-lg" role="listbox">
                {languages.map((l) => (
                  <li key={l}>
                    <button
                      onClick={() => {
                        setLang(l);
                        setLangOpen(false);
                      }}
                      className={`w-full px-3 py-1.5 text-left text-sm hover:bg-volt-50 ${l === lang ? "font-semibold text-volt-600" : ""}`}
                    >
                      {l}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <Link
            href="/test-drive"
            className="hidden items-center gap-2 rounded-lg bg-volt-400 px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-volt-500 sm:inline-flex"
          >
            Book a Test Drive <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            className="rounded-md p-2 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-black/5 bg-white lg:hidden">
          <nav className="container-x flex flex-col py-4" aria-label="Mobile">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="border-b border-black/5 py-3 font-medium">
                {item.label}
              </Link>
            ))}
            <Link
              href="/test-drive"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-volt-400 px-4 py-3 font-semibold"
            >
              Book a Test Drive <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
