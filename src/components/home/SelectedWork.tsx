import { ProjectPreview } from "@/components/work/ProjectPreview";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import type { ProjectMeta } from "@/types/project";

type SelectedWorkProps = {
  projects: ProjectMeta[];
};

export function SelectedWork({ projects }: SelectedWorkProps) {
  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title="Projects with engineering at the center"
      description="A short overview of current and recent work. Open a project for the full case study."
    >
      <div>
        {projects.map((project, index) => (
          <ProjectPreview key={project.slug} project={project} index={index} />
        ))}
      </div>
      <p className="mt-10 text-sm text-muted">
        <TextLink href="/work">View all work</TextLink>
      </p>
    </Section>
  );
}
