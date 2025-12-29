import Image from "next/image";
import { YoutubeSlug } from "@/data/youtubeLink";
import { YouTubeEmbed } from "@/component/youtubeEmbed";
import { Emphasis } from "@/component/emphsis";
import { SectionTitle } from "@/component/sectionTitle";
import { CurriculumBox } from "@/component/curriculumBox";
import { GlobalNavigationBar } from "@/component/globalNavigationBar";
import { Contact } from "@/component/contact";
import { Reveal } from "@/component/Reveal";
import { StoryBlock } from "@/component/StoryBlock";
import { ClaimRow } from "@/component/ClaimRow";
import { Quote } from "@/component/Quote";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#040814] text-white">
      {/* Top Bar */}
      <GlobalNavigationBar />
      {/* Hero */}
      <section className="mx-auto w-full max-w-3xl px-4 pb-10 pt-10 md:pb-14 md:pt-14">
        <div className="space-y-8">
          <Reveal>
            <div className="text-center mb-6 md:mb-10">
              <h1 className="text-3xl font-black tracking-tight md:text-5xl">
                대한민국에서 가장 쉬운 고음뚫기
              </h1>
            </div>
          </Reveal>

          <div className="space-y-6 text-center text-base leading-8 text-white/80 md:text-lg">
            <Reveal delay={0.5}>
              <p>무슨 짓을 해도</p>
            </Reveal>

            <Reveal delay={1}>
              <p>어떤 선생님을 찾아가도</p>
            </Reveal>

            <Reveal delay={1.5}>
              <p>
                <Emphasis>고음이 뚫리지 않는다면</Emphasis>
              </p>
            </Reveal>

            <Reveal delay={2}>
              <p className="font-semibold text-lg md:text-xl text-white">
                잘 찾아오셨습니다
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="space-y-6 pt-4">
              <YouTubeEmbed
                slug={YoutubeSlug.intro}
                title="고음팩토리 소개 영상"
              />

              {/* 프로필: 박스 없이 얇은 라인과 약한 배경 */}
              <div className="border-t border-white/10 pt-5">
                <div className="flex items-center gap-3">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/15 bg-white/10">
                    <Image
                      src="/profile.jpg"
                      alt="대표원장 조승희"
                      fill
                      className="object-cover"
                      sizes="56px"
                      priority={false}
                    />
                  </div>
                  <div className="leading-snug">
                    <div className="font-semibold text-white">
                      대표원장 조승희
                    </div>
                    <div className="text-sm text-white/70">
                      &#39;고음 잘뚫기&#39;로 증명된 트레이너
                    </div>
                  </div>
                </div>

                <div className="mt-5 text-sm leading-8 text-white/75 md:text-base">
                  안녕하세요. 수많은 before after로 대한민국에서 고음 잘뚫기로
                  증명된 고음팩토리 대표원장 조승희입니다.
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Proof */}
      <section
        id="proof"
        className="mx-auto w-full max-w-3xl px-4 py-14 md:py-20"
      >
        <Reveal>
          <SectionTitle
            kicker="Before & After"
            title="'안 되던 고음'이 '되게 만드는' 근거"
            desc="타고난 사람이 아니라, 안 되던 사람이 뚫어낸 방식으로."
          />
        </Reveal>

        <div className="mt-10 space-y-10 md:mt-12 md:space-y-12">
          <Reveal delay={0.1}>
            <ClaimRow
              index="01"
              claim="저는 최고음역 2옥타브 솔# 고음불가였습니다"
              evidence={
                <p>
                  위 영상에서 보셨듯 저는 최고음역{" "}
                  <Emphasis>2옥타브 솔# 고음불가</Emphasis> 였습니다. 오죽하면
                  친구가 &#34;넌 고음이 안되니까 그냥 랩을 해봐&#34; 라는 말을
                  들을 정도였으니까요. 하지만 지금은 예전엔 꿈도 못꾸던 노래들을
                  시원시원하게 부를 수 있게 되었습니다. 박효신 · 이진성 · 이수 ·
                  더크로스까지.
                </p>
              }
            />
          </Reveal>

          <Reveal delay={0.15}>
            <YouTubeEmbed
              slug={YoutubeSlug.beforeAfter1}
              title="흩어져 날아가 BEFORE AFTER"
            />
          </Reveal>

          <Reveal delay={0.2}>
            <ClaimRow
              index="02"
              claim="수강생 사례로 검증된 커리큘럼"
              evidence={
                <>
                  고음을 진짜 뚫을 수 있는 커리큘럼을 가진 트레이너의 첫번째
                  조건이 있습니다.{" "}
                  <Emphasis>&#39;고음이 타고나지 않은 트레이너&#39;</Emphasis>
                  <div className="mt-3 text-white/70">
                    고음이 타고났다면 커리큘럼 개발 난이도가 기하급수적으로
                    올라갑니다. 처음엔 타고나지 않음에 좌절했지만, 지금은
                    누구라도 시원하게 고음을 뚫어줄 수 있는 트레이너가 된 것에
                    감사하고 있습니다.
                  </div>
                </>
              }
            />
          </Reveal>

          <Reveal delay={0.25}>
            <YouTubeEmbed
              slug={YoutubeSlug.students}
              title="수강생 BEFORE AFTER"
            />
          </Reveal>

          <Quote>단연 대한민국 최고의 고음강의일 겁니다.</Quote>
        </div>
      </section>

      {/* 1억 케이스 */}
      <section className="mx-auto w-full max-w-3xl px-4 py-14 md:py-20">
        <Reveal>
          <SectionTitle
            kicker="사례1"
            title="보컬레슨에 1억원 넘게 쓰고 온 수강생"
            desc="오프라인 1억을 썼지만, 온라인 레슨만으로 단 4개월의 결과."
          />
        </Reveal>

        <div className="mt-10 space-y-8 md:mt-12">
          <Reveal delay={0.1}>
            <YouTubeEmbed
              slug={YoutubeSlug.student1eok}
              title="1억 수강생 BEFORE AFTER"
            />
          </Reveal>

          <Reveal delay={0.15}>
            <StoryBlock
              body={
                <>
                  영상에 나오는 수강생은 실제로 보컬레슨에{" "}
                  <Emphasis>1억원</Emphasis> 넘게 쓰고 왔던 수강생입니다.
                </>
              }
            />
            <StoryBlock
              body={
                <>
                  다른 사람보다 굉장히 큰 힘과 방향성의 특이케이스
                  레슨생이었지만, 제가 타고나지 않아 더 넓은 바운더리의 수강생을
                  공감할 수 있었던 부분이 결과를 내는데 큰 도움이 되었습니다.
                </>
              }
            />
            <StoryBlock
              body={
                <>
                  심지어 오프라인에 1억을 썼지만 저에겐 단{" "}
                  <Emphasis>4개월</Emphasis>, 심지어 온라인 레슨으로만 진행한
                  결과물입니다.
                </>
              }
            />
          </Reveal>
          <Quote>
            절대적으로 BEFORE AFTER로 결과가 증명 된 곳만이 진짜입니다.
          </Quote>
        </div>
      </section>

      {/* 환불/보장 + 80대 */}
      <section className="mx-auto w-full max-w-3xl px-4 py-14 md:py-20">
        <Reveal>
          <SectionTitle
            kicker="사례2"
            title="변화가 없다면 전액환불"
            desc="유료강의 포함 · 업계최초 1:1 무료레슨권 증정"
          />
        </Reveal>

        <div className="mt-10 space-y-8 md:mt-12">
          <Reveal delay={0.1}>
            <StoryBlock
              body={
                <>
                  영상 자체도 뇌빼고 따라할 수 있을만큼 쉽게 제작했지만,
                  혹시모를 변수마저도 1:1 레슨으로 확실하게 결과를
                  보장해드립니다.
                </>
              }
            />
            <StoryBlock
              body={
                <>
                  그래도 이해를 하지 못할까 걱정되신다구요? 진심으로 쓸데없는
                  걱정입니다.
                </>
              }
            />
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex items-center gap-3">
              <p className="text-base font-medium text-white md:text-lg">
                <Emphasis>80대</Emphasis> 수강생도 수강 20분만에 이해할 정도의
                난이도입니다
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <YouTubeEmbed
              slug={YoutubeSlug.senior}
              title="80대 수강생 BEFORE AFTER"
            />
          </Reveal>

          <Reveal delay={0.3}>
            <div className="space-y-5">
              <Quote>
                고음이 안뚫리는게 불가능한 정도입니다. 오죽하면 전액환불까지
                당당하게 걸었을까요?
              </Quote>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Curriculum */}
      <section
        id="curriculum"
        className="mx-auto w-full max-w-3xl px-4 py-14 md:py-20"
      >
        <Reveal>
          <SectionTitle
            kicker="커리큘럼"
            title="고음팩토리 강의에서 배우는 것"
            desc="고음은 물론 발성의 모든 요소를 A–Z까지 세분화했습니다."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <CurriculumBox />
        </Reveal>
      </section>

      {/* Pricing & Contact */}
      <section
        id="contact"
        className="mx-auto w-full max-w-3xl px-4 py-14 md:py-20 mb-10"
      >
        <Reveal>
          <SectionTitle
            kicker="가격 · 문의"
            title="프로모션 진행 중"
            desc="강의 구매를 희망하시는 분들은 아래 연락처 또는 카카오톡으로 문의주세요."
          />
        </Reveal>

        <div className="mt-12 space-y-12 md:mt-16">
          {/* 가격 영역: 타이포 중심 */}
          <Reveal delay={0.1}>
            <div className="space-y-6 text-center">
              <div className="space-y-3">
                <div className="text-sm text-white/40 line-through">
                  정가 49만원
                </div>

                <div className="text-lg text-white/50 line-through md:text-xl">
                  할인가 29만원
                </div>

                <div className="text-2xl font-black tracking-tight text-white md:text-3xl">
                  프로모션 25만원
                </div>
              </div>
            </div>
          </Reveal>

          {/* 연락처 */}
          <Reveal delay={0.15}>
            <Contact />
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto w-full max-w-3xl px-4 text-center text-xs text-white/55">
          © {new Date().getFullYear()} 고음팩토리. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
