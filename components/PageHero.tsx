import Image from "next/image";

export default function PageHero({
  eyebrow,
  title,
  text,
  image,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <Image src={image} alt="" fill priority className="-z-10 object-cover opacity-60" sizes="100vw" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="container-x py-28 md:py-36">
        <div className="max-w-2xl animate-fade-up">
          <p className="eyebrow mb-4 text-volt-300!">{eyebrow}</p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">{title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-white/80">{text}</p>
        </div>
      </div>
    </section>
  );
}
