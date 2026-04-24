# Redis / Message Queue

총 54개 질문입니다.

## Redis

201. Redis는 단순한 key-value 저장소일까, 자료구조 서버라고 보는 것이 더 정확할까?
202. Redis가 빠른 이유는 메모리 기반이라는 점만으로 설명할 수 있을까?
203. Redis의 single-threaded event loop 구조는 어떤 장점과 병목을 동시에 만들까?
204. Redis에서 큰 key나 big value가 있으면 latency spike가 생길 수 있는 이유는 무엇일까?
205. `KEYS` 명령어가 운영 환경에서 위험한 이유는 무엇이고, `SCAN`은 어떤 한계를 가질까?
206. Redis TTL은 정확히 만료 시점에 즉시 삭제된다고 볼 수 있을까?
~~207. cache-aside 패턴에서 cache miss가 몰리면 어떤 문제가 생기고, 어떻게 완화할 수 있을까?~~ `작성완료`
~~208. cache penetration, cache breakdown, cache avalanche는 각각 어떤 상황을 말할까?~~ `작성완료`
209. Redis를 분산 락으로 사용할 때 `SET NX PX`만으로 충분하지 않은 이유는 무엇일까?
210. Redlock 알고리즘은 어떤 문제를 해결하려고 하고, 어떤 논쟁점이 있을까?
211. Redis persistence에서 RDB와 AOF는 복구 시점, 성능, 데이터 유실 위험이 어떻게 다를까?
212. AOF rewrite는 왜 필요하고, rewrite 중에는 어떤 리소스 부담이 생길 수 있을까?
213. Redis replication에서 replica lag는 캐시와 세션 저장소에서 각각 어떤 문제를 만들 수 있을까?
214. Redis Sentinel과 Redis Cluster는 고가용성 문제를 서로 어떻게 다르게 해결할까?
215. Redis Cluster에서 hash slot은 어떤 방식으로 데이터를 분산하고, multi-key 연산에 어떤 제약을 만들까?
216. Redis eviction policy는 캐시 적중률과 데이터 유실 위험에 어떤 영향을 줄까?
217. Redis를 세션 저장소로 사용할 때 만료, 갱신, 강제 로그아웃은 어떻게 설계해야 할까?
218. Redis Pub/Sub은 메시지 큐처럼 보이지만, 내구성과 재처리 관점에서 어떤 한계가 있을까?
219. Redis Stream은 Pub/Sub과 비교해 어떤 메시지 처리 보장을 제공할 수 있을까?
220. Redis latency를 분석할 때 CPU, network, slowlog, memory fragmentation 중 무엇을 확인해야 할까?
## Message Queue

~~221. 메시지 큐를 도입하면 시스템이 무조건 더 안정적이고 단순해질까?~~ `작성완료`
~~222. 동기 API 호출을 비동기 메시징으로 바꾸면 장애 전파와 사용자 응답 시간은 어떻게 달라질까?~~ `작성완료`
223. producer, broker, consumer 중 어디에서 병목이 생기는지 어떻게 구분할 수 있을까?
~~224. at-most-once, at-least-once, exactly-once 처리는 실제 장애 상황에서 어떤 중복과 유실 가능성을 갖는가?~~ `작성완료`
~~225. consumer가 메시지를 처리한 뒤 ack 전에 죽으면 어떤 일이 발생할까?~~ `작성완료`
~~226. retry를 무제한으로 걸면 왜 장애 복구가 아니라 장애 증폭이 될 수 있을까?~~ `작성완료`
~~227. dead letter queue는 단순히 실패 메시지를 쌓는 곳일까, 운영 프로세스까지 포함한 설계일까?~~ `작성완료`
~~228. 메시지 순서 보장은 partition, consumer group, 병렬 처리와 어떤 트레이드오프를 만들까?~~ `작성완료`
~~229. Kafka partition 수를 늘리면 처리량은 좋아질 수 있지만 어떤 비용이 늘어날까?~~ `작성완료`
~~230. Kafka consumer group rebalancing은 왜 발생하고, 처리 지연에 어떤 영향을 줄까?~~ `작성완료`
~~231. Kafka offset commit은 언제 하는 것이 안전하고, 처리 중복 가능성과 어떻게 연결될까?~~ `작성완료`
232. RabbitMQ의 exchange, queue, binding은 Kafka의 topic, partition 모델과 어떻게 다를까?
233. 메시지 payload에 전체 데이터를 넣는 방식과 ID만 넣고 조회하는 방식은 어떤 장단점이 있을까?
234. outbox pattern은 DB 트랜잭션과 메시지 발행 사이의 어떤 불일치 문제를 해결하려고 할까?
235. saga pattern은 분산 트랜잭션을 대체할 수 있지만, 보상 트랜잭션 설계에서 어떤 어려움이 있을까?
236. idempotent consumer는 왜 필요하고, 중복 처리를 막기 위해 어떤 키를 기준으로 삼아야 할까?
237. queue depth가 계속 증가할 때 scale-out만 하면 해결될까, 처리 시간과 입력량을 어떻게 봐야 할까?
238. delayed message와 scheduled job은 어떤 요구사항에서 서로 대체 가능하고, 어디서 차이가 날까?
239. 메시지 스키마를 변경할 때 backward compatibility와 forward compatibility는 왜 중요한가?
240. 이벤트 기반 아키텍처에서 이벤트 이름과 payload는 도메인 의미를 얼마나 담아야 할까?
## Redis / MQ 운영 설계

241. Redis와 메시지 큐를 함께 사용할 때 캐시 무효화 이벤트는 어떤 순서 보장 문제가 생길 수 있을까?
242. 캐시 업데이트와 DB 업데이트를 하나의 원자적 작업처럼 보장하려면 어떤 설계 선택지가 있을까?
243. 메시지 기반 시스템에서 observability를 확보하려면 correlation id와 trace context를 어떻게 전달해야 할까?
~~244. 비동기 처리 결과를 사용자에게 보여줄 때 polling, SSE, WebSocket, push 중 어떤 기준으로 선택할까?~~ `작성완료`
245. 이벤트 재처리 기능은 왜 처음부터 운영 도구로 설계해야 할까?
246. 메시지 큐 장애 시 producer는 요청을 실패시킬지, 로컬에 임시 저장할지, degraded mode로 갈지 어떻게 결정할까?
247. 캐시 서버 장애 시 전체 서비스가 DB로 몰리는 상황을 어떻게 방지할 수 있을까?
248. Redis와 MQ의 모니터링에서 latency, memory, lag, throughput 중 어떤 지표가 장애의 선행 신호가 될까?
249. 메시지 큐를 사용해도 데이터 정합성 문제가 사라지지 않는 이유는 무엇일까?
250. Redis와 메시지 큐를 도입하기 전, 정말 필요한 복잡도인지 판단하려면 어떤 질문을 해야 할까?
## Distributed Systems / Messaging

387. exactly-once semantics는 브로커만의 기능인가, producer와 consumer의 idempotency까지 포함한 end-to-end 속성인가?
388. Kafka transaction은 consume-process-produce 파이프라인에서 어떤 원자성을 제공하고, 외부 DB와는 어떤 한계가 있을까?
389. out-of-order event가 들어왔을 때 read model이나 projection은 어떻게 정합성을 회복해야 할까?
390. 이벤트 재생 replay는 버그 복구에 강력하지만, side effect를 어떻게 차단해야 할까?
