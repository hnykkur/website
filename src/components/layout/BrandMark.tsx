import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

type BrandMarkProps = {
  href?: string;
  onClick?: () => void;
  className?: string;
  /** Show wordmark next to the icon. Default true. */
  showWordmark?: boolean;
};

export function BrandMark({
  href = "/",
  onClick,
  className = "",
  showWordmark = true,
}: BrandMarkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={[
        "inline-flex items-center gap-2.5 transition-opacity hover:opacity-70",
        className,
      ].join(" ")}
      aria-label={site.name}
    >
      <span className="relative size-7 shrink-0 overflow-hidden rounded-[22%] bg-black ring-1 ring-black/10 sm:size-8">
        <Image
          src="/images/brand/hnykkur-logo.png"
          alt=""
          width={32}
          height={32}
          className="size-full object-cover"
          // Tighter crop so the step response reads at header size
          style={{ transform: "scale(1.28)" }}
          priority
        />
      </span>
      {showWordmark && (
        <span className="text-sm font-semibold tracking-tight text-foreground">
          {site.name}
        </span>
      )}
    </Link>
  );
}
