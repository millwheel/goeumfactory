import { CURRICULUM } from "@/data/curriculum";

export function CurriculumBox() {
  return (
    <div className="mt-8 rounded-2xl border border-white/5 bg-white/[0.03] p-4 shadow-sm md:p-6">
      {/* 상단 요약 바 */}
      <div className="rounded-xl border border-white/10 bg-[#020518]/45 p-4">
        <div className="flex flex-col gap-3">
          <div className="text-sm font-semibold text-white">
            커리큘럼 <span className="underline underline-offset-4">17강</span>{" "}
            구성
          </div>
          <div className="text-xs leading-relaxed text-white/70">
            이 강의가 해결하는 것: 고음 발성의 원리 이해 · 실전 적용 루틴 습득 ·
            1:1 레슨으로 결과 고정
          </div>
        </div>
      </div>

      {/* 리스트 */}
      <ol className="mt-5 space-y-3">
        {CURRICULUM.map((item) => (
          <li
            key={item.part}
            className="group rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-white/15 hover:bg-white/[0.075]"
          >
            <div className="flex items-start gap-3">
              <PartPill text={item.part} />
              <div className="min-w-0 flex-1">
                <div className="text-sm font-semibold leading-6 text-white">
                  {item.title}
                </div>

                <div className="mt-2 flex items-start gap-2 text-sm leading-6 text-white/70">
                  <Dot />
                  <span className="min-w-0">{item.bullet}</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>

      {/* 주의사항 카드 */}
      <div className="mt-6 rounded-xl border border-white/10 bg-[#020518]/45 p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-white/10 text-xs font-black">
              !
            </span>
            <div className="text-sm font-semibold text-white">※주의사항※</div>
          </div>
          <div className="text-xs text-white/60">학습 효율을 위한 필독</div>
        </div>

        <div className="mt-3 text-sm leading-7 text-white/75">
          한 강의당{" "}
          <span className="font-semibold text-white">최소 3번 이상</span>씩
          시청해주시기 바랍니다. 쉬운 내용이라도 하나하나 곱씹어 보시면서 최대한
          깊게 이해한 상태로 1:1 레슨을 진행하셔야 레슨의 질이 좋을 수 밖에
          없습니다.
        </div>

        {/* 3-step */}
        <div className="mt-4 space-y-2">
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

function PartPill({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-white/85">
      {text}
    </span>
  );
}

function Dot() {
  return (
    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
  );
}
