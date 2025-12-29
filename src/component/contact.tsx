"use client";

export function Contact() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Kakao */}
        <button
          onClick={() => window.open("https://open.kakao.com/o/a", "_blank")}
          className="flex items-center justify-center gap-3 rounded-xl bg-[#FEE500] px-6 py-4 text-base font-semibold text-black transition hover:bg-[#F5DC00] active:scale-[0.98]"
        >
          <img
            src="/icons/kakaotalk.png"
            alt="카카오톡"
            className="h-6 w-6 object-contain"
          />
          카카오톡 상담
        </button>

        {/* Phone */}
        <a
          href="tel:01073445820"
          className="flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-base font-semibold text-white transition hover:border-white/40 hover:bg-white/15 active:scale-[0.98]"
        >
          <span className="text-lg">📞</span>
          전화 상담
        </a>
      </div>
    </div>
  );
}
