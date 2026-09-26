import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Prose } from "@/components/ui/Prose";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Hanzi Tree",
  description:
    "Privacy policy for the Hanzi Tree Chinese language learning app by Hnykkur.",
  openGraph: {
    title: "Privacy Policy — Hanzi Tree",
    description:
      "Privacy policy for the Hanzi Tree Chinese language learning app by Hnykkur.",
    url: `${site.url}/hanzitree/privacy`,
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
    title: "Privacy Policy — Hanzi Tree",
    images: ["/images/projects/hanzi-tree/og.png"],
  },
};

export default function HanziTreePrivacyPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <header className="max-w-2xl border-b border-border pb-10 sm:pb-14">
          <p className="mb-4 font-mono text-xs tracking-wide text-muted uppercase">
            Hanzi Tree
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Effective date: September 26, 2026
          </p>
        </header>

        <div className="mt-12 sm:mt-16">
          <Prose>
            <p>
              Hanzi Tree is a Chinese language learning application developed by{" "}
              <strong>Hnykkur</strong>.
            </p>
            <p>
              Using the app means you agree that a release build may send an
              anonymous study log. That log is untraceable to you.
            </p>

            <h2>Information collection</h2>
            <p>
              Hanzi Tree does not create an account. It does not collect your
              name, email, contacts, photos, microphone, camera, or location. It
              does not use advertising or an advertising ID. It does not use
              crash reporting.
            </p>
            <p>
              A release build sends an anonymous study log: the lessons you
              ran, how each puzzle turned out, and how long each puzzle was on
              screen. A random id on the device groups those days together. The
              log has no name, and it is untraceable to you. It is sent on the
              first open of a new day, or when you tap{" "}
              <strong>Send study log now</strong> in Settings.
            </p>
            <p>
              A problem report is sent only when you tap Send. It includes the
              lesson, the puzzle line, the course file name, and the note you
              write (up to 300 characters), under the same anonymous id.
            </p>
            <p>
              These uploads are stored in Google Cloud Firestore for the
              developer of Hanzi Tree. They are encrypted in transit.
            </p>

            <h2>Information stored on your device</h2>
            <p>
              Hanzi Tree stores learning information locally so the app can
              remember your progress and preferences. This may include learning
              progress and scores, mistakes and mastery, practice activity, app
              preferences, tutorial progress, reminder settings, and an optional
              Chinese given name. That name stays on the device.
            </p>
            <p>
              You can erase learning progress with{" "}
              <strong>Settings → Reset all progress</strong>. Uninstalling the
              app removes its locally stored data.
            </p>

            <h2>Notifications</h2>
            <p>
              Practice reminders are off until you turn them on. The app asks
              for notification permission and schedules local notifications on
              the device. Reminder settings are not uploaded.
            </p>

            <h2>Children&apos;s privacy</h2>
            <p>
              The study log is anonymous and untraceable. Hanzi Tree does not
              collect a learner&apos;s name.
            </p>

            <h2>Changes</h2>
            <p>
              This policy may be updated if Hanzi Tree&apos;s data practices
              change. Any update will be published on this page with a revised
              effective date.
            </p>

            <h2>Contact</h2>
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </Prose>
        </div>
      </Container>
    </div>
  );
}
