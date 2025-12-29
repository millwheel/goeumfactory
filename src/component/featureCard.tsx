export function FeatureCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm">
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm leading-7 text-white/75">{children}</div>
    </div>
  );
}
