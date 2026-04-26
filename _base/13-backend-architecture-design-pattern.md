# Backend Architecture / Design Pattern

총 29개 질문입니다.

## Backend Architecture

~~301. layered architecture는 단순히 controller, service, repository 폴더를 나누는 것일까?~~ `작성완료`
302. domain layer가 application layer나 infrastructure layer에 의존하면 어떤 유지보수 문제가 생길까?
~~303. hexagonal architecture에서 port와 adapter는 외부 의존성을 어떻게 격리할까?~~ `작성완료`
304. clean architecture는 모든 프로젝트에 필요한 구조일까, 복잡도 대비 이점은 언제 커질까?
~~305. CQRS는 읽기와 쓰기 모델을 분리하지만, 데이터 동기화와 운영 복잡도는 어떻게 증가할까?~~ `작성완료`
306. event sourcing은 상태를 저장하는 대신 이벤트를 저장하면서 어떤 장점과 디버깅 난제를 만들까?
~~307. DDD의 aggregate는 단순 엔티티 묶음이 아니라 어떤 일관성 경계를 의미할까?~~ `작성완료`
~~308. bounded context를 잘못 나누면 마이크로서비스에서도 모놀리스보다 더 강한 결합이 생길 수 있는 이유는 무엇일까?~~ `작성완료`
309. repository pattern은 ORM을 감싸기만 하는 계층일까, 도메인 관점의 컬렉션 추상화일까?
~~310. service class가 모든 비즈니스 로직을 떠안으면 anemic domain model이 되는 이유는 무엇일까?~~ `작성완료`
311. transaction script와 domain model은 어떤 프로젝트 복잡도에서 선택이 갈릴까?
312. application service와 domain service는 책임이 어떻게 달라야 할까?
313. command handler와 query handler를 분리하면 테스트와 변경 영향도에서 어떤 이점이 있을까?
~~314. dependency inversion은 인터페이스를 많이 만드는 것이 아니라 어떤 방향의 의존성을 바꾸는 원칙일까?~~ `작성완료`
315. 모듈러 모놀리스는 마이크로서비스의 대안으로 어떤 상황에서 현실적인 선택이 될까?
316. shared library를 많이 만들면 중복은 줄지만 서비스 간 결합은 왜 강해질 수 있을까?
317. backend에서 DTO, entity, domain model을 구분하지 않으면 어떤 API 변경 리스크가 생길까?
## Backend Design Pattern

318. strategy pattern은 if-else를 줄이는 문법적 기법일까, 변경 가능한 정책을 캡슐화하는 설계일까?
~~319. factory pattern은 객체 생성을 숨기는 것 이상으로 어떤 의존성 방향을 정리해줄 수 있을까?~~ `작성완료`
320. template method와 strategy pattern은 확장 지점이 상속인지 합성인지에서 어떻게 다를까?
~~321. decorator pattern은 프록시, AOP, middleware 구조와 어떤 공통점을 가질까?~~ `작성완료`
322. adapter pattern은 외부 API 변경이 내부 도메인으로 전파되는 것을 어떻게 막을까?
323. facade pattern은 복잡한 하위 시스템을 숨기지만, 언제 god object로 변질될 수 있을까?
324. observer pattern은 이벤트 기반 시스템과 비슷해 보이지만 동기/비동기 결합에서 무엇이 다를까?
325. chain of responsibility는 인증 필터, 검증 파이프라인, 결제 승인 단계에서 어떻게 적용될 수 있을까?
326. singleton pattern은 전역 접근을 쉽게 만들지만, 테스트와 상태 공유 측면에서 어떤 위험을 만들까?
327. specification pattern은 복잡한 비즈니스 조건을 어떻게 조합 가능하게 만들 수 있을까?
328. unit of work pattern은 트랜잭션 경계와 변경 추적을 어떻게 함께 다룰까?
329. anti-corruption layer는 레거시 시스템이나 외부 시스템 연동에서 어떤 오염을 막기 위한 패턴일까?
