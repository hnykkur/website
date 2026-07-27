import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden hero-atmosphere">
      <div className="absolute inset-0 hero-grain" aria-hidden="true" />
      <Container className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-center py-20 sm:py-28">
        <p className="animate-fade-up mb-6 font-mono text-xs tracking-wide text-muted uppercase">
          {site.location} · Engineering
        </p>
        <h1 className="animate-fade-up-delay-1 max-w-3xl text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          {site.name}
        </h1>
        <p className="animate-fade-up-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
          Embedded systems, electronics, and software — developed with Nordic
          precision.
        </p>
        <div className="animate-fade-up-delay-2 mt-10 flex flex-wrap gap-3">
          <Button href="/work">View work</Button>
          <Button href="/contact" variant="secondary">
            Get in touch
          </Button>
        </div>
      </Container>
    </section>
  );
}
