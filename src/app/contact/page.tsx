import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} about embedded systems, electronics, software, or consulting.`,
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <header className="mb-12 max-w-2xl sm:mb-16">
          <p className="mb-3 font-mono text-xs tracking-wide text-muted uppercase">
            Contact
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Get in touch
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Tell me a little about what you are building. I typically reply
            within a few business days.
          </p>
        </header>

        <div className="max-w-xl">
          <ContactForm />
        </div>
      </Container>
    </div>
  );
}
