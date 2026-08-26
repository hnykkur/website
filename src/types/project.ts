export type ProjectStatus = "active" | "shipped" | "ongoing" | "consulting";

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectPlatformId =
  | "ios"
  | "macos"
  | "android"
  | "windows"
  | "web";

export type ProjectPlatformStatus = "testing" | "planned";

export type ProjectPlatform = {
  id: ProjectPlatformId;
  label: string;
  status: ProjectPlatformStatus;
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
  /** Heading above the WIP / gallery montage. Default: Work in progress */
  wipTitle?: string;
  /** Optional secondary gallery (e.g. authoring tools). */
  toolsImages?: ProjectImage[];
  /** Optional supported / planned platforms. */
  platforms?: ProjectPlatform[];
  order: number;
};

export type Project = ProjectMeta & {
  content: string;
};
