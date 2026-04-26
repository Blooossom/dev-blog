# AI Engineering / Vibe Coding / MCP

총 50개 질문입니다.

## AI Application Architecture

~~451. LLM 기반 애플리케이션은 일반 CRUD 서비스와 비교해 왜 입력, 출력, 실패 모드가 더 비결정적인가?~~ `작성완료`
452. AI 기능을 제품에 넣을 때 모델 선택보다 먼저 정의해야 할 task boundary와 success metric은 무엇일까?
~~453. prompt engineering은 단순 문장 튜닝일까, 입력 계약과 출력 계약을 설계하는 작업일까?~~ `작성완료`
454. system prompt, developer prompt, user prompt는 각각 어떤 책임과 우선순위를 가져야 할까?
455. structured output을 강제하면 후처리 파싱 문제는 줄지만, 모델 실패는 어떤 형태로 남을까?
456. function calling과 tool calling은 모델이 직접 일을 처리하는 구조와 비교해 어떤 제어권을 애플리케이션에 돌려줄까?
457. LLM 응답을 그대로 사용자에게 보여주는 방식과 검증 계층을 거치는 방식은 어떤 제품 리스크가 다를까?
458. AI 기능의 latency budget은 모델 추론, tool call, retrieval, 후처리 중 어디에서 주로 소모될까?
459. AI 기능의 비용 최적화는 모델을 작은 것으로 바꾸는 것 외에 어떤 cache, batching, routing 전략을 포함할 수 있을까?
460. fallback model이나 fallback flow를 설계할 때 품질 저하를 사용자에게 어떻게 드러내거나 숨길지 판단해야 할까?
## Vibe Coding / Agentic Coding

~~461. vibe coding은 빠른 프로토타이핑에 강하지만, 요구사항 검증과 코드 소유권 측면에서 어떤 위험을 만들까?~~ `작성완료`
462. AI가 생성한 코드를 신뢰하기 전에 어떤 테스트, 리뷰, 정적 분석, 실행 검증을 거쳐야 할까?
463. AI coding agent에게 작업을 맡길 때 좋은 지시문은 구현 방법보다 어떤 제약, 완료 조건, 검증 방법을 포함해야 할까?
464. agent가 큰 코드베이스를 수정할 때 context window 한계는 어떤 잘못된 리팩터링이나 중복 구현으로 이어질 수 있을까?
465. AI가 만든 코드에서 hallucinated API나 존재하지 않는 설정을 어떻게 빠르게 탐지할 수 있을까?
466. agentic coding에서 planning, editing, testing, debugging 루프를 분리하면 어떤 품질 관리 이점이 있을까?
467. AI에게 테스트 작성을 맡길 때 happy path만 늘어나는 문제를 어떻게 막을 수 있을까?
468. generated code와 hand-written code의 경계를 명확히 하지 않으면 유지보수에서 어떤 문제가 생길까?
469. AI 기반 코드 리뷰는 어떤 유형의 버그를 잘 찾고, 어떤 설계 판단은 여전히 사람이 봐야 할까?
470. AI agent가 여러 파일을 동시에 수정할 때 충돌, 부분 적용, 롤백 전략은 어떻게 설계해야 할까?
## MCP / Tools / Context Engineering

~~471. MCP는 단순 플러그인 시스템이 아니라 모델과 외부 도구 사이의 어떤 표준화된 연결 계층이라고 볼 수 있을까?~~ `작성완료`
~~472. MCP server가 제공하는 tool, resource, prompt는 각각 어떤 사용 시나리오에 맞을까?~~ `작성완료`
473. tool calling에서 모델이 도구를 선택하게 할 때 permission, audit log, rate limit을 왜 함께 설계해야 할까?
474. 외부 도구 실행 결과를 LLM context에 넣을 때 어떤 데이터 축약과 신뢰도 표시가 필요할까?
475. context engineering은 긴 문서를 많이 넣는 일이 아니라 어떤 정보 선택과 우선순위 조정 문제일까?
476. RAG에서 chunk size, overlap, embedding model, reranker 선택은 검색 품질에 어떤 영향을 줄까?
477. vector search 결과가 의미적으로 비슷해도 task에 부적합할 수 있는 이유는 무엇일까?
478. retrieval 결과를 모델이 인용하거나 근거로 사용할 때 citation과 source grounding은 어떻게 검증해야 할까?
479. tool result가 stale하거나 partial failure일 때 모델이 확신 있게 잘못된 답을 내지 않게 하려면 어떻게 해야 할까?
480. agent memory는 사용자 경험을 개선하지만 privacy, retention, correction 측면에서 어떤 설계가 필요할까?
## Evaluation / Safety / Operations

481. LLM 평가에서 정답률 하나만 보면 안 되는 이유는 무엇이고, helpfulness, faithfulness, safety는 어떻게 분리해 볼 수 있을까?
482. golden dataset은 어떻게 만들고, 실제 사용자 입력 분포가 바뀌면 어떻게 갱신해야 할까?
483. LLM regression test는 deterministic unit test와 달리 어떤 tolerance와 sampling 전략이 필요할까?
484. prompt 변경은 코드 변경처럼 버전 관리, 리뷰, 배포, 롤백 대상이 되어야 할까?
485. A/B test로 AI 기능 품질을 측정할 때 사용자 만족도와 실제 업무 성공률이 어긋날 수 있는 이유는 무엇일까?
486. prompt injection은 단순 악성 문구 필터링으로 막을 수 있을까, tool 권한과 데이터 경계 설계가 더 중요한가?
487. data exfiltration을 막기 위해 LLM이 접근 가능한 context와 tool scope를 어떻게 제한해야 할까?
488. guardrail은 입력 필터, 출력 필터, tool policy, human review 중 어디에 배치해야 효과적인가?
489. AI 서비스의 observability는 token usage, latency, tool call trace, user feedback, safety event를 어떻게 함께 수집해야 할까?
490. LLM 장애는 500 에러보다 품질 저하나 느린 응답으로 나타날 수 있는데, 어떤 알림 기준을 세워야 할까?
## Harness Engineering / AI Delivery

491. AI harness engineering은 모델 호출 코드를 작성하는 것보다 evaluation, prompt, tool, dataset, deployment를 묶는 실행 환경 설계에 가깝다고 볼 수 있을까?
492. 모델 실험을 재현 가능하게 만들려면 prompt, model version, temperature, tool version, dataset snapshot을 어떻게 기록해야 할까?
493. offline evaluation과 online evaluation은 각각 어떤 실패를 잘 잡고, 어떤 한계를 가질까?
494. AI workflow에서 human-in-the-loop를 넣을 때 승인 지점과 책임 소재는 어떻게 정해야 할까?
495. multi-agent 구조는 역할 분리에 유리하지만, agent 간 메시지 비용과 오류 전파는 어떻게 통제해야 할까?
496. planner-executor 패턴은 복잡한 작업을 나누는 데 유용하지만, 잘못된 계획을 계속 밀고 가는 문제를 어떻게 막을까?
497. AI agent가 shell, browser, database 같은 강한 도구를 사용할 때 sandbox와 least privilege는 어떻게 적용해야 할까?
498. model routing은 비용과 품질을 최적화할 수 있지만, 요청 분류 오류가 사용자 경험에 어떤 영향을 줄까?
499. AI 기능을 운영하는 팀은 prompt, eval, telemetry, abuse 대응을 코드와 동일한 engineering artifact로 관리해야 할까?
500. AI 기술을 도입할 때 “모델이 할 수 있는가”보다 “실패했을 때 제품과 사용자가 어떻게 회복하는가”를 먼저 물어야 할까?
