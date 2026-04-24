# Network

총 22개 질문입니다.

## Network

~~101. TCP 3-way handshake는 단순히 연결을 확인하는 절차일까, 양쪽의 초기 sequence number를 합의하는 절차일까?~~ `작성완료`
~~102. TCP 4-way handshake에서 `TIME_WAIT` 상태가 필요한 이유는 무엇이고, 서버에 어떤 운영 이슈를 만들 수 있을까?~~ `작성완료`
~~103. TCP의 흐름 제어와 혼잡 제어는 각각 누구를 보호하기 위한 메커니즘일까?~~ `작성완료`
104. TCP는 신뢰성을 보장한다는데, 애플리케이션 레벨에서 timeout과 retry가 여전히 필요한 이유는 무엇일까?
105. UDP는 신뢰성이 없다는 설명만으로 충분할까, 어떤 상황에서는 UDP가 TCP보다 더 적합할까?
~~106. HTTP/1.1의 keep-alive와 HTTP/2의 multiplexing은 연결 사용 방식에서 무엇이 근본적으로 다를까?~~ `작성완료`
107. HTTP/2 multiplexing이 있어도 head-of-line blocking 문제가 완전히 사라지지 않는 이유는 무엇일까?
108. HTTP/3가 TCP 대신 QUIC 위에서 동작하면서 얻는 이점은 무엇일까?
109. TLS handshake는 어떤 과정을 통해 암호화 키를 안전하게 합의할까?
110. HTTPS를 사용해도 DNS 조회나 SNI를 통해 노출될 수 있는 정보는 무엇일까?
~~111. DNS 캐싱은 성능을 높이지만 장애 전파나 배포 롤백에서 어떤 문제를 만들 수 있을까?~~ `작성완료`
112. CDN은 단순히 정적 파일을 가까운 곳에서 내려주는 시스템일까, 캐시 무효화와 origin 보호까지 포함하는 시스템일까?
~~113. 프록시, 리버스 프록시, 로드밸런서는 트래픽 흐름에서 각각 어떤 위치와 책임을 가질까?~~ `작성완료`
~~114. L4 로드밸런서와 L7 로드밸런서는 어떤 정보를 기준으로 라우팅 결정을 내릴까?~~ `작성완료`
~~115. sticky session은 상태 관리 문제를 쉽게 해결해주지만, 확장성과 장애 대응에서는 어떤 부담을 만들까?~~ `작성완료`
~~116. NAT는 사설 IP 문제를 해결하지만, 서버 운영이나 P2P 통신에서는 어떤 제약을 만들까?~~ `작성완료`
117. 서버에서 `connection timeout`, `read timeout`, `idle timeout`은 각각 어떤 상황을 끊기 위한 설정일까?
## Network / Infrastructure

396. TCP congestion window는 packet loss와 RTT 변화에 따라 어떻게 조정되고, 애플리케이션 latency에 어떤 영향을 줄까?
397. tail latency는 평균 latency보다 왜 사용자 경험과 capacity planning에 더 중요한 지표가 될 수 있을까?
398. TLS termination을 edge, load balancer, application 중 어디에서 할지 결정할 때 어떤 보안과 운영 기준을 봐야 할까?
399. mTLS는 단순 암호화가 아니라 서비스 간 신원 확인에서 어떤 보장을 제공할까?
400. service mesh는 observability와 traffic control을 제공하지만, sidecar 비용과 운영 복잡도는 어떻게 증가할까?
