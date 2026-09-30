import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-7xl font-bold text-volt-500">404</p>
      <h1 className="mt-4 text-2xl font-bold">Looks like you&apos;ve run out of road.</h1>
      <p className="mt-2 text-muted">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Button href="/" className="mt-8">Back to Home</Button>
    </section>
  );
}
