interface SectionShellProps {
  children: React.ReactNode;
  id?: string;
  tone?: 0 | 1 | 2;
  className?: string;
}

const toneStyles = {
  0: "",
  1: "bg-white/[0.02]",
  2: "bg-white/[0.03]",
};

export function SectionShell({
  children,
  id,
  tone = 0,
  className = "",
}: SectionShellProps) {
  const baseClasses =
    "mx-auto w-full max-w-3xl px-4 py-14 md:py-20 border-t border-white/10";
  const toneClass = toneStyles[tone];

  return (
    <section id={id} className={`${baseClasses} ${toneClass} ${className}`}>
      {children}
    </section>
  );
}
