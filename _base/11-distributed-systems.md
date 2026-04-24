# Distributed Systems

총 11개 질문입니다.

## Distributed Systems / Messaging

381. consensus 알고리즘에서 leader election은 split-brain을 막기 위해 어떤 quorum 조건을 필요로 할까?
382. Raft의 log replication은 follower lag와 leader failover 상황에서 어떤 일관성 보장을 제공할까?
383. quorum read/write에서 `R + W > N` 조건은 어떤 정합성 기대를 만들고, clock skew에는 어떤 한계가 있을까?
384. vector clock은 단순 timestamp와 달리 분산 시스템의 causality를 어떻게 표현할 수 있을까?
385. logical clock과 physical clock은 이벤트 순서 판단에서 어떤 차이를 만들까?
386. CRDT는 conflict-free merge를 제공하지만, 모든 도메인 규칙을 쉽게 표현할 수 있을까?
391. distributed tracing에서 sampling rate를 낮추면 비용은 줄지만 어떤 장애 분석 능력을 잃을 수 있을까?
392. clock skew가 있는 환경에서 timeout, lease, distributed lock은 어떤 잘못된 판단을 할 수 있을까?
393. lease 기반 lock은 lock holder가 멈췄다가 다시 살아나는 경우 어떤 fencing token이 필요할까?
394. multi-region active-active 구조에서 conflict resolution은 도메인마다 어떻게 다르게 설계해야 할까?
395. eventual consistency 시스템에서 사용자가 방금 쓴 데이터를 바로 읽는 read-your-writes 보장은 어떻게 제공할 수 있을까?
