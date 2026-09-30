export default function LegalPage({ title, updated, sections }: { title: string; updated: string; sections: { h: string; p: string }[] }) {
  return (
    <section className="container-x max-w-3xl! py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="mt-3 text-4xl font-bold">{title}</h1>
      <p className="mt-2 text-sm text-muted">Last updated {updated}</p>
      <div className="mt-10 space-y-8">
        {sections.map((s) => (
          <div key={s.h}>
            <h2 className="text-lg font-bold">{s.h}</h2>
            <p className="mt-2 leading-relaxed text-muted">{s.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
