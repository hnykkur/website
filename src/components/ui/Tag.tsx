type TagProps = {
  children: string;
  className?: string;
};

export function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`inline-flex items-center font-mono text-[11px] tracking-wide text-muted uppercase ${className}`}
    >
      {children}
    </span>
  );
}
