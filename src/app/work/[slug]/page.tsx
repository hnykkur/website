import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyArticle } from "@/components/work/CaseStudyArticle";
import { getProject, getProjectSlugs } from "@/lib/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    return { title: "Project" };
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

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyArticle project={project} />;
}
