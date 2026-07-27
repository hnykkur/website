import type { ProjectMeta } from "@/types/project";
import { Tag } from "@/components/ui/Tag";
import { ProjectIcon } from "@/components/work/ProjectIcon";

type CaseStudyHeaderProps = {
  project: ProjectMeta;
};

const statusLabel: Record<ProjectMeta["status"], string> = {
  active: "Active",
  shipped: "Shipped",
  ongoing: "Ongoing",
  consulting: "Consulting",
};

export function CaseStudyHeader({ project }: CaseStudyHeaderProps) {
  return (
    <header className="border-b border-border pb-10 sm:pb-14">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
        {project.cover && (
          <ProjectIcon
            src={project.cover}
            alt={`${project.title} icon`}
            size="lg"
            fit={project.coverFit ?? "cover"}
            zoom={project.coverZoom ?? 1}
          />
        )}
        <div className="min-w-0 flex-1">
          <p className="mb-4 font-mono text-xs tracking-wide text-muted uppercase">
            Case study · {project.year} · {statusLabel[project.status]}
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {project.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
