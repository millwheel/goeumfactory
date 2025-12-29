"use client";

export function PricingCTA() {
  return (
    <button
      onClick={() => window.open("https://open.kakao.com/o/a", "_blank")}
      className="inline-flex items-center gap-3 rounded-xl bg-[#FEE500] px-8 py-4 text-base font-semibold text-black transition hover:bg-[#F5DC00] active:scale-[0.98]"
    >
      <img
        src="/icons/kakaotalk.png"
        alt="카카오톡"
        className="h-6 w-6 object-contain"
      />
      카카오톡으로 문의하기
    </button>
  );
}
