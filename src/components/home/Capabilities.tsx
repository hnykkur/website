import { capabilities } from "@/lib/site";
import { Section } from "@/components/ui/Section";

export function Capabilities() {
  return (
    <Section
      eyebrow="Capabilities"
      title="Engineering across the stack"
      description="From circuitry and firmware to product software and consulting."
    >
      <ul className="flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-8">
        {capabilities.map((item) => (
          <li
            key={item}
            className="font-mono text-sm tracking-wide text-foreground"
          >
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
