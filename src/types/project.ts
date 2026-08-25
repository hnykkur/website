export type ProjectStatus = "active" | "shipped" | "ongoing" | "consulting";

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectMeta = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  status: ProjectStatus;
  year: number;
  featured: boolean;
  cover?: string;
  /** How the cover sits in the squircle. Default: cover */
  coverFit?: "cover" | "contain";
  /** Scale inside the squircle to tighten padding on smaller icons. */
  coverZoom?: number;
  /** Large final-product figure on the case study page. */
  productImage?: ProjectImage;
  /** Small WIP montage frames (typically 2–3). */
  wipImages?: ProjectImage[];
  order: number;
};

export type Project = ProjectMeta & {
  content: string;
};
