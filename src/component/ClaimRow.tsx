interface ClaimRowProps {
  index?: string;
  claim: string;
  evidence: React.ReactNode;
  className?: string;
}

export function ClaimRow({
  index,
  claim,
  evidence,
  className = "",
}: ClaimRowProps) {
  return (
    <div className={`flex gap-4 md:gap-6 ${className}`}>
      {index && (
        <div className="shrink-0 text-xs font-black text-white/25 md:text-sm">
          {index}
        </div>
      )}

      <div className="flex-1 space-y-3">
        <div className="text-lg font-semibold leading-relaxed text-white md:text-xl">
          {claim}
        </div>

        <div className="text-sm leading-7 text-white/75 md:leading-8">
          {evidence}
        </div>
      </div>
    </div>
  );
}
