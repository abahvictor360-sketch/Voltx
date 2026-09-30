import Button from "./Button";

export default function CtaBanner({
  title = "Ready to feel the difference?",
  text = "Book a test drive at a VoltX studio near you, or have us bring the car to your door.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="container-x py-20">
      <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-14 md:px-14">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-volt-400/30 blur-3xl" />
        <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
            <p className="mt-3 text-white/70">{text}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/test-drive">Book a Test Drive</Button>
            <Button href="/models" variant="outline" arrow={false}>
              Explore Models
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
