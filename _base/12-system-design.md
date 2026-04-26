# System Design / Architecture Decisions

총 60개 질문입니다.

## Requirements / Trade-off

251. 시스템 설계에서 기능 요구사항보다 비기능 요구사항을 먼저 명확히 해야 하는 이유는 무엇일까?
252. DAU, QPS, peak traffic, storage growth를 추정하면 어떤 설계 결정이 달라질까?
~~253. read-heavy 서비스와 write-heavy 서비스는 캐시, DB, 큐 설계가 어떻게 달라질까?~~ `작성완료`
254. consistency, availability, latency 중 무엇을 우선할지는 도메인마다 어떻게 판단해야 할까?
255. MVP 단계와 대규모 트래픽 단계의 설계는 어디까지 다르게 가져가야 할까?
256. 단일 장애 지점을 찾을 때 네트워크, DB, 캐시, 배포 시스템 중 어떤 계층을 봐야 할까?
257. 비용 최적화는 서버 스펙을 낮추는 문제가 아니라 어떤 리소스 병목을 줄이는 문제일까?
258. 시스템 설계에서 “나중에 확장 가능하게”라는 말은 어떤 구체적 인터페이스와 데이터 경계를 의미해야 할까?
## API / Service Boundary

~~259. REST, GraphQL, gRPC는 데이터 조회 패턴과 클라이언트 요구사항에 따라 어떻게 선택이 달라질까?~~ `작성완료`
~~260. API Gateway는 라우팅 외에 인증, rate limiting, observability에서 어떤 책임을 가질 수 있을까?~~ `작성완료`
~~261. 서비스 분리는 코드 규모가 커져서 하는 것일까, 배포와 데이터 ownership 경계를 나누기 위해 하는 것일까?~~ `작성완료`
~~262. 마이크로서비스로 나누면 팀 독립성은 좋아질 수 있지만, 트랜잭션과 디버깅은 왜 어려워질까?~~ `작성완료`
263. BFF 패턴은 프론트엔드 요구사항과 백엔드 도메인 API 사이의 어떤 불일치를 줄여줄까?
264. API versioning은 URL, header, schema evolution 중 어디에서 관리하는 것이 좋을까?
265. backward compatible한 API 변경과 breaking change는 어떤 기준으로 구분할 수 있을까?
266. rate limit을 사용자 단위, IP 단위, API key 단위로 걸 때 각각 어떤 우회와 오탐 문제가 생길까?
267. idempotency key는 결제나 주문 API에서 어떤 중복 요청 문제를 막아줄 수 있을까?
268. 외부 API 의존성이 있는 서비스는 timeout, retry, fallback, circuit breaker를 어떻게 조합해야 할까?
## Data / Scaling

269. 대규모 피드 시스템에서 fan-out on write와 fan-out on read는 어떤 트래픽 패턴에서 유리할까?
270. 검색 기능을 DB `LIKE`로 구현할 때와 검색 엔진을 도입할 때의 경계는 무엇일까?
271. 알림 시스템에서 실시간성, 중복 방지, 사용자 설정 반영은 어떻게 함께 설계해야 할까?
272. 파일 업로드 시스템에서 애플리케이션 서버를 거치지 않고 object storage로 직접 업로드하게 하는 이유는 무엇일까?
273. 이미지나 동영상 처리 파이프라인은 왜 동기 요청 안에서 처리하면 위험할까?
274. 추천 시스템에서 실시간 feature와 batch feature는 어떤 데이터 파이프라인 차이를 만들까?
275. 랭킹 시스템에서 score update 빈도와 조회 빈도에 따라 Redis sorted set, DB, 배치 계산 중 무엇을 선택할까?
276. multi-region 배포는 latency를 낮추지만, 데이터 정합성과 장애 복구에서 어떤 난제를 만들까?
277. sharding과 partitioning은 비슷해 보이지만 운영 책임과 쿼리 모델에서 어떻게 다를까?
278. 데이터 삭제 요청이 들어왔을 때 캐시, 검색 인덱스, 로그, 백업까지 어떻게 일관되게 처리할까?
## Reliability / Operation

279. graceful degradation은 어떤 기능을 희생하고 어떤 핵심 기능을 살릴지 정하는 설계라고 볼 수 있을까?
280. backpressure는 시스템이 밀릴 때 어디에서 신호를 주고 어떻게 요청을 제한해야 할까?
281. retry storm은 왜 발생하고, jitter와 exponential backoff는 어떻게 완화할까?
282. circuit breaker의 open, half-open, closed 상태는 장애 회복을 어떻게 판단할까?
283. health check가 단순 `/ping`이면 실제 서비스 가능 상태를 놓칠 수 있는 이유는 무엇일까?
284. SLO, SLA, error budget은 운영 우선순위를 정하는 데 어떻게 연결될까?
~~285. blue-green, rolling, canary 배포는 각각 어떤 위험을 줄이고 어떤 운영 비용을 만든까?~~ `작성완료`
286. feature flag는 단순 ON/OFF 스위치가 아니라 배포와 릴리즈를 분리하는 장치라고 볼 수 있을까?
287. observability를 설계할 때 로그, 메트릭, 트레이스는 어느 수준의 cardinality와 retention을 가져야 할까?
288. 장애 대응 runbook에는 원인 분석보다 먼저 어떤 복구 절차가 들어가야 할까?
## Security / Product Scale

289. 인증과 인가를 서비스별로 구현하면 어떤 중복과 보안 구멍이 생길 수 있을까?
290. multi-tenant 시스템에서 tenant isolation은 DB, 캐시, 로그, 권한 모델까지 어떻게 반영되어야 할까?
291. 개인정보를 저장하는 시스템은 암호화, 접근 제어, 감사 로그, 보존 기간을 어떻게 함께 설계해야 할까?
292. abuse 방지 시스템은 rate limit만으로 충분할까, 행동 패턴과 위험 점수를 함께 봐야 할까?
293. 관리자 기능은 내부 기능이라 보안 요구사항이 낮다고 볼 수 있을까?
294. 대규모 서비스에서 config 변경은 코드 배포와 동일한 수준의 검증과 롤백이 필요할까?
295. 시스템 설계 문서에서 대안 비교와 포기한 선택지를 기록해야 하는 이유는 무엇일까?
296. capacity planning은 평균 트래픽이 아니라 peak와 failure mode를 기준으로 해야 하는 이유는 무엇일까?
297. 데이터 마이그레이션 설계에서 dual-write, backfill, verification, cutover는 어떤 순서로 다뤄야 할까?
298. 시스템의 병목은 한 번 해결하면 끝나는가, 트래픽 증가에 따라 어디로 이동할 수 있을까?
299. “확장 가능한 시스템”은 서버를 많이 붙일 수 있다는 뜻일까, 상태와 데이터 경계를 잘 나눴다는 뜻일까?
300. 좋은 시스템 설계 답변은 왜 특정 기술명보다 제약, 트레이드오프, 실패 시나리오를 더 많이 다뤄야 할까?
## Architecture / Engineering Leadership

441. 아키텍처 의사결정에서 reversible decision과 irreversible decision을 구분하면 설계 속도가 어떻게 달라질까?
442. technical debt는 단순히 나쁜 코드가 아니라 어떤 미래 변경 비용으로 측정할 수 있을까?
443. 추상화를 추가할 시점은 중복이 처음 생겼을 때일까, 변경 방향이 관찰된 뒤일까?
444. shared database는 서비스 분리를 쉽게 시작하게 하지만, 장기적으로 ownership과 배포 독립성에 어떤 문제를 만들까?
445. schema-first 개발과 code-first 개발은 API contract 관리에서 어떤 차이를 만들까?
446. 테스트 피라미드가 깨지고 E2E 테스트가 많아지면 피드백 속도와 원인 분석에 어떤 비용이 생길까?
447. mutation testing은 line coverage가 놓치는 어떤 테스트 품질 문제를 드러낼 수 있을까?
448. chaos engineering은 장애를 일부러 만드는 활동이 아니라 어떤 가설 검증 과정으로 봐야 할까?
449. postmortem이 blame-free여야 하는 이유는 문화적 이유뿐 아니라 재발 방지 정보의 품질과 어떻게 연결될까?
450. senior engineer의 설계 역량은 정답 기술을 고르는 능력보다 제약을 드러내고 선택의 비용을 설명하는 능력이라고 볼 수 있을까?
