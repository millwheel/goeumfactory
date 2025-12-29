export function YouTubeEmbed({ slug, title }: {
    slug: string;
    title: string;
}) {
    return (
        <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm">
            <div className="aspect-video w-full">
                <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${slug}`}
                    title={title}
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>
        </div>
    );
}