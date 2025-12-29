"use client";

import { Phone } from "lucide-react";

export function Contact() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
      {/* 버튼 영역 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Kakao */}
        <button className="flex items-center justify-center gap-3 rounded-xl bg-[#FEE500] px-6 py-4 text-base font-semibold text-black transition hover:bg-[#F5DC00] active:scale-[0.98]">
          카카오톡 id: kmkssik
        </button>

        {/* Phone */}
        <a
          href="tel:01073445820"
          className="flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-base font-semibold text-white transition hover:border-white/40 hover:bg-white/15 active:scale-[0.98]"
        >
          <Phone size={18} strokeWidth={2} className="opacity-80" />
          전화 상담
        </a>
      </div>
    </div>
  );
}
