export type ProjectStatus = "active" | "shipped" | "ongoing" | "consulting";

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
  order: number;
};

export type Project = ProjectMeta & {
  content: string;
};
