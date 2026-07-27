import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function ClosingCta() {
  return (
    <Section className="border-t border-border bg-surface-muted/40">
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-lg">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Discuss a project
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Looking for embedded, electronics, or product engineering support?
            Start a conversation.
          </p>
        </div>
        <Button href="/contact">Get in touch</Button>
      </div>
    </Section>
  );
}
