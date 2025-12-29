interface StoryBlockProps {
  eyebrow?: string;
  headline?: string;
  body?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export function StoryBlock({
  eyebrow,
  headline,
  body,
  children,
  className = "",
}: StoryBlockProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
          {eyebrow}
        </div>
      )}

      {headline && (
        <h3 className="text-xl font-semibold leading-relaxed tracking-tight text-white md:text-2xl">
          {headline}
        </h3>
      )}

      {body && (
        <div className="text-sm leading-8 text-white/75 md:text-base md:leading-8">
          {body}
        </div>
      )}

      {children}
    </div>
  );
}
