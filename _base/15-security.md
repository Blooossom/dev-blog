# Security

총 100개 질문입니다.

## Web / Browser Security

501. XSS는 단순히 script 태그를 막는 문제가 아니라 어떤 입력, 저장, 렌더링 경로 전체의 문제일까?
502. reflected XSS, stored XSS, DOM-based XSS는 공격 위치와 방어 지점이 어떻게 다를까?
503. React의 기본 escaping이 XSS 위험을 줄여주지만 `dangerouslySetInnerHTML`이나 third-party widget에서는 어떤 위험이 남을까?
504. CSP는 XSS를 완전히 막는 기능일까, 피해 범위를 줄이는 defense-in-depth 장치일까?
505. CSRF는 CORS와 어떤 점에서 다르고, SameSite cookie는 어떤 공격을 줄여줄 수 있을까?
506. SameSite=Lax, Strict, None 설정은 로그인 세션과 외부 연동 UX에 어떤 영향을 줄까?
507. CORS preflight는 보안 기능이라기보다 브라우저의 어떤 정책 협상 절차라고 볼 수 있을까?
508. CORS에서 `Access-Control-Allow-Origin: *`와 credentials 허용을 함께 쓸 수 없는 이유는 무엇일까?
509. clickjacking은 어떤 UI 조작 공격이고, `X-Frame-Options`와 CSP `frame-ancestors`는 어떻게 방어할까?
510. open redirect 취약점은 단순 리다이렉트 버그처럼 보이지만 피싱과 OAuth 흐름에서 왜 위험할까?
511. file upload 기능에서 확장자 검사만으로 충분하지 않은 이유는 무엇이고, MIME sniffing과 실행 권한은 어떻게 봐야 할까?
512. SSRF는 서버가 내부망에 접근할 수 있다는 점을 어떻게 악용하고, metadata endpoint 보호는 왜 중요할까?
513. request smuggling은 프록시와 백엔드가 HTTP 메시지 경계를 다르게 해석할 때 어떻게 발생할까?
514. HTTP header injection이나 response splitting은 어떤 입력 검증 실패에서 시작될 수 있을까?
515. browser storage에 민감 정보를 저장할 때 localStorage, sessionStorage, cookie는 공격 표면이 어떻게 다를까?
## Authentication / Authorization

516. 인증과 인가를 혼동하면 API 설계에서 어떤 보안 구멍이 생길 수 있을까?
517. 비밀번호 저장에서 hashing, salting, stretching은 각각 어떤 공격 비용을 높이기 위한 장치일까?
518. bcrypt, scrypt, Argon2 같은 password hashing 알고리즘은 일반 SHA 계열과 무엇이 다를까?
519. MFA는 계정 탈취 위험을 줄이지만, recovery flow가 약하면 어떤 우회 지점이 생길까?
520. JWT는 stateless 인증에 유리하지만, 폐기, 회전, 권한 변경 반영에서 어떤 어려움이 있을까?
521. access token과 refresh token의 수명과 저장 위치는 어떤 위협 모델을 기준으로 정해야 할까?
522. OAuth 2.0 authorization code flow에서 PKCE는 어떤 code interception 공격을 줄이기 위한 장치일까?
523. OAuth scope는 단순 문자열 권한이 아니라 client와 resource server 사이의 어떤 계약일까?
524. OIDC는 OAuth 위에 무엇을 추가해서 인증 문제를 다루는가?
525. session fixation은 어떤 방식으로 세션을 탈취하고, 로그인 시 세션 재발급은 왜 필요한가?
526. account enumeration은 로그인 실패 메시지, 비밀번호 재설정, 회원가입 API에서 어떻게 드러날 수 있을까?
527. RBAC, ABAC, ReBAC는 권한 모델을 어떤 기준으로 다르게 표현할까?
528. object-level authorization이 빠지면 같은 역할의 사용자끼리 어떤 데이터 접근 문제가 생길까?
529. 관리자 권한 기능에서 audit log와 approval flow가 필요한 이유는 무엇일까?
530. API key는 사용자 인증 수단인가, 애플리케이션 식별과 quota 제어 수단인가?
## API / Application Security

531. SQL injection은 prepared statement만 쓰면 끝나는가, dynamic query와 ORM native query에서는 어떤 위험이 남을까?
532. NoSQL injection은 SQL이 없어도 어떤 쿼리 객체 조작으로 발생할 수 있을까?
533. command injection은 shell metacharacter escaping보다 왜 shell 실행 자체를 피하는 설계가 더 안전할까?
534. path traversal은 파일 다운로드 API에서 어떤 정규화와 base path 검증 실패로 발생할까?
535. deserialization 취약점은 객체 복원 과정에서 어떻게 원격 코드 실행으로 이어질 수 있을까?
536. mass assignment는 클라이언트가 보내지 말아야 할 필드까지 바인딩될 때 어떤 권한 상승을 만들까?
537. rate limiting은 DDoS 방어와 abuse 방어에서 목적과 기준이 어떻게 다를까?
538. replay attack은 nonce, timestamp, signature를 통해 어떻게 완화할 수 있을까?
539. webhook 보안에서 서명 검증, timestamp 검증, idempotency는 각각 어떤 공격과 장애를 막을까?
540. 입력 검증은 프론트엔드와 백엔드 중 어디서 해야 하며, 두 검증은 목적이 어떻게 다를까?
541. 에러 메시지와 stack trace가 외부로 노출되면 공격자에게 어떤 정보가 제공될 수 있을까?
542. 로그에 토큰, 비밀번호, 개인정보가 남는 문제는 탐지보다 설계 단계에서 어떻게 줄여야 할까?
543. feature flag나 admin API가 외부에 노출되면 어떤 권한 우회 경로가 될 수 있을까?
544. tenant id를 클라이언트 입력으로만 신뢰하면 multi-tenant 환경에서 어떤 데이터 침범이 가능할까?
545. 보안 테스트에서 SAST, DAST, IAST, dependency scanning은 각각 어떤 취약점 탐지에 강할까?
## Cryptography / Key Management

546. 암호화와 해싱은 어떤 보안 목적이 다르고, 비밀번호에는 왜 암호화가 아니라 해싱을 쓰는가?
547. 대칭키 암호화와 비대칭키 암호화는 성능과 키 분배 문제에서 어떻게 다를까?
548. AES-GCM 같은 AEAD 모드는 기밀성과 무결성을 어떻게 함께 제공할까?
549. IV나 nonce를 재사용하면 암호화된 데이터에서 어떤 치명적 문제가 생길 수 있을까?
550. HMAC은 단순 해시와 달리 어떤 메시지 인증 보장을 제공할까?
551. digital signature는 HMAC과 달리 어떤 부인 방지와 공개 검증 속성을 가질까?
552. key rotation은 새 키로 암호화하는 것 외에 기존 데이터 복호화와 재암호화를 어떻게 다뤄야 할까?
553. KMS와 application secret config는 책임이 어떻게 다르고, envelope encryption은 어떤 문제를 해결할까?
554. secret을 환경 변수에 넣는 방식도 완전히 안전하지 않은 이유는 무엇이고, runtime 노출은 어떻게 줄일까?
555. TLS certificate pinning은 중간자 공격을 줄일 수 있지만 운영과 인증서 교체에서는 어떤 위험을 만들까?
## Cloud / Infrastructure Security

556. IAM에서 least privilege를 지키려면 권한을 역할 단위로 어떻게 쪼개고 검증해야 할까?
557. cloud security group과 network ACL은 네트워크 제어 위치와 상태 추적 측면에서 어떻게 다를까?
558. public subnet과 private subnet을 나누는 것만으로 서버가 안전하다고 말할 수 있을까?
559. bastion host는 접근 통제를 돕지만, 자체가 고가치 공격 지점이 되는 이유는 무엇일까?
560. zero trust 네트워크 모델은 내부망을 신뢰하지 않는다는 원칙을 어떤 인증과 정책으로 구현할까?
561. WAF는 애플리케이션 취약점을 고치는 대체재일까, 공격 완화 계층일까?
562. DDoS 방어는 bandwidth, connection, application layer 공격에 따라 어떤 전략이 달라질까?
563. DNS 보안에서 DNSSEC은 무엇을 보장하고, 무엇은 보장하지 못할까?
564. infrastructure as code에 hardcoded secret이나 과도한 IAM policy가 들어가면 어떤 공급망 리스크가 생길까?
565. cloud metadata service는 SSRF와 결합될 때 왜 특히 위험한가?
## Container / Kubernetes Security

566. 컨테이너 이미지를 root로 실행하면 escape가 없어도 어떤 피해 범위 확대가 가능할까?
567. distroless image는 공격 표면을 줄이지만 디버깅과 운영 대응에서는 어떤 비용을 만들까?
568. image scanning은 CVE를 찾아주지만, 실제 exploitable risk를 판단하려면 어떤 맥락이 더 필요할까?
569. Kubernetes RBAC에서 service account 권한이 과하면 compromised pod가 어떤 일을 할 수 있을까?
570. Kubernetes secret은 기본적으로 안전하게 암호화되어 있다고 볼 수 있을까?
571. pod security context에서 privilege escalation, capabilities, readOnlyRootFilesystem 설정은 어떤 공격을 줄일까?
572. network policy가 없으면 cluster 내부 lateral movement가 왜 쉬워질 수 있을까?
573. admission controller는 배포 전에 어떤 보안 정책을 강제할 수 있을까?
574. supply chain 보안에서 image signing과 admission verification은 어떤 변조 위험을 줄일까?
575. Kubernetes audit log는 사고 조사에서 어떤 질문에 답해줄 수 있을까?
## Data / Privacy Security

576. 개인정보와 민감정보는 저장, 접근, 로그, 백업에서 일반 데이터와 어떻게 다르게 취급해야 할까?
577. data classification이 없으면 암호화, 접근 제어, 보존 기간 정책이 왜 일관되지 않게 될까?
578. encryption at rest와 encryption in transit은 각각 어떤 공격을 막고, 어떤 공격은 막지 못할까?
579. column-level encryption이나 field-level encryption은 DB 운영과 검색 기능에 어떤 제약을 만들까?
580. tokenization과 masking은 원본 데이터 보호 목적이 어떻게 다르고, 운영 화면에서는 어떻게 적용해야 할까?
581. 최소 수집과 목적 제한 원칙은 데이터 모델과 로그 설계에 어떤 영향을 줄까?
582. 데이터 삭제 요청은 primary DB뿐 아니라 cache, search index, analytics, backup에서 어떻게 다뤄야 할까?
583. access log와 audit log는 보안 조사에서 어떤 차이를 가지며, 위변조 방지는 어떻게 해야 할까?
584. 내부자 위협을 줄이려면 권한 분리, 승인, 모니터링을 어떻게 조합해야 할까?
585. privacy by design은 법무 체크리스트가 아니라 제품 요구사항 단계에서 어떤 질문을 요구할까?
## Supply Chain / Secure SDLC

586. dependency confusion은 package namespace와 registry 설정을 어떻게 악용하는가?
587. lockfile은 재현 가능한 빌드에 도움을 주지만, 취약한 버전을 고정하는 위험은 어떻게 관리해야 할까?
588. SBOM은 단순 의존성 목록이 아니라 사고 대응에서 어떤 추적성을 제공할까?
589. CI/CD pipeline이 탈취되면 소스 코드보다 더 큰 피해가 날 수 있는 이유는 무엇일까?
590. build artifact signing은 배포된 코드가 신뢰 가능한 출처에서 왔다는 것을 어떻게 증명할까?
591. secret scanning은 커밋 이후 탐지만으로 충분할까, pre-commit과 push protection은 어떤 차이를 만들까?
592. threat modeling은 보안팀만의 작업이 아니라 개발 초기 설계에서 어떤 공격 경로를 드러내는가?
593. secure code review는 일반 코드 리뷰와 비교해 trust boundary, input validation, authz 경계를 어떻게 더 봐야 할까?
594. 보안 취약점 우선순위는 CVSS 점수만으로 정할 수 있을까, asset criticality와 exploitability를 어떻게 반영해야 할까?
595. 보안 패치를 빠르게 적용하기 위해 dependency update, test automation, rollback 전략은 왜 함께 필요할까?
## Incident Response / Security Operations

596. 보안 사고 대응에서 containment, eradication, recovery는 각각 어떤 목표를 가지는가?
597. 침해 지표 IOC와 공격자 행위 TTP는 탐지와 방어 전략에서 어떻게 다르게 쓰일까?
598. 계정 탈취 사고가 발생했을 때 password reset만으로 충분하지 않은 이유는 무엇인가?
599. 보안 모니터링에서 false positive를 줄이려다 false negative가 늘어나는 문제를 어떻게 균형 잡을까?
600. 좋은 보안 설계는 모든 공격을 막는 것이 아니라 탐지, 제한, 복구까지 포함한 실패 대응 능력이라고 볼 수 있을까?
