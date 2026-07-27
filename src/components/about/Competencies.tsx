import { competencies, engagementModel } from "@/lib/site";

export function Competencies() {
  return (
    <div className="space-y-16">
      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Competencies
        </h2>
        <ul className="mt-8 divide-y divide-border border-y border-border">
          {competencies.map((item) => (
            <li
              key={item.title}
              className="grid gap-2 py-6 sm:grid-cols-[14rem_1fr] sm:gap-10"
            >
              <h3 className="text-base font-medium text-foreground">
                {item.title}
              </h3>
              <p className="text-base leading-relaxed text-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          How engagements work
        </h2>
        <ul className="mt-8 grid gap-8 sm:grid-cols-3">
          {engagementModel.map((item) => (
            <li key={item.title}>
              <h3 className="text-base font-medium text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
