import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Terms of Use" };

export default function Page() {
  return (
    <LegalPage
      title="Terms of Use"
      updated="September 1, 2026"
      sections={[
        { h: "Acceptance", p: "By accessing this website you agree to these terms. If you do not agree, please do not use the site." },
        { h: "Product information", p: "Specifications, prices and availability are subject to change without notice. Range figures are WLTP estimates; real-world results vary." },
        { h: "Intellectual property", p: "All content, trademarks and designs on this site are the property of VoltX and may not be used without permission." },
        { h: "Limitation of liability", p: "VoltX is not liable for indirect or consequential damages arising from use of this website." },
      ]}
    />
  );
}
