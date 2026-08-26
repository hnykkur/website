import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type {
  Project,
  ProjectImage,
  ProjectMeta,
  ProjectPlatform,
  ProjectPlatformId,
  ProjectPlatformStatus,
  ProjectStatus,
} from "@/types/project";

const projectsDirectory = path.join(process.cwd(), "src/content/projects");

function isStatus(value: unknown): value is ProjectStatus {
  return (
    value === "active" ||
    value === "shipped" ||
    value === "ongoing" ||
    value === "consulting"
  );
}

function parseImage(value: unknown): ProjectImage | undefined {
  if (!value || typeof value !== "object") {
    return undefined;
  }

  const record = value as Record<string, unknown>;
  if (typeof record.src !== "string" || typeof record.alt !== "string") {
    return undefined;
  }

  return {
    src: record.src,
    alt: record.alt,
    caption: typeof record.caption === "string" ? record.caption : undefined,
  };
}

function parseWipImages(value: unknown): ProjectImage[] | undefined {
  if (!Array.isArray(value)) {
    return undefined;
  }

  const images = value
    .map(parseImage)
    .filter((image): image is ProjectImage => Boolean(image))
    .slice(0, 3);

  return images.length > 0 ? images : undefined;
}

function isPlatformId(value: unknown): value is ProjectPlatformId {
  return (
    value === "ios" ||
    value === "macos" ||
    value === "android" ||
    value === "windows" ||
    value === "web"
  );
}

function isPlatformStatus(value: unknown): value is ProjectPlatformStatus {
  return value === "testing" || value === "planned";
}

function parsePlatforms(value: unknown): ProjectPlatform[] | undefined {
  if (!Array.isArray(value)) {
    return undefined;
  }

  const platforms = value.flatMap((item): ProjectPlatform[] => {
    if (!item || typeof item !== "object") {
      return [];
    }
    const record = item as Record<string, unknown>;
    if (!isPlatformId(record.id) || typeof record.label !== "string") {
      return [];
    }
    const status = isPlatformStatus(record.status) ? record.status : "testing";
    return [{ id: record.id, label: record.label, status }];
  });

  return platforms.length > 0 ? platforms : undefined;
}

function parseMeta(slug: string, data: Record<string, unknown>): ProjectMeta {
  const tags = Array.isArray(data.tags)
    ? data.tags.filter((tag): tag is string => typeof tag === "string")
    : [];

  if (typeof data.title !== "string") {
    throw new Error(`Project "${slug}" is missing a title`);
  }
  if (typeof data.summary !== "string") {
    throw new Error(`Project "${slug}" is missing a summary`);
  }
  if (!isStatus(data.status)) {
    throw new Error(`Project "${slug}" has an invalid status`);
  }
  if (typeof data.year !== "number") {
    throw new Error(`Project "${slug}" is missing a year`);
  }
  if (typeof data.featured !== "boolean") {
    throw new Error(`Project "${slug}" is missing featured`);
  }
  if (typeof data.order !== "number") {
    throw new Error(`Project "${slug}" is missing order`);
  }

  return {
    slug,
    title: data.title,
    summary: data.summary,
    tags,
    status: data.status,
    year: data.year,
    featured: data.featured,
    cover: typeof data.cover === "string" ? data.cover : undefined,
    coverFit:
      data.coverFit === "contain" || data.coverFit === "cover"
        ? data.coverFit
        : undefined,
    coverZoom:
      typeof data.coverZoom === "number" && data.coverZoom > 0
        ? data.coverZoom
        : undefined,
    productImage: parseImage(data.productImage),
    wipImages: parseWipImages(data.wipImages),
    wipTitle: typeof data.wipTitle === "string" ? data.wipTitle : undefined,
    toolsImages: parseWipImages(data.toolsImages),
    platforms: parsePlatforms(data.platforms),
    order: data.order,
  };
}

function toMeta(project: Project): ProjectMeta {
  return {
    slug: project.slug,
    title: project.title,
    summary: project.summary,
    tags: project.tags,
    status: project.status,
    year: project.year,
    featured: project.featured,
    cover: project.cover,
    coverFit: project.coverFit,
    coverZoom: project.coverZoom,
    productImage: project.productImage,
    wipImages: project.wipImages,
    wipTitle: project.wipTitle,
    toolsImages: project.toolsImages,
    platforms: project.platforms,
    order: project.order,
  };
}

function readProjectFile(filename: string): Project {
  const slug = filename.replace(/\.mdx$/, "");
  const fullPath = path.join(projectsDirectory, filename);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    ...parseMeta(slug, data),
    content: content.trim(),
  };
}

export function getProjects(): ProjectMeta[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(projectsDirectory)
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => toMeta(readProjectFile(filename)))
    .sort((a, b) => a.order - b.order);
}

export function getFeaturedProjects(): ProjectMeta[] {
  return getProjects().filter((project) => project.featured);
}

export function getProject(slug: string): Project | null {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  return readProjectFile(`${slug}.mdx`);
}

export function getProjectSlugs(): string[] {
  return getProjects().map((project) => project.slug);
}

/** Split case-study MDX around optional Authoring tools and Outcome. */
export function splitCaseStudyContent(content: string): {
  main: string;
  tools: string;
  outcome: string;
} {
  const outcomeMatch = content.match(/^## Outcome\s*$/m);
  const toolsMatch = content.match(/^## Authoring tools\s*$/m);

  const outcomeIndex = outcomeMatch?.index;
  const toolsIndex = toolsMatch?.index;

  if (toolsIndex !== undefined && outcomeIndex !== undefined) {
    return {
      main: content.slice(0, toolsIndex).trim(),
      tools: content.slice(toolsIndex, outcomeIndex).trim(),
      outcome: content.slice(outcomeIndex).trim(),
    };
  }

  if (outcomeIndex !== undefined) {
    return {
      main: content.slice(0, outcomeIndex).trim(),
      tools: "",
      outcome: content.slice(outcomeIndex).trim(),
    };
  }

  return { main: content, tools: "", outcome: "" };
}
