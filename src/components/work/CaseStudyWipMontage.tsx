import Image from "next/image";
import type { ProjectImage } from "@/types/project";

type CaseStudyWipMontageProps = {
  images: ProjectImage[];
  title?: string;
  /** Portrait app frames (default) or wide desktop/tool screenshots. */
  layout?: "portrait" | "wide";
};

export function CaseStudyWipMontage({
  images,
  title,
  layout = "portrait",
}: CaseStudyWipMontageProps) {
  if (images.length === 0) {
    return null;
  }

  const wide = layout === "wide";
  const columns =
    images.length === 1
      ? "grid-cols-1"
      : images.length === 2
        ? "grid-cols-1 sm:grid-cols-2"
        : "grid-cols-1 sm:grid-cols-3";

  return (
    <section
      className="mt-8 sm:mt-10"
      aria-labelledby={title ? "gallery-heading" : undefined}
      aria-label={title ? undefined : "Additional images"}
    >
      {title ? (
        <h2
          id="gallery-heading"
          className="mb-5 text-[1.375rem] font-semibold tracking-tight text-foreground"
        >
          {title}
        </h2>
      ) : null}
      <ul className={`grid ${columns} gap-4 sm:gap-5`}>
        {images.map((image) => {
          const isPlaceholder = image.src.includes("/placeholders/");

          return (
            <li key={`${image.src}-${image.alt}`}>
              <figure>
                <div
                  className={[
                    "relative w-full overflow-hidden ring-1 ring-border",
                    wide ? "aspect-[16/10]" : "aspect-[3/4]",
                    isPlaceholder
                      ? "border border-dashed border-border bg-surface-muted"
                      : "bg-black",
                  ].join(" ")}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className={
                      isPlaceholder
                        ? "object-contain p-6 sm:p-8"
                        : "object-contain"
                    }
                    sizes={
                      wide
                        ? "(max-width: 640px) 100vw, 50vw"
                        : "(max-width: 640px) 100vw, 20rem"
                    }
                  />
                  {isPlaceholder ? (
                    <span className="pointer-events-none absolute inset-x-0 bottom-2.5 text-center font-mono text-[10px] tracking-wide text-muted uppercase">
                      WIP
                    </span>
                  ) : null}
                </div>
                {image.caption ? (
                  <figcaption className="mt-2 text-sm leading-snug text-muted">
                    {image.caption}
                  </figcaption>
                ) : null}
              </figure>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
