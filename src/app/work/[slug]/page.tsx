import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyBody } from "@/components/work/CaseStudyBody";
import { CaseStudyHeader } from "@/components/work/CaseStudyHeader";
import { CaseStudyProductImage } from "@/components/work/CaseStudyProductImage";
import { CaseStudyWipMontage } from "@/components/work/CaseStudyWipMontage";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { TextLink } from "@/components/ui/TextLink";
import {
  getProject,
  getProjectSlugs,
  splitCaseStudyContent,
} from "@/lib/projects";

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

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const { content, ...meta } = project;
  const { beforeOutcome, outcome } = splitCaseStudyContent(content);

  return (
    <article className="py-16 sm:py-24">
      <Container>
        <p className="mb-10 text-sm text-muted">
          <TextLink href="/work">← Work</TextLink>
        </p>
        <CaseStudyHeader project={meta} />
        {meta.productImage ? (
          <CaseStudyProductImage image={meta.productImage} />
        ) : null}
        <div className="mt-12 sm:mt-16">
          <CaseStudyBody source={beforeOutcome} />
          {meta.wipImages ? (
            <CaseStudyWipMontage images={meta.wipImages} />
          ) : null}
          {outcome ? <CaseStudyBody source={outcome} /> : null}
        </div>
        <div className="mt-16 border-t border-border pt-10 sm:mt-20">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Discuss a similar project
          </h2>
          <p className="mt-3 max-w-lg text-base leading-relaxed text-muted">
            If you are building something in a related space, get in touch.
          </p>
          <div className="mt-6">
            <Button href="/contact">Get in touch</Button>
          </div>
        </div>
      </Container>
    </article>
  );
}
