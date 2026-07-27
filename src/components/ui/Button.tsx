import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-foreground text-background hover:bg-foreground/85 focus-visible:outline-foreground",
  secondary:
    "border border-border bg-surface text-foreground hover:bg-surface-muted focus-visible:outline-accent",
  ghost:
    "text-foreground hover:bg-surface-muted focus-visible:outline-accent",
};

function buttonClassName(variant: Variant, className = "") {
  return [
    "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors",
    "focus-visible:outline-2 focus-visible:outline-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: Variant;
  external?: boolean;
};

type ButtonElementProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
  children: ReactNode;
  variant?: Variant;
};

type ButtonProps = ButtonLinkProps | ButtonElementProps;

export function Button(props: ButtonProps) {
  if ("href" in props && props.href) {
    const { href, children, className, variant = "primary", external } = props;
    const classNames = buttonClassName(variant, className);

    if (external) {
      return (
        <a
          href={href}
          className={classNames}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classNames}>
        {children}
      </Link>
    );
  }

  const { children, className, variant = "primary", ...rest } = props;

  return (
    <button className={buttonClassName(variant, className)} {...rest}>
      {children}
    </button>
  );
}
