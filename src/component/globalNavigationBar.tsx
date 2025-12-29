export function GlobalNavigationBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#040814]/75 backdrop-blur">
      <div className="mx-auto w-full max-w-3xl px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Brand */}
          <div className="min-w-0">
            <div className="text-sm font-semibold text-white">고음팩토리</div>
            <div className="text-xs text-white/60">
              대한민국에서 가장 쉬운 고음뚫기
            </div>
          </div>

          {/* Links (desktop) */}
          <nav className="items-center gap-2 flex">
            <a
              href="#curriculum"
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/80 hover:bg-white/10 hover:text-white"
            >
              커리큘럼
            </a>

            <a
              href="#contact"
              className="rounded-xl bg-white px-4 py-2 text-xs font-bold text-[#06102a] hover:bg-white/90"
            >
              문의하기
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
