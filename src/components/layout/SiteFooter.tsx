import Link from "next/link";
import { BrandMark } from "@/components/layout/BrandMark";
import { Container } from "@/components/ui/Container";
import { navItems, site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border">
      <Container className="py-12 sm:py-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <BrandMark className="hover:opacity-100" />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              {site.description}
            </p>
            <p className="mt-4 font-mono text-xs tracking-wide text-muted">
              {site.chineseName}{" "}
              <span className="text-muted/70">{site.chinesePinyin}</span>
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <div>
              <p className="mb-3 font-mono text-[11px] tracking-wide text-muted uppercase">
                Navigate
              </p>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-foreground transition-colors hover:text-accent"
                  >
                    Home
                  </Link>
                </li>
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-foreground transition-colors hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-3 font-mono text-[11px] tracking-wide text-muted uppercase">
                Contact
              </p>
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-foreground transition-colors hover:text-accent"
              >
                {site.email}
              </a>
              <p className="mt-2 text-sm text-muted">{site.location}</p>
            </div>
          </div>
        </div>

        <p className="mt-12 font-mono text-[11px] tracking-wide text-muted">
          © {year} {site.name}
        </p>
      </Container>
    </footer>
  );
}
