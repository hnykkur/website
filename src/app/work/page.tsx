import type { Metadata } from "next";
import { ProjectPreview } from "@/components/work/ProjectPreview";
import { Container } from "@/components/ui/Container";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected engineering projects from Hnykkur — embedded systems, software, robotics, and electronics consulting.",
};

export default function WorkPage() {
  const projects = getProjects();

  return (
    <div className="py-16 sm:py-24">
      <Container>
        <header className="mb-14 max-w-2xl sm:mb-20">
          <p className="mb-3 font-mono text-xs tracking-wide text-muted uppercase">
            Work
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Projects
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Case studies across embedded systems, software products, robotics,
            and electronics consulting.
          </p>
        </header>

        <div>
          {projects.map((project, index) => (
            <ProjectPreview
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
