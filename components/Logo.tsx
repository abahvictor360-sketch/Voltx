import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="VoltX home">
      <svg width="30" height="26" viewBox="0 0 30 26" fill="none" aria-hidden>
        <path d="M0 0h8l7 15L22 0h8L17 26h-4L0 0z" fill="#7dc41f" />
        <path d="M11 0h8l-4 8-4-8z" fill={light ? "#ffffff" : "#0e1512"} />
      </svg>
      <span className={`text-lg font-extrabold tracking-tight ${light ? "text-white" : "text-ink"}`}>
        VOLT<span className="text-volt-500">X</span>
      </span>
    </Link>
  );
}
