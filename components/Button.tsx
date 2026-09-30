import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "dark" | "ghost";
  arrow?: boolean;
  className?: string;
};

const styles = {
  primary: "bg-volt-400 text-ink hover:bg-volt-500 shadow-sm shadow-volt-500/30",
  outline: "border border-black/15 bg-white text-ink hover:border-black/40",
  dark: "bg-ink text-white hover:bg-black",
  ghost: "text-ink hover:text-volt-600 px-0!",
};

export default function Button({ href, children, variant = "primary", arrow = true, className = "" }: Props) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 active:translate-y-0 ${styles[variant]} ${className}`}
    >
      {children}
      {arrow && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
    </Link>
  );
}
