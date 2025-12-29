# 고음팩토리 웹사이트 리팩토링 작업 진행상황

## 목표
카드/박스 중심 구성 → 세련된 편집형(에디토리얼) 랜딩 페이지로 변경

## 핵심 원칙
- ❌ 그라데이션 금지
- ✅ 큰 타이포 + 넓은 여백
- ✅ 문단 흐름 중심 (카드 남발 금지)
- ✅ 섬세한 모션 (framer-motion)

---

## Phase 1: 프리미티브 컴포넌트 생성 ✅

### 1.1 Reveal 컴포넌트
- [x] `src/component/Reveal.tsx` 생성
- [x] framer-motion 기반 스크롤 애니메이션
- [x] 옵션: delay, y, once

### 1.2 SectionShell 컴포넌트
- [x] `src/component/SectionShell.tsx` 생성
- [x] 섹션 공통 wrapper (id, tone 기반 배경 변주)

### 1.3 StoryBlock 컴포넌트
- [x] `src/component/StoryBlock.tsx` 생성
- [x] eyebrow + headline + body 구조
- [x] 박스 없이 문단 흐름

### 1.4 ClaimRow 컴포넌트
- [x] `src/component/ClaimRow.tsx` 생성
- [x] 인덱스 + claim + 근거 레이아웃

### 1.5 Quote 컴포넌트
- [x] `src/component/Quote.tsx` 생성
- [x] 얇은 라인 + 강한 인용문

### 1.6 PricingCTA 컴포넌트
- [x] `src/component/PricingCTA.tsx` 생성
- [x] 카카오톡 문의 버튼 (클라이언트 컴포넌트)

---

## Phase 2: 페이지 구조 리팩토링 ✅

### 2.1 페이지 전체 구조
- [x] HomePage 각 섹션을 SectionShell로 감싸기
- [x] 박스형 카드 절반 이상 제거
- [x] 문단형 레이아웃으로 재구성

### 2.2 Hero 섹션
- [x] H1 타이포 강화 (text-4xl md:text-6xl)
- [x] 서브카피 문단형 재구성
- [x] 프로필을 얇은 라인/약한 배경으로 변경

### 2.3 Proof 섹션
- [x] FeatureCard 제거
- [x] ClaimRow + 영상 패턴으로 재작성
- [x] Quote 추가

### 2.4 1억 케이스 섹션
- [x] 큰 박스 설명을 StoryBlock으로 분할
- [x] Emphasis 최소화 (1억원/4개월만)

### 2.5 보장 섹션
- [x] "전액환불" 타이포 강화
- [x] "80대 20분" 뱃지화

### 2.6 Curriculum 섹션
- [x] CurriculumBox 톤 조정 (border-white/5, bg-white/[0.03])
- [x] 상단 요약 추가 ("이 강의가 해결하는 것")

### 2.7 Pricing 섹션
- [x] border/box 제거, 타이포로만 구성
- [x] 정가/할인가/프로모션가 계층 구조 (text-4xl md:text-5xl)
- [x] CTA 버튼 추가 (카카오톡으로 문의하기)

---

## Phase 3: 모션 적용 ✅

- [x] SectionTitle에 Reveal 적용
- [x] StoryBlock에 Reveal 적용
- [x] YouTubeEmbed에 Reveal 적용
- [x] 커리큘럼에 Reveal 적용
- [x] 가격 라인에 Reveal 적용
- [x] 모든 섹션에 delay를 통한 stagger 효과 적용

---

## Phase 4: 최종 점검 ✅

- [x] 박스/카드 개수 대폭 감소 (FeatureCard 제거, 문단형으로 전환)
- [x] 섹션 간 리듬 생성 (SectionShell의 tone 0/1/2, border-t)
- [x] 애니메이션 적용 (Reveal 컴포넌트, duration 0.5s, easeOut)
- [x] 그라데이션 전무 확인 (단색 배경만 사용)
- [x] 가격 파트 타이포 강화 (text-4xl md:text-5xl font-black)
- [x] 빌드 성공 확인

---

## 진행 노트
- 시작일: 2025-12-29
- 완료일: 2025-12-29
- 현재 상태: ✅ **전체 작업 완료**

### 생성된 컴포넌트
1. `src/component/Reveal.tsx` - 스크롤 애니메이션
2. `src/component/SectionShell.tsx` - 섹션 wrapper
3. `src/component/StoryBlock.tsx` - 문단형 블록
4. `src/component/ClaimRow.tsx` - Proof 섹션용
5. `src/component/Quote.tsx` - 인용문
6. `src/component/PricingCTA.tsx` - 가격 CTA 버튼

### 주요 변경사항
- ✅ 카드/박스 중심 → 문단 흐름 중심으로 전환
- ✅ 타이포 강화 (Hero H1: text-6xl, Pricing: text-5xl)
- ✅ framer-motion 기반 섬세한 스크롤 애니메이션
- ✅ 섹션별 tone 차이로 리듬감 생성
- ✅ 그라데이션 제거, 미니멀 다크 테마 유지
