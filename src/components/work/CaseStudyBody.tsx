import { MDXRemote } from "next-mdx-remote/rsc";
import { Prose } from "@/components/ui/Prose";

type CaseStudyBodyProps = {
  source: string;
};

export function CaseStudyBody({ source }: CaseStudyBodyProps) {
  return (
    <Prose>
      <MDXRemote source={source} />
    </Prose>
  );
}
