import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyArticle } from "@/components/work/CaseStudyArticle";
import { getProject } from "@/lib/projects";
import { site } from "@/lib/site";

const HANZI_TREE_SLUG = "hanzi-tree";

export function generateMetadata(): Metadata {
  const project = getProject(HANZI_TREE_SLUG);
  if (!project) {
    return { title: "Hanzi Tree" };
  }

  const ogImage = project.ogImage ?? project.cover;
  const ogImages = ogImage
    ? [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${project.title} logo`,
        },
      ]
    : undefined;

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `${site.url}/hanzitree`,
      type: "website",
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
      images: ogImage ? [ogImage] : undefined,
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
