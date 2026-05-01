# Database / Storage

총 65개 질문입니다.

## SQL / Query

~~151. `SELECT *`는 단순히 컬럼을 많이 가져오는 문제일까, 네트워크 전송량과 인덱스 활용에도 영향을 줄까?~~ `작성완료`
~~152. `WHERE` 조건에 함수를 적용하면 인덱스를 타지 못할 수 있는 이유는 무엇일까?~~ `작성완료`
~~153. `JOIN` 순서는 SQL에 적은 순서대로 실행될까, 옵티마이저가 바꿀 수 있을까?~~ `작성완료`
154. inner join과 outer join은 결과 차이뿐 아니라 실행 계획에서도 어떤 차이를 만들 수 있을까?
155. subquery와 join은 항상 서로 바꿔 쓸 수 있을까?
156. `GROUP BY`와 `ORDER BY`가 함께 있을 때 정렬 비용은 어떻게 커질 수 있을까?
157. pagination에서 `OFFSET`이 커질수록 느려지는 이유는 무엇이고, keyset pagination은 이를 어떻게 피할까?
158. count query는 단순해 보여도 대용량 테이블에서 왜 병목이 될 수 있을까?
159. bulk insert와 row-by-row insert는 DB 내부 처리 비용에서 어떤 차이가 있을까?
160. prepared statement는 SQL injection 방어 외에 성능 측면에서 어떤 이점을 가질 수 있을까?
## Index

~~161. B-Tree 인덱스는 왜 범위 검색과 정렬에 유리할까?~~ `작성완료`
~~162. 해시 인덱스는 equality 검색에는 빠르지만 범위 검색에는 왜 부적합할까?~~ `작성완료`
~~163. 복합 인덱스에서 컬럼 순서는 왜 중요하고, leftmost prefix rule은 어떤 제약을 만들까?~~ `작성완료`
164. covering index는 테이블 접근을 줄이지만, 어떤 비용을 추가로 만들까?
165. 인덱스가 많으면 조회 성능은 좋아질 수 있는데, 쓰기 성능은 왜 나빠질까?
166. cardinality가 낮은 컬럼에 인덱스를 걸면 항상 효과가 없다고 말할 수 있을까?
167. 인덱스를 탔는데도 쿼리가 느릴 수 있는 이유는 무엇일까?
168. 실행 계획에서 full table scan이 항상 나쁜 선택이라고 볼 수 있을까?
169. DB 옵티마이저의 통계 정보가 오래되면 어떤 잘못된 실행 계획이 나올 수 있을까?
170. 인덱스 스캔과 인덱스 시크는 실제 데이터 접근 패턴에서 무엇이 다를까?
## Transaction / Lock

~~171. ACID는 각각 무엇을 보장하고, 실제 DB 설정에서는 어떤 보장이 약해질 수 있을까?~~ `작성완료`
172. dirty read, non-repeatable read, phantom read는 각각 어떤 동시성 상황에서 발생할까?
173. repeatable read에서도 phantom read가 발생할 수 있는 DB와 그렇지 않은 DB가 갈리는 이유는 무엇일까?
~~174. MVCC는 읽기와 쓰기의 충돌을 어떻게 줄이고, 대신 어떤 저장 공간 비용을 만들까?~~ `작성완료`
175. row lock과 table lock은 어떤 상황에서 선택되거나 확대될 수 있을까?
176. gap lock과 next-key lock은 어떤 문제를 막기 위해 존재할까?
177. deadlock은 DB가 자동으로 감지해도 애플리케이션에서 왜 재시도 전략이 필요할까?
178. 긴 트랜잭션은 락뿐 아니라 undo log, vacuum, replication lag에 어떤 영향을 줄 수 있을까?
179. 트랜잭션 안에서 외부 API를 호출하면 어떤 장애와 정합성 문제가 생길 수 있을까?
180. optimistic locking에서 version 컬럼 충돌이 발생하면 사용자 경험은 어떻게 설계해야 할까?
## Modeling / Constraint

~~181. 정규화는 중복을 줄여주지만, 조회 성능과 쿼리 복잡도 측면에서는 어떤 비용을 만들까?~~ `작성완료`
182. 반정규화는 언제 성능 최적화가 되고, 언제 데이터 불일치의 원인이 될까?
183. foreign key 제약을 DB에 둘지 애플리케이션에서만 관리할지는 어떤 기준으로 결정해야 할까?
184. unique constraint는 애플리케이션 중복 체크보다 어떤 동시성 상황에서 더 강력할까?
185. soft delete를 사용하면 unique index, 조회 조건, 데이터 보존 정책에서 어떤 문제가 생길 수 있을까?
186. audit log 테이블은 단순히 변경 이력을 저장하는 것을 넘어 어떤 복구와 추적 요구사항을 만족해야 할까?
~~187. 날짜/시간 컬럼을 저장할 때 timezone을 잘못 다루면 어떤 버그가 생길 수 있을까?~~ `작성완료`
188. JSON 컬럼은 유연하지만, 검색, 인덱싱, 스키마 검증 측면에서 어떤 트레이드오프가 있을까?
## Replication / Scaling / Operation

~~189. primary-replica 구조에서 read replica로 읽으면 어떤 정합성 문제가 생길 수 있을까?~~ `작성완료`
~~190. replication lag는 사용자에게 어떤 형태의 버그로 드러날 수 있을까?~~ `작성완료`
~~191. failover가 자동으로 되더라도 애플리케이션 커넥션과 트랜잭션은 어떤 영향을 받을까?~~ `작성완료`
192. sharding은 데이터 양 문제를 해결하지만, join, transaction, rebalancing에서는 어떤 비용을 만들까?
193. shard key를 잘못 고르면 hot shard 문제가 왜 발생할까?
194. read/write splitting은 부하 분산에 도움이 되지만, 어떤 쿼리를 primary로 보내야 할까?
~~195. DB connection pool이 고갈되면 애플리케이션에서는 어떤 증상으로 나타날까?~~ `작성완료`
196. slow query log를 볼 때 단순 실행 시간 외에 lock wait, rows examined, rows sent를 같이 봐야 하는 이유는 무엇일까?
197. backup이 있다고 해서 복구가 가능하다고 말할 수 없는 이유는 무엇이고, restore test는 왜 필요한가?
198. migration 도중 컬럼 추가, backfill, 인덱스 생성은 무중단 배포에서 어떤 순서로 진행해야 할까?
199. 대용량 테이블에 인덱스를 추가할 때 운영 중인 서비스에 어떤 부하가 생길 수 있을까?
200. DB 장애 대응에서 RPO와 RTO는 각각 무엇을 의미하고, 시스템 설계에 어떤 제약을 줄까?
## Database / Storage

366. LSM tree 기반 저장소와 B-Tree 기반 저장소는 write amplification과 read amplification에서 어떻게 다를까?
367. WAL은 durability를 위해 어떤 순서 보장을 제공하고, fsync 정책에 따라 어떤 트레이드오프가 생길까?
368. checkpoint는 DB 복구 시간을 줄이지만, 실행 중에는 어떤 I/O 부하를 만들 수 있을까?
369. PostgreSQL의 vacuum은 MVCC와 어떤 관계가 있고, vacuum이 밀리면 어떤 증상이 생길까?
370. MySQL InnoDB의 clustered index 구조는 primary key 선택에 어떤 영향을 줄까?
371. secondary index가 clustered index를 다시 참조하는 구조는 조회 비용에 어떤 의미를 가질까?
372. phantom read를 막기 위한 predicate lock과 next-key lock은 구현 관점에서 어떻게 다를까?
373. serializable isolation은 완전한 직렬 실행과 같은 결과를 보장하지만 처리량에는 어떤 비용을 만들까?
374. distributed transaction의 2PC는 어떤 장애 지점에서 participant를 blocking 상태로 만들 수 있을까?
375. CDC는 DB 변경 이벤트를 안정적으로 전달하지만, schema evolution과 재처리에서는 어떤 문제가 생길까?
376. materialized view는 조회를 빠르게 하지만 freshness와 refresh cost를 어떻게 관리해야 할까?
~~377. time-series 데이터는 일반 OLTP 테이블과 partitioning, retention, aggregation 전략이 어떻게 달라질까?~~ `작성완료`
378. columnar storage는 분석 쿼리에 강하지만 OLTP성 업데이트에는 왜 불리할까?
379. 데이터 압축은 저장 공간만 줄이는 것이 아니라 CPU와 I/O 사이에 어떤 교환 관계를 만들까?
380. hot row나 hot partition은 DB 스케일아웃 이후에도 왜 전체 처리량의 병목이 될 수 있을까?
