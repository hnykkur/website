import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="py-24 sm:py-32">
      <Container>
        <p className="mb-3 font-mono text-xs tracking-wide text-muted uppercase">
          404
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/">Back home</Button>
          <Button href="/work" variant="secondary">
            View work
          </Button>
        </div>
      </Container>
    </div>
  );
}
