import Image from "next/image";
import {YoutubeSlug} from "@/data/youtubeLink";
import {YouTubeEmbed} from "@/component/youtubeEmbed";
import {Emphasis} from "@/component/emphsis";
import {SectionTitle} from "@/component/sectionTitle";
import {CurriculumBox} from "@/component/curriculumBox";

function FeatureCard({
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

export default function HomePage() {
  return (
      <main className="min-h-screen bg-gradient-to-b from-[#07102a] via-[#050b1c] to-[#040814] text-white">
        {/* Top Bar */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#040814]/70 backdrop-blur">
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-sm font-black">
                고
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold">고음팩토리</div>
                <div className="text-xs text-white/60">
                  대한민국에서 가장 쉬운 고음뚫기
                </div>
              </div>
            </div>

            <a
                href="#contact"
                className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#06102a] hover:bg-white/90"
            >
              문의하기
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="mx-auto w-full max-w-5xl px-4 pb-10 pt-10 md:pb-14 md:pt-14">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
                사이트 로고(메시지 중심) · 고음팩토리
              </div>

              <h1 className="text-3xl font-black tracking-tight md:text-5xl">
                대한민국에서 가장 쉬운 <span className="text-white">고음뚫기</span>
              </h1>

              <div className="space-y-2 text-white/80">
                <p className="text-lg font-semibold text-white">
                  (메인 상단문구)
                </p>
                <p>무슨 짓을 해도 어떤 선생님을 찾아가도</p>
                <p>
                  <Emphasis>고음이 뚫리지 않는다면…</Emphasis>
                </p>
                <p className="text-white font-semibold">잘 찾아오셨습니다</p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                    href="#curriculum"
                    className="rounded-xl bg-white px-5 py-3 text-center text-sm font-semibold text-[#06102a] hover:bg-white/90"
                >
                  커리큘럼 보기
                </a>
                <a
                    href="#proof"
                    className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-white/10"
                >
                  Before/After 보기
                </a>
              </div>

              <div className="text-xs leading-6 text-white/60">
                * 원페이지 구성: 메시지 중심 / 영상 임베드 / 커리큘럼 / 가격·문의 CTA
              </div>
            </div>

            <div className="space-y-4">
              <YouTubeEmbed slug={YoutubeSlug.intro} title="고음팩토리 소개 영상" />
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/15 bg-white/10">
                    {/* 프로필사진 교체: /public/profile.jpg 넣고 아래 src 변경 */}
                    <Image
                        src="/profile.jpg"
                        alt="대표원장 조승희"
                        fill
                        className="object-cover"
                        sizes="48px"
                        priority={false}
                    />
                  </div>
                  <div className="leading-tight">
                    <div className="text-sm font-semibold">
                      대표원장 조승희
                    </div>
                    <div className="text-xs text-white/70">
                      수많은 Before/After로 ‘고음 잘뚫기’로 증명된 트레이너
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-sm leading-7 text-white/75">
                  안녕하세요. 수많은 before after로 대한민국에서 고음 잘뚫기로
                  증명된 고음팩토리 대표원장 조승희입니다.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proof */}
        <section id="proof" className="mx-auto w-full max-w-5xl px-4 py-10 md:py-14">
          <SectionTitle
              kicker="증명 · Before/After"
              title="‘안 되던 고음’이 ‘되게 만드는’ 근거"
              desc="타고난 사람이 아니라, 안 되던 사람이 뚫어낸 방식으로."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <FeatureCard title="저는 최고음역 2옥타브 솔# 고음불가였습니다.">
              위 영상에서 보셨듯 저는 최고음역{" "}
              <Emphasis>2옥타브 솔# 고음불가</Emphasis> 였습니다.
              <div className="mt-3 text-white/70">
                오죽하면 친구가 “넌 고음이 안되니까 그냥 랩을 해봐” 라는 말을 들을
                정도였으니까요.
              </div>
            </FeatureCard>

            <FeatureCard title="지금은 박효신 · 이진성 · 이수 · 더크로스를 시원하게">
              하지만 지금은 예전엔 꿈도 못꾸던 노래들을 시원시원하게 부를 수 있게
              되었습니다.
            </FeatureCard>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <YouTubeEmbed slug={YoutubeSlug.beforeAfter1} title="흩어져 날아가 BEFORE AFTER" />
            <YouTubeEmbed slug={YoutubeSlug.students} title="수강생 BEFORE AFTER" />
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-semibold text-white">
              트레이너의 첫번째 조건
            </div>
            <div className="mt-2 text-sm leading-7 text-white/75">
              고음을 진짜 뚫을 수 있는 커리큘럼을 가진 트레이너의 첫번째 조건이
              있습니다.{" "}
              <Emphasis>‘고음이 타고나지 않은 트레이너’</Emphasis>
              <br />
              고음이 타고났다면 커리큘럼 개발 난이도가 기하급수적으로 올라갑니다.
              처음엔 타고나지 않음에 좌절했지만, 지금은 누구라도 시원하게 고음을
              뚫어줄 수 있는 트레이너가 된 것에 감사하고 있습니다.
              <div className="mt-3 font-semibold text-white">
                단연 대한민국 최고의 고음강의일 겁니다.
              </div>
            </div>
          </div>
        </section>

        {/* 1억 케이스 */}
        <section className="mx-auto w-full max-w-5xl px-4 py-10 md:py-14">
          <SectionTitle
              kicker="특이케이스"
              title="보컬레슨에 1억원 넘게 쓰고 온 수강생"
              desc="오프라인 1억을 썼지만, 온라인 레슨만으로 단 4개월의 결과."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2 md:items-start">
            <YouTubeEmbed slug={YoutubeSlug.student1eok} title="1억 수강생 BEFORE AFTER" />

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm leading-7 text-white/75">
              영상에 나오는 수강생은 실제로 보컬레슨에{" "}
              <Emphasis>1억원</Emphasis> 넘게 쓰고 왔던 수강생입니다.
              <br />
              다른 사람보다 굉장히 큰 힘과 방향성의 특이케이스 레슨생이었지만, 제가
              타고나지 않아 더 넓은 바운더리의 수강생을 공감할 수 있었던 부분이
              결과를 내는데 큰 도움이 되었습니다.
              <br />
              <div className="mt-3">
                심지어 오프라인에 1억을 썼지만 저에겐 단{" "}
                <Emphasis>4개월</Emphasis>, 심지어 온라인 레슨으로만 진행한
                결과물입니다.
              </div>
              <div className="mt-4 font-semibold text-white">
                “절대적으로 BEFORE AFTER로 결과가 증명 된 곳만이 진짜입니다.”
              </div>
            </div>
          </div>
        </section>

        {/* 환불/보장 + 80대 */}
        <section className="mx-auto w-full max-w-5xl px-4 py-10 md:py-14">
          <SectionTitle
              kicker="보장"
              title="변화가 없다면 전액환불"
              desc="유료강의 포함 · 업계최초 1:1 무료레슨권 증정"
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm leading-7 text-white/75">
                영상 자체도 뇌빼고 따라할 수 있을만큼 쉽게 제작했지만, 혹시모를
                변수마저도 1:1 레슨으로 확실하게 결과를 보장해드립니다.
                <div className="mt-4">
                  그래도 이해를 하지 못할까 걱정되신다구요? 진심으로 쓸데없는
                  걱정입니다.
                </div>
                <div className="mt-3 font-semibold text-white">
                  <Emphasis>80대</Emphasis> 수강생도 수강 20분만에 이해할 정도의
                  난이도 입니다.
                </div>
                <div className="mt-4 font-semibold text-white">
                  “고음이 안뚫리는게 불가능한 정도입니다.”
                </div>
                <div className="mt-2 text-white/70">
                  오죽하면 변화가 없을 시 전액환불까지 당당하게 걸었을까요?
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-semibold text-white">후기</div>
                <div className="mt-2 text-sm text-white/70">
                  (승인된 사람만 작성 가능) — 후기 데이터가 쌓이면 섹션을 확장하세요.
                </div>
              </div>
            </div>

            <YouTubeEmbed slug={YoutubeSlug.senior} title="80대 수강생 BEFORE AFTER" />
          </div>
        </section>

        {/* Curriculum */}
        <section id="curriculum" className="mx-auto w-full max-w-5xl px-4 py-10 md:py-14">
          <SectionTitle
              kicker="강의 구성"
              title="고음팩토리 강의에서 배우는 것"
              desc="고음은 물론 발성의 모든 요소를 A–Z까지 세분화했습니다."
          />

          <CurriculumBox />
        </section>

        {/* Pricing & Contact */}
        <section id="contact" className="mx-auto w-full max-w-5xl px-4 py-10 md:py-14">
          <SectionTitle
              kicker="가격 · 문의"
              title="프로모션 진행 중"
              desc="강의 구매를 희망하시는 분들은 아래 연락처 또는 카카오톡으로 문의주세요."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold text-white">가격</div>
              <div className="mt-4 space-y-2 text-sm text-white/80">
                <div>
                  <span className="line-through text-white/50">49만원</span>{" "}
                  <span className="text-white/50">(X)</span>{" "}
                  <span className="font-semibold text-white">→ 29만원</span>
                </div>
                <div className="text-lg font-black text-white">
                  프로모션 할인가 → <span className="underline">25만원</span>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/75">
                <div className="font-semibold text-white">포함 혜택</div>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>변화 없을 시 전액환불 (유료강의 포함)</li>
                  <li>업계최초 1:1 무료레슨권 증정</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold text-white">문의</div>
              <div className="mt-4 space-y-3 text-sm text-white/80">
                <div className="rounded-xl border border-white/10 bg-[#020518]/40 p-4">
                  <div className="text-xs text-white/60">Kakao</div>
                  <div className="text-base font-semibold">kmkssik</div>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#020518]/40 p-4">
                  <div className="text-xs text-white/60">TEL</div>
                  <div className="text-base font-semibold">01073445820</div>
                </div>

                <div className="pt-2 text-xs text-white/55">
                  * 버튼 클릭 기능(복사/바로가기)은 원하면 추가해줄게.
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 py-10">
          <div className="mx-auto w-full max-w-5xl px-4 text-xs text-white/55">
            © {new Date().getFullYear()} 고음팩토리. All rights reserved.
          </div>
        </footer>
      </main>
  );
}
