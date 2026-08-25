export const site = {
  name: "Hnykkur",
  chineseName: "突变",
  chinesePinyin: "tūbiàn",
  description:
    "Icelandic engineering for embedded systems, electronics, software, and product development.",
  url: "https://hnykkur.com",
  email: "contact@hnykkur.com",
  location: "Iceland",
} as const;

export const navItems = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const capabilities = [
  "Embedded systems",
  "Electronics",
  "Software",
  "Product development",
  "Consulting",
] as const;

export const competencies = [
  {
    title: "Hardware & electronics",
    description:
      "Circuit design, PCB bring-up, sensor integration, and power-conscious product electronics.",
  },
  {
    title: "Firmware & embedded",
    description:
      "Real-time firmware, device drivers, communication protocols, and reliable field systems.",
  },
  {
    title: "Software",
    description:
      "Application software, tooling, and interfaces that sit cleanly on top of physical products.",
  },
  {
    title: "Product development",
    description:
      "End-to-end development from concept and architecture through prototype and iteration.",
  },
] as const;

export const engagementModel = [
  {
    title: "Consulting",
    description:
      "Focused technical guidance on architecture, electronics, and product decisions.",
  },
  {
    title: "Build",
    description:
      "Hands-on development of embedded systems, electronics, and supporting software.",
  },
  {
    title: "Collaborate",
    description:
      "Embedded partnership with your team through design, prototype, and delivery.",
  },
] as const;
