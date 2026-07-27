import type { ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function Section({
  children,
  className = "",
  id,
  eyebrow,
  title,
  description,
}: SectionProps) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <Container>
        {(eyebrow || title || description) && (
          <header className="mb-12 max-w-2xl sm:mb-16">
            {eyebrow && (
              <p className="mb-3 font-mono text-xs tracking-wide text-muted uppercase">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                {description}
              </p>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
