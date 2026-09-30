import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Privacy Policy" };

export default function Page() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="September 1, 2026"
      sections={[
        { h: "Information we collect", p: "We collect information you provide directly — such as your name, email and phone number when booking a test drive — along with vehicle data needed to deliver connected services." },
        { h: "How we use it", p: "Your information is used to provide and improve our products, process orders, deliver over-the-air updates, and communicate with you about your vehicle and account." },
        { h: "Sharing", p: "We never sell your personal data. We share it only with service providers acting on our behalf, or where required by law." },
        { h: "Your choices", p: "You can access, correct or delete your data at any time from your VoltX account, and opt out of marketing emails with one click." },
        { h: "Contact", p: "Questions about privacy? Email privacy@voltx.com." },
      ]}
    />
  );
}
