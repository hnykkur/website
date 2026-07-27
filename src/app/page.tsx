import { Capabilities } from "@/components/home/Capabilities";
import { ClosingCta } from "@/components/home/ClosingCta";
import { Hero } from "@/components/home/Hero";
import { SelectedWork } from "@/components/home/SelectedWork";
import { getFeaturedProjects } from "@/lib/projects";

export default function HomePage() {
  const projects = getFeaturedProjects();

  return (
    <>
      <Hero />
      <SelectedWork projects={projects} />
      <Capabilities />
      <ClosingCta />
    </>
  );
}
