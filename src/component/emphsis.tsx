export function Emphasis({ children }: { children: React.ReactNode }) {
    return (
        <span className="rounded-md bg-white/10 px-2 py-0.5 font-semibold text-white">
      {children}
    </span>
    );
}