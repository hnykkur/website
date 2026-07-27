import Link from "next/link";
import type { ProjectMeta } from "@/types/project";
import { Tag } from "@/components/ui/Tag";
import { ProjectIcon } from "@/components/work/ProjectIcon";

type ProjectPreviewProps = {
  project: ProjectMeta;
  index?: number;
};

const statusLabel: Record<ProjectMeta["status"], string> = {
  active: "Active",
  shipped: "Shipped",
  ongoing: "Ongoing",
  consulting: "Consulting",
};

export function ProjectPreview({ project, index }: ProjectPreviewProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group grid gap-4 border-t border-border py-8 transition-colors first:border-t-0 first:pt-0 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-8"
    >
      <div className="flex items-center gap-4 sm:gap-6">
        {project.cover ? (
          <ProjectIcon
            src={project.cover}
            alt=""
            size="md"
            fit={project.coverFit ?? "cover"}
            zoom={project.coverZoom ?? 1}
            className="transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <span className="font-mono text-xs tracking-wide text-muted">
            {typeof index === "number"
              ? String(index + 1).padStart(2, "0")
              : project.year}
          </span>
        )}
      </div>
      <div>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-2xl">
            {project.title}
          </h3>
          {project.cover && (
            <span className="font-mono text-xs tracking-wide text-muted">
              {typeof index === "number"
                ? String(index + 1).padStart(2, "0")
                : project.year}
            </span>
          )}
        </div>
        <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted">
          {project.summary}
        </p>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
      <span className="font-mono text-xs tracking-wide text-muted">
        {statusLabel[project.status]}
      </span>
    </Link>
  );
}
