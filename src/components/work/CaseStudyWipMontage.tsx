import Image from "next/image";
import type { ProjectImage } from "@/types/project";

type CaseStudyWipMontageProps = {
  images: ProjectImage[];
};

export function CaseStudyWipMontage({ images }: CaseStudyWipMontageProps) {
  if (images.length === 0) {
    return null;
  }

  return (
    <section className="mt-12 sm:mt-14" aria-labelledby="wip-heading">
      <h2
        id="wip-heading"
        className="mb-5 text-[1.375rem] font-semibold tracking-tight text-foreground"
      >
        Work in progress
      </h2>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
        {images.map((image) => {
          const isPlaceholder = image.src.includes("/placeholders/");

          return (
            <li key={`${image.src}-${image.alt}`}>
              <figure>
                <div
                  className={[
                    "relative aspect-[4/3] w-full overflow-hidden bg-surface-muted ring-1 ring-border",
                    isPlaceholder ? "border border-dashed border-border" : "",
                  ].join(" ")}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className={
                      isPlaceholder
                        ? "object-contain p-6 sm:p-8"
                        : "object-cover"
                    }
                    sizes="(max-width: 640px) 100vw, 20rem"
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
