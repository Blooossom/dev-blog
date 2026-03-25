# Dev Blog Design Spec
Date: 2026-03-25

## 1. 프로젝트 개요

개인 개발 블로그 웹사이트. StitchAI "Architect's Library (Warm)" 디자인 시스템을 Next.js로 구현한다.

---

## 2. 기술 스택

| 항목 | 선택 | 이유 |
|------|------|------|
| 프레임워크 | Next.js 14 (App Router) | React 기반 SSG/SSR, 블로그 최적 |
| 콘텐츠 | MDX (`next-mdx-remote`) | 동적 경로(`[slug]`)에서 런타임 파일 로딩 필요. `@next/mdx`는 정적 import만 가능해 부적합 |
| 스타일 | Tailwind CSS | StitchAI 디자인 코드와 동일 방식 |
| 댓글 | Giscus (GitHub Discussions) | 무료, 광고 없음, 개발자 독자 친화적 |
| 배포 | Vercel | Next.js 공식 지원, 자동 배포 |

---

## 3. 디자인 시스템: Architect's Library (Warm)

### 색상 팔레트
- **Background:** `#fcf9f4` (크림 화이트)
- **Primary:** `#a03f28` (테라코타)
- **Primary Container:** `#c0573e`
- **Surface 레이어 (낮을수록 밝음):**
  - `surface-container-lowest` `#ffffff` — 클릭 가능한 카드
  - `surface` / `surface-bright` `#fcf9f4` — 기본 페이지 배경
  - `surface-container-low` `#f6f3ee` — hover 상태, 인-페이지 그룹
  - `surface-container` `#f0ede8` — 사이드바, 코드 블록
  - `surface-container-high` `#ebe8e3` — 코드 스니펫 내부
  - `surface-container-highest` / `surface-variant` `#e5e2dd` — 모달, 오버레이
- **On Surface:** `#1c1c19`
- **On Surface Variant:** `#56423d`
- **Outline Variant:** `#ddc0ba`

### 타이포그래피
- **Headline / Label:** Manrope (Google Fonts)
- **Body:** Newsreader (Google Fonts, Serif)
- 본문 2문장 이상은 반드시 Newsreader 사용

### 핵심 디자인 규칙
1. **No-Line Rule:** 1px 실선 border 금지. 섹션 구분은 배경색 변화로만 처리
2. **Glassmorphism Nav:** `rgba(252, 249, 244, 0.8)` + `backdrop-blur: 12px`
3. **Primary Gradient:** `linear-gradient(135deg, #a03f28 0%, #c0573e 100%)`
4. **Roundness:** `ROUND_EIGHT` — 기본 `0.5rem`, 카드/이미지 `0.75rem`~`1.5rem`
5. **Shadow:** 순수 검정 금지. `rgba(86, 66, 61, 0.06)` 틴티드 섀도 사용

### 반응형 전략
- **모바일:** 단일 컬럼, NavBar 햄버거 메뉴 (md 미만)
- **태블릿 (md):** 2컬럼 포스트 그리드
- **데스크탑 (lg):** 12컬럼 그리드, Featured 7:5 분할 레이아웃

---

## 4. 페이지 구성

| 페이지 | 경로 | 설명 |
|--------|------|------|
| 홈 | `/` | Featured 포스트 + 최신 포스트 그리드 |
| 포스트 상세 | `/posts/[slug]` | MDX 렌더링 + Giscus 댓글 |
| About Me | `/about` | 소개 페이지 |
| Categories | `/categories` | 카테고리 카드 + 태그 클라우드 |
| 카테고리 필터 | `/categories/[category]` | 특정 카테고리 포스트 목록 |
| 태그 필터 | `/tags/[tag]` | 특정 태그 포스트 목록 |
| 검색 | `/search?q=...` | 검색 결과 목록 (결과 없음 포함) |
| 404 에러 | (자동) | `app/not-found.tsx` — 별도 URL 없음, Next.js 404 처리 |
| 구독 성공 | `/subscribe/success` | 추후 뉴스레터 연동 시 사용할 placeholder 페이지 (현재 구현 범위 외) |

---

## 5. 프로젝트 구조

```
dev-blog/
├── app/
│   ├── layout.tsx                  # 공통 레이아웃 (NavBar, Footer)
│   ├── page.tsx                    # 홈
│   ├── posts/
│   │   └── [slug]/
│   │       └── page.tsx            # 포스트 상세
│   ├── about/
│   │   └── page.tsx
│   ├── categories/
│   │   ├── page.tsx                # 전체 카테고리 목록
│   │   └── [category]/
│   │       └── page.tsx            # 카테고리별 포스트
│   ├── tags/
│   │   └── [tag]/
│   │       └── page.tsx            # 태그별 포스트
│   ├── search/
│   │   └── page.tsx                # Client Component (검색 인터랙션)
│   └── not-found.tsx               # 404
├── components/
│   ├── NavBar.tsx
│   ├── Footer.tsx
│   ├── PostCard.tsx
│   ├── FeaturedPost.tsx
│   ├── TagCloud.tsx
│   ├── SearchBar.tsx
│   └── Comments.tsx                # Giscus 래퍼 (추후 교체 포인트)
├── content/
│   └── posts/
│       └── *.mdx
├── lib/
│   ├── mdx.ts                      # MDX 파싱 (next-mdx-remote)
│   └── posts.ts                    # 포스트 목록/메타데이터 + readingTime 계산
├── public/
│   ├── search-index.json           # 빌드 시 생성되는 검색 인덱스
│   └── og-default.png              # 썸네일 없는 포스트의 기본 OG 이미지
├── scripts/
│   └── generate-search-index.ts    # 빌드 전 실행: MDX → search-index.json
├── styles/
│   └── globals.css
└── tailwind.config.ts
```

---

## 6. 컴포넌트 설계

### NavBar
- Fixed 상단, glassmorphism 배경 (`rgba(252,249,244,0.8)` + blur 12px)
- 로고 + 네비게이션 링크 + 검색 아이콘 + Subscribe 버튼
- 모바일: 햄버거 아이콘 → 드롭다운 메뉴

### FeaturedPost
- 홈 최상단 단독 영역 (12컬럼 중 7:5 분할)
- 좌측: 카테고리 태그 + 대형 제목(7xl) + 요약 + 저자 정보
- 우측: 썸네일 이미지 (`aspect-[4/5]`, `rounded-xl`)

### PostCard
- 썸네일(optional) + 카테고리 태그 + 제목 + 요약 + 작성일 + 읽기 시간
- hover: `surface-container-lowest` 배경 전환 (border 없음)
- `surface-container-lowest` 위 `surface-container` 배경에 올라가는 구조

### TagCloud
- 카테고리별 태그 목록, 사용 빈도에 따라 폰트 크기 차등
- 각 태그 클릭 → `/tags/[tag]`로 이동

### SearchBar
- pill 모양 input (`rounded-full`), `surface-container-highest` 배경
- 입력 시 `/search?q=...` URL 업데이트

### Comments (Giscus)
- `@giscus/react` 패키지
- GitHub Discussions 연동 (repo, category 설정 필요)
- 추후 자체 댓글로 교체 시 이 컴포넌트 내부만 변경

### Footer
- 블로그 이름 + 간략 소개 + 소셜 링크 + 카테고리 링크
- `surface-container` 배경으로 본문과 구분

---

## 7. 콘텐츠 (MDX)

### Frontmatter 구조
```yaml
---
title: "포스트 제목"
date: "2026-03-25"
category: "Frontend"
tags: ["React", "TypeScript"]
summary: "포스트 요약 (카드에 표시)"
thumbnail: "/images/posts/thumbnail.jpg"  # optional
---
```
- `readingTime`은 frontmatter에 포함하지 않음. `lib/posts.ts`에서 본문 단어 수 기반 자동 계산 (200 wpm 기준)

### 검색 인덱스
- `scripts/generate-search-index.ts`가 빌드 전 실행 (`package.json` prebuild)
- 모든 MDX frontmatter + 본문 텍스트를 읽어 `/public/search-index.json` 생성
- `search/page.tsx`는 Client Component로, 이 JSON을 fetch하여 클라이언트에서 필터링
- 외부 검색 서비스 불필요

### SEO
- 각 페이지 `generateMetadata()` 구현 (title, description, OG)
- `app/sitemap.ts`로 sitemap.xml 자동 생성
- `app/robots.ts`로 robots.txt 생성
- OG 이미지: 포스트 썸네일 사용 (없으면 기본 OG 이미지)

---

## 8. 추후 확장 고려사항

- **댓글:** Giscus → Supabase 기반 자체 댓글 (`Comments.tsx` 내부만 교체)
- **뉴스레터:** Resend / Buttondown 연동 + `/subscribe/success` 페이지 활성화
- **RSS 피드:** `app/rss.xml/route.ts`로 RSS 피드 생성
