import type { Metadata } from "next";
import Link from "next/link";
import { PlayLaunch } from "@/components/hanzitree/PlayLaunch";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

const installs = [
  {
    label: "Google Play",
    href: "https://play.google.com/store/apps/details?id=com.hnykkur.hanzitree",
    pair: "/images/hanzitree/pair-play.png",
    qr: "/images/hanzitree/hanzi-tree-play.png",
  },
  {
    label: "TestFlight",
    href: "https://testflight.apple.com/v1/app/6803083301",
    pair: "/images/hanzitree/pair-iphone.png",
    qr: "/images/hanzitree/hanzi-tree-testflight.png",
  },
  {
    label: "Android APK",
    href: "https://drive.google.com/file/d/1N8Akq5vEKe2Rjey20Hx7VL7cp-vcyTan/view?usp=drive_link",
    pair: "/images/hanzitree/pair-apk.png",
    qr: "/images/hanzitree/hanzi-tree-apk.png",
  },
  {
    label: "Windows",
    href: "https://drive.google.com/file/d/1Ksh8HnGkbSXOv6TaxrDfo8b_7VbB-GCI/view?usp=sharing",
    pair: "/images/hanzitree/pair-windows.png",
    qr: "/images/hanzitree/hanzi-tree-windows.png",
  },
] as const;

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
        <ul className="mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
          {installs.map((install) => (
            <li key={install.label}>
              <a
                href={install.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col items-center gap-3 rounded-md border border-border bg-surface p-3 transition-colors hover:bg-surface-muted"
              >
                <img
                  src={install.pair}
                  alt=""
                  className="h-12 w-full rounded-sm bg-black object-contain"
                />
                <img
                  src={install.qr}
                  alt=""
                  className="aspect-square w-full rounded-sm bg-white object-contain"
                />
                <span className="font-mono text-[11px] tracking-wide text-muted uppercase">
                  {install.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
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
