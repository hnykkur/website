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
            Effective date: August 25, 2026
          </p>
        </header>

        <div className="mt-12 sm:mt-16">
          <Prose>
            <p>
              Hanzi Tree is a Chinese language learning application developed by{" "}
              <strong>Hnykkur</strong>.
            </p>

            <h2>Information collection</h2>
            <p>
              Hanzi Tree does not collect, transmit, or share personal
              information or usage data.
            </p>
            <p>
              The app does not require an account or sign-in and does not use
              analytics, advertising, crash-reporting, or tracking services.
            </p>

            <h2>Information stored on your device</h2>
            <p>
              Hanzi Tree stores learning information locally on your device so
              that the app can remember your progress and preferences. This may
              include:
            </p>
            <ul>
              <li>learning progress and scores</li>
              <li>mistakes and mastery information</li>
              <li>practice activity</li>
              <li>app preferences</li>
              <li>tutorial progress</li>
              <li>reminder settings</li>
            </ul>
            <p>
              This information remains on your device and is not transmitted to
              Hnykkur or any third party.
            </p>
            <p>
              You can delete this information using{" "}
              <strong>Settings → Reset all progress</strong>. Uninstalling the
              app also removes its locally stored application data.
            </p>

            <h2>Notifications</h2>
            <p>
              Hanzi Tree can optionally provide local practice reminders.
              Notifications are disabled by default and require your permission
              before they are enabled.
            </p>
            <p>
              Reminder scheduling and related information are processed locally
              on your device and are not sent to Hnykkur.
            </p>

            <h2>Internet services and third parties</h2>
            <p>
              Hanzi Tree does not use a server or cloud service to store user
              information.
            </p>
            <p>
              Learning content, fonts, graphics, and speech audio used by the
              app are included with the application and do not require user
              information to be sent to an external service.
            </p>
            <p>
              Hanzi Tree does not contain advertising or advertising tracking.
            </p>

            <h2>Children&apos;s privacy</h2>
            <p>
              Hanzi Tree does not knowingly collect personal information from
              children or adults. Because user information is not collected or
              transmitted, Hnykkur does not maintain personal profiles of
              learners.
            </p>

            <h2>Changes to this privacy policy</h2>
            <p>
              This policy may be updated if Hanzi Tree&apos;s features or data
              practices change. Any updated policy will be published on this
              page with a revised effective date.
            </p>

            <h2>Contact</h2>
            <p>
              If you have questions about this privacy policy or Hanzi
              Tree&apos;s privacy practices, please contact Hnykkur through the
              contact information provided at{" "}
              <a href={site.url}>hnykkur.com</a>.
            </p>
          </Prose>
        </div>
      </Container>
    </div>
  );
}
