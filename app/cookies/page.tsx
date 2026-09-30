import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Cookie Policy" };

export default function Page() {
  return (
    <LegalPage
      title="Cookie Policy"
      updated="September 1, 2026"
      sections={[
        { h: "What are cookies?", p: "Cookies are small text files stored on your device that help websites remember your preferences and understand how they are used." },
        { h: "Essential cookies", p: "Required for core functionality such as security, language preference and form submission." },
        { h: "Analytics cookies", p: "Help us understand how visitors use the site so we can improve it. These are only set with your consent." },
        { h: "Managing cookies", p: "You can change your preferences at any time through your browser settings." },
      ]}
    />
  );
}
