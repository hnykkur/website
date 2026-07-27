import type { Metadata } from "next";
import { Bio } from "@/components/about/Bio";
import { Competencies } from "@/components/about/Competencies";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Hnykkur — Icelandic engineering for embedded systems, electronics, software, and product development.",
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <Bio />
        <div className="mt-20 sm:mt-28">
          <Competencies />
        </div>
        <div className="mt-20 border-t border-border pt-10 sm:mt-28">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Start a conversation
          </h2>
          <p className="mt-3 max-w-lg text-base leading-relaxed text-muted">
            Whether you need consulting, a build partner, or a second set of
            engineering eyes — get in touch.
          </p>
          <div className="mt-6">
            <Button href="/contact">Contact</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
