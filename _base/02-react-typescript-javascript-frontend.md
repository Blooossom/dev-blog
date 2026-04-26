# React / TypeScript / JavaScript / Frontend

총 70개 질문입니다.

## React / TypeScript / JavaScript

21. JavaScript의 `const`는 정말 값이 절대 바뀌지 않는다는 뜻일까?
22. JavaScript에서 `null`과 `undefined`는 왜 둘 다 존재할까?
23. `==`와 `===`는 왜 다르고, `==`를 쓰면 어떤 예측하기 어려운 일이 생길까?
~~24. JavaScript는 싱글 스레드라는데 비동기 작업은 어떻게 동시에 처리되는 것처럼 보일까?~~ `작성완료`
~~25. 이벤트 루프는 콜스택, 태스크 큐, 마이크로태스크 큐를 어떤 순서로 처리할까?~~ `작성완료`
~~26. `Promise`, `async/await`는 비동기 코드를 동기 코드처럼 보이게 할 뿐일까?~~ `작성완료`
~~27. React에서 state를 직접 수정하면 왜 화면이 원하는 대로 갱신되지 않을 수 있을까?~~ `작성완료`
~~28. React는 어떤 기준으로 컴포넌트를 다시 렌더링할까?~~ `작성완료`
~~29. React의 key는 단순히 콘솔 경고를 없애기 위한 값일까?~~ `작성완료`
~~30. `useEffect`는 렌더링 중에 실행될까, 렌더링이 끝난 뒤에 실행될까?~~ `작성완료`
~~31. `useEffect` 의존성 배열을 비워두면 항상 안전할까?~~ `작성완료`
32. React에서 props drilling은 언제 실제 문제가 되고, Context는 언제 과한 선택일까?
~~33. TypeScript는 런타임에서도 타입을 검사해줄까?~~ `작성완료`
34. TypeScript의 `any`와 `unknown`은 실제 안정성 측면에서 무엇이 다를까?
35. interface와 type alias는 언제 구분해서 쓰는 것이 좋을까?
36. 프론트엔드에서 CORS 에러는 브라우저 문제일까, 서버 설정 문제일까?
37. 브라우저의 localStorage, sessionStorage, cookie는 보안과 수명 측면에서 어떻게 다를까?
~~71. React 18의 concurrent rendering은 기존 렌더링 모델과 무엇이 다를까?~~ `작성완료`
~~72. `useMemo`와 `useCallback`은 성능 최적화 도구일까, 참조 안정성 도구일까?~~ `작성완료`
73. React에서 불필요한 리렌더링을 줄이려면 state 위치를 어떻게 설계해야 할까?
74. Context를 전역 상태 관리 도구처럼 많이 쓰면 어떤 성능 문제가 생길 수 있을까?
75. React Query, SWR 같은 서버 상태 관리 라이브러리는 Redux와 해결하려는 문제가 어떻게 다를까?
~~76. optimistic update는 사용자 경험을 좋게 만들지만, 실패 시 어떤 보상 로직이 필요할까?~~ `작성완료`
77. hydration mismatch는 왜 발생하고, SSR 환경에서 어떻게 디버깅할 수 있을까?
~~78. Next.js 같은 SSR/SSG 프레임워크에서 클라이언트 컴포넌트와 서버 컴포넌트를 나누는 기준은 무엇일까?~~ `작성완료`
~~79. 브라우저 렌더링 과정에서 reflow와 repaint는 언제 발생하고, 어떤 코드가 비용을 키울까?~~ `작성완료`
80. 긴 리스트 렌더링에서 virtualization은 어떤 원리로 성능을 개선할까?
~~81. JavaScript 번들 크기가 커지면 초기 로딩에서 어떤 단계들이 느려질까?~~ `작성완료`
~~82. code splitting은 무조건 많이 나누는 것이 좋을까?~~ `작성완료`
83. TypeScript의 generic은 단순 재사용 문법이 아니라 타입 관계를 표현하는 도구라고 볼 수 있을까?
~~84. conditional type과 mapped type은 실제 서비스 코드에서 어떤 중복을 줄여줄 수 있을까?~~ `작성완료`
~~85. 타입 안정성을 유지하면서 API 응답 런타임 검증까지 하려면 어떤 접근이 필요할까?~~ `작성완료`
~~86. 프론트엔드에서 XSS를 막기 위해 React의 기본 escaping만 믿어도 충분할까?~~ `작성완료`
~~87. access token을 localStorage에 저장하는 방식과 httpOnly cookie에 저장하는 방식은 어떤 공격 모델에서 차이가 날까?~~ `작성완료`
## Frontend Architecture

~~330. feature-based 구조와 layer-based 구조는 팀 규모와 변경 단위에 따라 어떻게 선택이 달라질까?~~ `작성완료`
331. 프론트엔드에서 container/presenter 분리는 상태 관리와 UI 재사용 측면에서 여전히 유효할까?
332. client state, server state, form state, URL state를 구분하지 않으면 어떤 복잡도가 생길까?
333. 전역 상태는 편리하지만, 언제 지역 상태나 URL 상태로 두는 것이 더 나을까?
334. atomic design은 컴포넌트를 잘게 나누는 규칙일까, 디자인 시스템과 제품 화면 사이의 계층 모델일까?
335. design system은 UI 컴포넌트 모음이 아니라 토큰, 접근성, 사용 규칙까지 포함해야 하는 이유는 무엇일까?
336. compound component pattern은 복잡한 UI 컴포넌트의 유연성과 제어권을 어떻게 나눌까?
337. controlled component와 uncontrolled component는 form 성능과 검증 방식에서 어떤 차이를 만들까?
338. custom hook은 로직 재사용 도구지만, hook 내부에 UI 정책까지 섞이면 어떤 문제가 생길까?
339. frontend에서 dependency inversion은 API client, storage, analytics 같은 외부 의존성을 어떻게 격리할 수 있을까?
## Frontend Pattern / Cross-Cutting Design

340. optimistic UI는 단순히 먼저 화면을 바꾸는 것이 아니라 실패, 재시도, 롤백을 포함한 상태 머신이라고 볼 수 있을까?
~~341. error boundary는 모든 비동기 에러를 잡아줄까, 어떤 에러는 별도로 처리해야 할까?~~ `작성완료`
~~342. suspense는 loading spinner를 대체하는 기능일까, 렌더링과 데이터 준비를 조율하는 모델일까?~~ `작성완료`
343. route-level code splitting과 component-level code splitting은 초기 로딩과 전환 지연에서 어떤 차이를 만들까?
344. micro frontend는 독립 배포를 가능하게 하지만, 디자인 일관성, 번들 중복, 런타임 통합에서 어떤 비용이 생길까?
~~345. SSR, CSR, SSG, ISR은 SEO, TTFB, freshness, 운영 비용 측면에서 어떻게 선택이 갈릴까?~~ `작성완료`
346. API error를 화면에 보여줄 때 transport error, validation error, domain error를 구분해야 하는 이유는 무엇일까?
347. 접근성은 마지막에 추가하는 기능일까, 컴포넌트 설계 단계에서 어떤 제약으로 반영되어야 할까?
348. 디자인 패턴을 적용했는데 코드가 더 복잡해졌다면 어떤 신호를 보고 되돌릴 수 있을까?
349. backend와 frontend 사이의 contract를 OpenAPI, schema, mock server, contract test로 관리하면 어떤 장애를 줄일 수 있을까?
350. 좋은 아키텍처는 기술 스택보다 변경 가능성, 테스트 가능성, 장애 격리를 얼마나 잘 다루는지로 평가해야 할까?
## Frontend / Browser

~~411. React reconciliation은 key와 element type을 바탕으로 어떤 방식으로 tree diff 비용을 줄일까?~~ `작성완료`
~~412. React concurrent features는 render phase와 commit phase를 분리해 어떤 interruptible rendering을 가능하게 할까?~~ `작성완료`
~~413. server component는 client bundle 크기를 줄이지만, stateful interaction과 data fetching 경계는 어떻게 제한할까?~~ `작성완료`
414. streaming SSR은 TTFB와 LCP를 개선할 수 있지만, hydration 순서와 fallback UI에서 어떤 복잡도를 만들까?
415. browser main thread가 막히면 input delay, animation, rendering pipeline이 어떤 순서로 영향을 받을까?
416. Web Worker는 CPU 작업을 분리할 수 있지만, DOM 접근과 데이터 복사 비용에서 어떤 제약이 있을까?
417. service worker cache strategy에서 cache-first, network-first, stale-while-revalidate는 어떤 제품 요구에 맞을까?
~~418. Core Web Vitals의 LCP, INP, CLS는 각각 어떤 사용자 경험 문제를 측정하려고 할까?~~ `작성완료`
419. JavaScript hydration cost가 큰 앱에서 island architecture나 partial hydration은 어떤 문제를 줄일 수 있을까?
420. frontend에서 schema validation을 런타임에 수행하면 타입 시스템이 놓치는 어떤 장애를 막을 수 있을까?
421. browser security model에서 same-origin policy와 CORS는 서버 간 통신이 아니라 어떤 클라이언트 보호 모델일까?
422. CSRF와 XSS는 인증 쿠키 기반 서비스에서 어떻게 서로 다른 방어 전략을 요구할까?
423. CSP는 XSS 피해를 줄일 수 있지만, nonce, hash, third-party script 운영에서 어떤 부담을 만들까?
424. accessibility tree는 DOM과 어떻게 다르고, custom component가 스크린 리더에서 깨지는 이유는 무엇일까?
425. design token이 CSS 변수, build-time token, platform token으로 나뉠 때 어떤 배포와 일관성 문제가 생길까?
