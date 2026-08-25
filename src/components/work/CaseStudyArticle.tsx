import { CaseStudyBody } from "@/components/work/CaseStudyBody";
import { CaseStudyHeader } from "@/components/work/CaseStudyHeader";
import { CaseStudyProductImage } from "@/components/work/CaseStudyProductImage";
import { CaseStudyWipMontage } from "@/components/work/CaseStudyWipMontage";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { TextLink } from "@/components/ui/TextLink";
import { splitCaseStudyContent } from "@/lib/projects";
import type { Project } from "@/types/project";

type CaseStudyArticleProps = {
  project: Project;
  backHref?: string;
  backLabel?: string;
};

export function CaseStudyArticle({
  project,
  backHref = "/work",
  backLabel = "← Work",
}: CaseStudyArticleProps) {
  const { content, ...meta } = project;
  const { beforeOutcome, outcome } = splitCaseStudyContent(content);

  return (
    <article className="py-16 sm:py-24">
      <Container>
        <p className="mb-10 text-sm text-muted">
          <TextLink href={backHref}>{backLabel}</TextLink>
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
