export const projectTypes = [
  "Embedded systems",
  "Electronics",
  "Software",
  "Product development",
  "Consulting",
  "Other",
] as const;

export type ProjectType = (typeof projectTypes)[number];
