import Image from "next/image";

type ProjectIconProps = {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  fit?: "cover" | "contain";
  /** Scale image inside the squircle to tighten padding (e.g. 1.2). */
  zoom?: number;
  className?: string;
};

const sizes = {
  sm: "size-12",
  md: "size-14 sm:size-16",
  lg: "size-16 sm:size-20",
} as const;

const pixelSizes = {
  sm: 48,
  md: 64,
  lg: 80,
} as const;

export function ProjectIcon({
  src,
  alt,
  size = "md",
  fit = "cover",
  zoom = 1,
  className = "",
}: ProjectIconProps) {
  const px = pixelSizes[size];
  // Slightly tighter crop on small/mid sizes when zoom is requested
  const effectiveZoom =
    zoom > 1 && size !== "lg" ? zoom : zoom > 1 ? Math.min(zoom, 1.12) : 1;

  return (
    <span
      className={[
        "relative inline-block shrink-0 overflow-hidden bg-black shadow-[0_1px_2px_rgba(10,10,10,0.06),0_8px_16px_rgba(10,10,10,0.06)] ring-1 ring-black/5",
        // Android-style squircle (~22% continuous corner)
        "rounded-[22%]",
        sizes[size],
        className,
      ].join(" ")}
      aria-hidden={alt === "" ? true : undefined}
    >
      <Image
        src={src}
        alt={alt}
        width={px}
        height={px}
        className={[
          "size-full",
          fit === "contain" ? "object-contain" : "object-cover",
        ].join(" ")}
        style={
          effectiveZoom !== 1
            ? { transform: `scale(${effectiveZoom})` }
            : undefined
        }
        sizes={`${px}px`}
      />
    </span>
  );
}
