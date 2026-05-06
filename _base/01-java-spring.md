# Java / Spring / JVM

총 55개 질문입니다.

## Java / Spring

1. Java의 `Random`은 진짜 랜덤인가, 아니면 예측 가능한 값인가?
~~2. `String`은 왜 불변 객체로 설계되었을까?~~ `작성완료`
~~3. `StringBuilder`와 `StringBuffer`는 실제로 어떤 차이가 있고, 언제 체감될까?~~ `작성완료`
~~4. `HashMap`은 키를 어떤 방식으로 저장하고 찾을까?~~ `작성완료`
~~5. `HashMap`에서 `equals()`와 `hashCode()`를 잘못 구현하면 어떤 문제가 생길까?~~ `작성완료`
~~6. Java의 `final`은 변수, 메서드, 클래스에서 각각 어떤 의미가 다를까?~~ `작성완료`
~~7. Java의 GC는 메모리를 언제, 어떤 기준으로 회수할까?~~ `작성완료`
8. `==`와 `equals()`의 차이를 제대로 이해하지 못하면 어떤 버그가 생길까?
~~9. Java의 예외 중 checked exception과 unchecked exception은 왜 나뉘어 있을까?~~ `작성완료`
~~10. Spring Bean은 정확히 언제 생성되고 언제 사라질까?~~ `작성완료`
~~11. `@Component`, `@Service`, `@Repository`, `@Controller`는 기능적으로 완전히 다른가?~~ `작성완료`
~~12. Spring의 DI는 단순히 객체를 대신 만들어주는 기능일까?~~ `작성완료`
13. Spring에서 순환 참조가 문제가 되는 이유는 무엇일까?
~~14. `@Transactional`은 메서드 안의 모든 코드를 무조건 트랜잭션으로 묶어줄까?~~ `작성완료`
~~15. 같은 클래스 내부에서 `@Transactional` 메서드를 호출하면 왜 트랜잭션이 안 걸릴 수 있을까?~~ `작성완료`
~~16. Spring AOP는 실제 객체를 직접 바꾸는 걸까, 프록시를 끼우는 걸까?~~ `작성완료`
~~17. Spring Boot는 어떻게 설정 없이도 많은 기능을 자동으로 구성할까?~~ `작성완료`
~~18. JPA의 영속성 컨텍스트는 단순한 캐시와 무엇이 다를까?~~ `작성완료`
~~19. JPA에서 `N+1 문제`는 왜 발생하고, 단순히 LAZY로 바꾸면 해결될까?~~ `작성완료`
20. REST API에서 `PUT`과 `PATCH`는 실제 서비스 설계에서 어떻게 다르게 써야 할까?
~~51. JVM의 heap, stack, metaspace는 각각 어떤 데이터를 저장하고, 장애가 나면 어떤 증상으로 드러날까?~~ `작성완료`
~~52. GC 튜닝을 해야 한다는 판단은 어떤 지표를 보고 내릴 수 있을까?~~ `작성완료`
~~53. `volatile`은 멀티스레드 환경에서 어떤 문제를 해결하고, 어떤 문제는 해결하지 못할까?~~ `작성완료`
~~54. `synchronized`, `ReentrantLock`, `Atomic*` 계열은 어떤 상황에서 선택 기준이 달라질까?~~ `작성완료`
~~55. Java Thread Pool에서 core size, max size, queue size를 잘못 잡으면 어떤 장애가 생길까?~~ `작성완료`
~~56. `CompletableFuture`를 사용할 때 기본 ForkJoinPool을 그대로 쓰면 어떤 위험이 있을까?~~ `작성완료`
~~57. Spring MVC에서 요청 하나는 어떤 흐름으로 DispatcherServlet, HandlerMapping, Interceptor, Controller를 통과할까?~~ `작성완료`
~~58. Spring Security의 인증과 인가는 필터 체인 안에서 어떤 순서로 처리될까?~~ `작성완료`
~~59. JWT를 사용하면 서버가 완전히 stateless해진다고 말할 수 있을까?~~ `작성완료`
~~60. refresh token을 DB에 저장하는 방식과 Redis에 저장하는 방식은 어떤 트레이드오프가 있을까?~~ `작성완료`
~~61. `@Transactional(readOnly = true)`는 단순히 개발자에게 읽기 전용 의도를 표시하는 것일까?~~ `작성완료`
~~62. 트랜잭션 격리 수준을 낮추거나 높이면 동시성과 정합성에 어떤 변화가 생길까?~~ `작성완료`
~~63. Spring에서 `REQUIRES_NEW` 전파 옵션은 언제 유용하고, 언제 위험할까?~~ `작성완료`
~~64. JPA dirty checking은 어떤 시점에 변경을 감지하고 SQL을 날릴까?~~ `작성완료`
~~65. JPA batch insert/update가 기대만큼 빠르지 않을 때 확인해야 할 설정은 무엇일까?~~ `작성완료`
66. optimistic lock과 pessimistic lock은 각각 어떤 충돌 상황에서 더 적합할까?
67. DB 커넥션 풀 크기는 단순히 크게 잡을수록 처리량이 좋아질까?
68. API 서버에서 timeout, retry, circuit breaker를 각각 어디에 두어야 장애 전파를 줄일 수 있을까?
69. 대용량 트래픽에서 rate limiting은 애플리케이션, API Gateway, Nginx 중 어디에서 처리하는 것이 좋을까?
70. 로그, 메트릭, 트레이스는 장애 분석에서 각각 어떤 질문에 답해줄 수 있을까?
## Backend / JVM / Spring

351. JVM safepoint는 GC뿐 아니라 어떤 작업에서 발생하고, latency-sensitive 서비스에 어떤 영향을 줄 수 있을까?
352. biased locking, lightweight locking, heavyweight locking은 JVM의 락 최적화 관점에서 어떻게 달라질까?
~~353. Java 메모리 모델에서 happens-before 관계를 이해하지 못하면 어떤 동시성 버그를 놓칠 수 있을까?~~ `작성완료`
354. false sharing은 멀티스레드 프로그램에서 CPU 캐시 라인 때문에 어떤 성능 저하를 만들까?
355. ForkJoinPool의 work stealing은 어떤 작업 유형에서 유리하고, blocking I/O와 섞이면 왜 문제가 될까?
356. Netty 같은 event-driven 서버에서 blocking call 하나가 전체 처리량에 어떤 영향을 줄 수 있을까?
357. Spring WebFlux를 쓰면 자동으로 성능이 좋아지는가, blocking dependency가 남아 있으면 어떤 일이 생길까?
358. servlet thread-per-request 모델과 reactive 모델은 backpressure를 다루는 방식이 어떻게 다를까?
359. Spring proxy 기반 AOP와 AspectJ weaving은 적용 시점과 제약이 어떻게 다를까?
360. Bean lifecycle에서 `BeanPostProcessor`와 `InitializingBean`은 프레임워크 확장 지점으로 어떻게 쓰일 수 있을까?
361. Hibernate 1차 캐시와 2차 캐시는 정합성, eviction, transaction boundary에서 어떻게 다를까?
362. JPA flush mode를 바꾸면 SQL 실행 시점과 읽기 쿼리 결과에 어떤 영향이 생길까?
363. Hibernate proxy와 bytecode enhancement는 lazy loading을 어떻게 구현하고, 직렬화에서 어떤 문제를 만들까?
364. 트랜잭션 경계 밖에서 lazy association에 접근하면 왜 `LazyInitializationException`이 발생할까?
365. 도메인 이벤트를 트랜잭션 커밋 전과 커밋 후 중 언제 발행해야 하는지 어떻게 판단할까?
