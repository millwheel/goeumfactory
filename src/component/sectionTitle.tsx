export function SectionTitle({
                          kicker,
                          title,
                          desc,
                      }: {
    kicker?: string;
    title: string;
    desc?: string;
}) {
    return (
        <div className="space-y-3">
            {kicker ? (
                <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
                    {kicker}
                </div>
            ) : null}
            <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                {title}
            </h2>
            {desc ? <p className="text-white/75">{desc}</p> : null}
        </div>
    );
}