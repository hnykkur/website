import type { Metadata } from "next";
import Link from "next/link";
import { PlayLaunch } from "@/components/hanzitree/PlayLaunch";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

const playStoreUrl =
  "https://play.google.com/store/apps/details?id=com.hnykkur.hanzitree";

const description =
  "Learn Chinese characters through their components, patterns, and connections.";

export const metadata: Metadata = {
  title: "Hanzi Tree",
  description,
  openGraph: {
    title: "Hanzi Tree",
    description,
    url: `${site.url}/hanzitree`,
    type: "website",
    images: [
      {
        url: "/images/projects/hanzi-tree/og.png",
        width: 1200,
        height: 630,
        alt: "Hanzi Tree logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hanzi Tree",
    description,
    images: ["/images/projects/hanzi-tree/og.png"],
  },
};

export default function HanziTreePage() {
  return (
    <section className="relative overflow-hidden hero-atmosphere">
      <div className="absolute inset-0 hero-grain" aria-hidden="true" />
      <Container className="relative flex min-h-[calc(100svh-8rem)] flex-col justify-center py-16 sm:py-24">
        <p className="font-mono text-xs tracking-wide text-muted uppercase">
          Hanzi Tree
        </p>
        <h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Characters, built from parts
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
          {description} Assemble a character from its pieces, or recognize one
          when you see it. Progress stays in this browser, so the button below
          brings you back to the same place in the tree.
        </p>
        <PlayLaunch />
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={playStoreUrl}
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-border bg-surface px-5 text-sm font-medium text-foreground transition-colors hover:bg-surface-muted"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Play
          </a>
        </div>
        <p className="mt-10 text-sm text-muted">
          <Link
            href="/hanzitree/privacy"
            className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
          >
            Privacy
          </Link>
        </p>
      </Container>
    </section>
  );
}
