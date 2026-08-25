import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyArticle } from "@/components/work/CaseStudyArticle";
import { getProject } from "@/lib/projects";

const HANZI_TREE_SLUG = "hanzi-tree";

export function generateMetadata(): Metadata {
  const project = getProject(HANZI_TREE_SLUG);
  if (!project) {
    return { title: "Hanzi Tree" };
  }

  const ogImage = project.productImage?.src ?? project.cover;

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
  };
}

export default function HanziTreePage() {
  const project = getProject(HANZI_TREE_SLUG);

  if (!project) {
    notFound();
  }

  return (
    <CaseStudyArticle
      project={project}
      backHref="/work"
      backLabel="← Work"
    />
  );
}
