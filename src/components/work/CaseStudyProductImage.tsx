import Image from "next/image";
import type { ProjectImage } from "@/types/project";

type CaseStudyProductImageProps = {
  image: ProjectImage;
};

export function CaseStudyProductImage({ image }: CaseStudyProductImageProps) {
  const isPlaceholder = image.src.includes("/placeholders/");

  return (
    <figure className="mt-10 sm:mt-12">
      <div
        className={[
          "relative aspect-[16/10] w-full overflow-hidden bg-surface-muted ring-1 ring-border",
          isPlaceholder ? "border border-dashed border-border" : "",
        ].join(" ")}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className={
            isPlaceholder ? "object-contain p-10 sm:p-16" : "object-cover"
          }
          sizes="(max-width: 1024px) 100vw, 64rem"
          priority
        />
        {isPlaceholder ? (
          <span className="pointer-events-none absolute inset-x-0 bottom-4 text-center font-mono text-[11px] tracking-wide text-muted uppercase">
            Final product
          </span>
        ) : null}
      </div>
      {image.caption ? (
        <figcaption className="mt-3 text-sm leading-relaxed text-muted">
          {image.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
