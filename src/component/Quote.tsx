interface QuoteProps {
  children: React.ReactNode;
  className?: string;
}

export function Quote({ children, className = "" }: QuoteProps) {
  return (
    <div className={`border-l-2 border-white/20 pl-5 ${className}`}>
      <p className="text-base font-medium leading-relaxed text-white md:text-lg">
        {children}
      </p>
    </div>
  );
}
