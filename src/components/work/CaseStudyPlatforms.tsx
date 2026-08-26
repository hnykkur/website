import type { ProjectPlatform } from "@/types/project";

type CaseStudyPlatformsProps = {
  platforms: ProjectPlatform[];
};

function PlatformGlyph({ id }: { id: ProjectPlatform["id"] }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true as const,
    className: "size-5",
  };

  switch (id) {
    case "ios":
      return (
        <svg {...common}>
          <path d="M16.7 12.6c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.7-1.3-.1-2.5.8-3.1.8-.7 0-1.7-.7-2.8-.7-1.4 0-2.8.9-3.5 2.2-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.6 2.2 2.7 2.1 1.1-.1 1.5-.7 2.8-.7s1.7.7 2.8.7c1.2 0 1.9-1 2.6-2 .8-1.1 1.1-2.2 1.1-2.3-.1 0-2.1-.8-2.1-3.2zM14.4 6.3c.6-.7 1-1.7.9-2.7-0.9.1-1.9.6-2.5 1.3-.6.6-1.1 1.7-1 2.6 1 .1 1.9-.5 2.6-1.2z" />
        </svg>
      );
    case "macos":
      return (
        <svg {...common}>
          <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5V15a1.5 1.5 0 0 1-1.5 1.5h-5.2l1.4 2.5h1.8a.75.75 0 0 1 0 1.5H7.5a.75.75 0 0 1 0-1.5h1.8L10.7 16.5H5.5A1.5 1.5 0 0 1 4 15V5.5zm1.5-.5a.5.5 0 0 0-.5.5V15c0 .3.2.5.5.5h13a.5.5 0 0 0 .5-.5V5.5a.5.5 0 0 0-.5-.5h-13z" />
        </svg>
      );
    case "android":
      return (
        <svg {...common}>
          <path d="M17.6 9.5 19 7.1a.4.4 0 0 0-.7-.4l-1.4 2.3A7.4 7.4 0 0 0 12 7.5c-1.8 0-3.5.6-4.9 1.5L5.7 6.7a.4.4 0 1 0-.7.4L6.4 9.5A7.3 7.3 0 0 0 4.5 15v.8c0 .4.3.7.7.7H7v2.3c0 .7.6 1.2 1.2 1.2s1.3-.5 1.3-1.2V16.5h4.1v2.3c0 .7.6 1.2 1.2 1.2s1.3-.5 1.3-1.2V16.5h1.8c.4 0 .7-.3.7-.7V15c0-2.1-.9-4-2.4-5.5zM9.2 13.2a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8zm5.6 0a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8z" />
        </svg>
      );
    case "windows":
      return (
        <svg {...common}>
          <path d="M3 5.2 10.4 4.2v7.1H3V5.2zm8.2-1.2L21 2.5v8.8h-9.8V4zm0 9.3H21v8.8l-9.8-1.4V13.3zM3 12.8h7.4v7.1L3 18.8v-6z" />
        </svg>
      );
    case "web":
      return (
        <svg {...common}>
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm7.4 9h-3.1a13.5 13.5 0 0 0-1.3-5 8.1 8.1 0 0 1 4.4 5zM12 4c.9 0 2.3 1.8 3 5H9c.7-3.2 2.1-5 3-5zM4.6 13h3.1a13.5 13.5 0 0 0 1.3 5 8.1 8.1 0 0 1-4.4-5zm0-2a8.1 8.1 0 0 1 4.4-5 13.5 13.5 0 0 0-1.3 5H4.6zm4.4 2h6c-.7 3.2-2.1 5-3 5s-2.3-1.8-3-5zm6.3 5a13.5 13.5 0 0 0 1.3-5h3.1a8.1 8.1 0 0 1-4.4 5zM14.7 11a13.5 13.5 0 0 0-1.3-5h-2.8a13.5 13.5 0 0 0-1.3 5h5.4z" />
        </svg>
      );
  }
}

const statusCopy: Record<ProjectPlatform["status"], string> = {
  testing: "Testing",
  planned: "Planned",
};

export function CaseStudyPlatforms({ platforms }: CaseStudyPlatformsProps) {
  if (platforms.length === 0) {
    return null;
  }

  return (
    <section className="mt-10 border-t border-border pt-8 sm:mt-12 sm:pt-10">
      <p className="mb-5 font-mono text-[11px] tracking-wide text-muted uppercase">
        Platforms
      </p>
      <ul className="flex flex-wrap gap-x-6 gap-y-4 sm:gap-x-8">
        {platforms.map((platform) => {
          const planned = platform.status === "planned";

          return (
            <li
              key={platform.id}
              className={[
                "flex items-center gap-2.5",
                planned ? "text-muted/70" : "text-foreground",
              ].join(" ")}
            >
              <span
                className={planned ? "text-muted/60" : "text-foreground/80"}
              >
                <PlatformGlyph id={platform.id} />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-medium tracking-tight">
                  {platform.label}
                </span>
                <span className="font-mono text-[10px] tracking-wide text-muted uppercase">
                  {statusCopy[platform.status]}
                </span>
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
