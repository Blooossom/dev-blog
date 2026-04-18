# dev-blog CLAUDE.md

이 프로젝트는 Next.js 기반 개발 블로그다. 이 파일을 읽었다면 아래 지침을 따라 동작하라.

---

## 기본 동작 규칙

사용자가 **주제 키워드**를 던지면 — 별도 지시 없이 — 아래 전체 흐름을 자동으로 수행한다.

```
1. 포스트 MDX 파일 작성
2. generate-thumbnails.ts에 슬러그 항목 추가
3. 썸네일 SVG 생성 (npx tsx scripts/generate-thumbnails.ts)
4. 검색 인덱스 갱신 (npx tsx scripts/build-search-index.ts)
5. 빌드 검증 (npm run build)
6. git add → commit → push
```

"~에 대해 작성해줘", "~글 써줘", "~포스트 추가해줘" 등 글 작성 요청으로 해석되면 푸시까지 자동 수행한다.

---

## 포스트 작성 규칙

### 파일 경로

```
content/posts/<slug>.mdx
```

### 프런트매터 형식

```yaml
---
title: 한국어 제목
date: 'YYYY-MM-DD'
category: Backend | Frontend | DevOps | General | Architecture | AI
tags:
  - Tag1
  - Tag2
summary: >-
  두세 문장 요약. 검색 결과와 OG 태그에 노출된다.
thumbnail: /thumbnails/<slug>.svg
---
```

### 카테고리 기준

| 카테고리 | 주제 |
|----------|------|
| Backend | Java, Spring, JPA, DB, API, 서버 아키텍처 |
| Frontend | React, TypeScript, 번들러, CSS, 브라우저 |
| DevOps | Docker, K8s, CI/CD, Nginx, 클라우드 |
| General | 개발 방법론, 커리어, 비용, 사고 방식 |
| Architecture | DDD, MSA, 헥사고날, CQRS 등 설계 패턴 |
| AI | LLM, 프롬프트, AI 도구 활용 |

### 글 작성 스타일

- **한국어**로 작성한다
- 도입부: 주제가 왜 필요한지 한두 문장으로 시작
- 코드 예시는 Java(Spring) 또는 TypeScript(React) 기준, 주제에 맞게 선택
- 섹션은 `##`, 하위 섹션은 `###`
- 표, 다이어그램(ASCII), 코드 블록 적극 활용
- 마지막 문단: 핵심 원칙을 한두 문장으로 정리

### 제목 금지 키워드

제목(title)에 다음 단어를 사용하지 않는다: **완전**, **완벽**, **정복**

---

## 썸네일 추가 규칙

`scripts/generate-thumbnails.ts`의 `POST_CONFIGS` 객체에 슬러그 항목을 추가한다.

### 사용 가능한 패턴

| 패턴 | 어울리는 주제 |
|------|--------------|
| `network` | 분산 시스템, 네트워크, MSA, K8s |
| `flow` | 프로세스 흐름, 요청/응답, CI/CD |
| `layers` | 계층 구조, 번들러, 아키텍처 |
| `code` | 언어 문법, 타입, 유틸리티 |
| `threads` | 동시성, 비동기, 이벤트 루프 |
| `browser` | 브라우저 렌더링, SSR/CSR, 프론트엔드 |
| `chart` | 모니터링, 시계열, 성능 |
| `gauge` | 성능 지표, 비용, 측정 |
| `spring` | Spring 관련 |
| `docker` | 컨테이너 |
| `hexagons` | 헥사고날, DDD |
| `neural` | AI, ML, 상태 관리 |
| `shield` | 보안, 인증, 검증 |
| `traces` | 분산 추적, 로그 |

### 카테고리별 기본 색상

```ts
DevOps:       { bg1: '#0d1b2e', bg2: '#1a3d6b', accent: '#60a5fa',  accent2: '#93c5fd' }
Frontend:     { bg1: '#1a1033', bg2: '#3b1f7a', accent: '#c4b5fd',  accent2: '#e9d5ff' }
Backend:      { bg1: '#042712', bg2: '#155235', accent: '#6ee7b7',  accent2: '#bbf7d0' }
General:      { bg1: '#1c1714', bg2: '#3d302a', accent: '#fbbf24',  accent2: '#fde68a' }
Architecture: { bg1: '#100e1e', bg2: '#2d2060', accent: '#fb923c',  accent2: '#fed7aa' }
AI:           { bg1: '#1a0730', bg2: '#4a1070', accent: '#f0abfc',  accent2: '#fae8ff' }
```

항목 추가 예시:

```ts
'my-new-post': { pattern: 'flow', colors: { bg1: '#0d1b2e', bg2: '#1a3d6b', accent: '#60a5fa', accent2: '#93c5fd' } },
```

---

## 실행 명령어

```bash
# 썸네일 생성
npx tsx scripts/generate-thumbnails.ts

# 검색 인덱스 갱신
npx tsx scripts/build-search-index.ts

# 빌드 검증
npm run build

# 커밋 & 푸시
git add <파일들>
git commit -m "feat: <주제> 포스트 추가"
git push origin main
```

---

## Codex 질문 리스트 기반 작성 규칙

`~/Desktop/Codex_MD/fields/` 의 질문 리스트를 기반으로 글을 작성할 때는 **주제(포스트) 하나마다 별도 커밋**한다.

```
각 포스트 작성 후:
  git add <해당 포스트 파일들>
  git commit -m "feat: <주제> 포스트 추가"

모든 포스트가 완료된 후:
  썸네일 일괄 생성 → 검색 인덱스 갱신 → 빌드 검증
  → 나머지 파일(thumbnails, search-index, generate-thumbnails.ts) 별도 커밋

절대 여러 포스트를 한 커밋에 묶지 않는다.
```

또한 작성 완료한 주제는 해당 `fields/*.md` 파일에서 취소선 + `` `작성완료` `` 표시한다.

---

## 기존 포스트 확인

새 주제 작성 전 `content/posts/` 를 확인해 중복 여부를 먼저 체크한다.

---

## 커뮤니케이션

사용자와 대화 시 **존댓말(경어체)**을 사용한다.
