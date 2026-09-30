import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollMotion from "@/components/ScrollMotion";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  metadataBase: new URL("https://voltx-one-ruby.vercel.app"),
  openGraph: {
    title: "VoltX — Drive the Future. Today.",
    description: "A premium, fully responsive electric-vehicle brand website built with Next.js and Tailwind CSS.",
    url: "/",
    siteName: "VoltX",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  title: { default: "VoltX — Drive the Future. Today.", template: "%s | VoltX" },
  description:
    "VoltX delivers intelligent performance, zero emissions, and a smarter way to go. Explore electric models, charging and technology.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-sans">
        <ScrollMotion />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
