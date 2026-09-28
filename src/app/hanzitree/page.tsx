import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

/** Same release on the web, iPhone, Android, and Windows. */
const appVersion = "1.0.0";

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
        <img
          src="/images/hanzitree/banner.png"
          alt="Hanzi Tree. Understand, connect, build, remember."
          width={1795}
          height={876}
          className="mb-10 w-full rounded-md"
        />
        <p className="font-mono text-xs tracking-wide text-muted uppercase">
          Hanzi Tree · Version {appVersion}
        </p>
        <h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Characters, built from parts
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
          {description} Assemble a character from its pieces, or recognize one
          when you see it. Progress stays in this browser, so the button below
          brings you back to the same place in the tree.
        </p>
        <a
          href="/hanzitree/play/"
          className="mt-10 inline-flex min-h-20 w-full max-w-xl items-center justify-center rounded-md bg-foreground px-10 py-6 text-2xl font-semibold tracking-tight text-background transition-colors hover:bg-foreground/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground sm:w-auto sm:min-w-80 sm:text-3xl"
        >
          Play in browser
        </a>
        <p className="mt-8 max-w-xl text-base text-foreground">
          Or install version {appVersion} for these platforms. It is the same
          release on the web, iPhone, Android, and Windows.
        </p>
        <ul className="mt-6 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
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
                  className="h-12 w-full rounded-sm bg-white object-contain"
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
        <p className="mt-10">
          <Link
            href="/hanzitree/privacy"
            className="text-base font-medium text-foreground underline decoration-foreground/40 underline-offset-4 transition-colors hover:decoration-foreground"
          >
            Read privacy statement
          </Link>
        </p>
      </Container>
    </section>
  );
}
