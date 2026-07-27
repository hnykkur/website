type BioProps = {
  className?: string;
};

export function Bio({ className = "" }: BioProps) {
  return (
    <div className={className}>
      <p className="mb-3 font-mono text-xs tracking-wide text-muted uppercase">
        About
      </p>
      <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        Engineering from Iceland
      </h1>
      <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-muted sm:text-lg">
        <p>
          Hnykkur is an Icelandic engineering practice focused on embedded
          systems, electronics, software, and product development.
        </p>
        <p>
          The work is hands-on and technical — bringing ideas from schematic and
          architecture through prototype, firmware, and the software that makes
          a product usable.
        </p>
        <p>
          The secondary brand{" "}
          <span className="text-foreground">突变</span>{" "}
          <span className="font-mono text-sm">tūbiàn</span> reflects a quiet
          international identity alongside the Icelandic name.
        </p>
      </div>
    </div>
  );
}
