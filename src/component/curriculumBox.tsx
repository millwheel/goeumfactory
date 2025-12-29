import {CURRICULUM} from "@/data/curriculum";

function PartPill({ text }: { text: string }) {
    return (
        <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-white/85">
      {text}
    </span>
    );
}

function Dot() {
    return <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />;
}

export function CurriculumBox() {
    return (
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-sm md:p-6">
            {/* 상단 요약 바 (단색, 그라데이션 없음) */}
            <div className="flex flex-col gap-3 rounded-xl border border-white/10 bg-[#020518]/45 p-4 md:flex-row md:items-center md:justify-between">
                <div className="text-sm font-semibold text-white">
                    커리큘럼 <span className="underline underline-offset-4">17강</span> 구성
                </div>
                <div className="text-xs text-white/65">
                    완강 → 연습 → <span className="text-white/85 font-semibold">1:1 레슨</span>으로 결과 고정
                </div>
            </div>

            {/* 리스트를 카드 그리드로 */}
            <ol className="mt-5 grid gap-3 md:grid-cols-2">
                {CURRICULUM.map((item) => (
                    <li
                        key={item.part}
                        className="group rounded-xl border border-white/10 bg-white/5 p-4 transition
                       hover:bg-white/[0.075] hover:border-white/15"
                    >
                        <div className="flex items-start gap-3">
                            <PartPill text={item.part} />
                            <div className="min-w-0">
                                <div className="text-sm font-semibold leading-6 text-white">
                                    {item.title}
                                </div>

                                <div className="mt-2 flex items-start gap-2 text-sm leading-6 text-white/70">
                                    <Dot />
                                    <span className="min-w-0">{item.bullet}</span>
                                </div>

                                {/* 하단 미세한 구분선 */}
                                <div className="mt-3 h-px w-full bg-white/10" />

                                {/* 메타 라벨 (장식이지만 고급스럽게) */}
                                <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-white/60">
                  <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1">
                    핵심 개념
                  </span>
                                    <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1">
                    실습 포인트
                  </span>
                                    <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1">
                    적용 루틴
                  </span>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ol>

            {/* 주의사항을 “안내 카드”로 업그레이드 */}
            <div className="mt-6 rounded-xl border border-white/10 bg-[#020518]/45 p-5">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-2">
                        {/* 아이콘 대용 (그라데이션 없이 단색) */}
                        <span className="grid h-7 w-7 place-items-center rounded-lg bg-white/10 text-xs font-black">
              !
            </span>
                        <div className="text-sm font-semibold text-white">※주의사항※</div>
                    </div>
                    <div className="text-xs text-white/60">학습 효율을 위한 필독</div>
                </div>

                <div className="mt-3 text-sm leading-7 text-white/75">
                    한 강의당 <span className="font-semibold text-white">최소 3번 이상</span>씩 시청해주시기 바랍니다.
                    쉬운 내용이라도 하나하나 곱씹어 보시면서 최대한 깊게 이해한 상태로 1:1 레슨을 진행하셔야
                    레슨의 질이 좋을 수 밖에 없습니다.
                </div>

                {/* 3-step 박스 (단색) */}
                <div className="mt-4 grid gap-2 md:grid-cols-3">
                    <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                        <div className="text-xs font-semibold text-white">Step 1</div>
                        <div className="mt-1 text-xs text-white/70">강의 3회 시청</div>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                        <div className="text-xs font-semibold text-white">Step 2</div>
                        <div className="mt-1 text-xs text-white/70">충분히 연습 & 체크</div>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                        <div className="text-xs font-semibold text-white">Step 3</div>
                        <div className="mt-1 text-xs text-white/70">1:1로 결과 고정</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
