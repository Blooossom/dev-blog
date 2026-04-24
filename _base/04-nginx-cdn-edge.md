# Nginx / CDN / Edge

총 10개 질문입니다.

## Nginx

~~45. Nginx는 웹 서버일까, 리버스 프록시일까, 로드밸런서일까?~~ `작성완료`
46. Nginx가 정적 파일을 Spring 서버보다 효율적으로 서빙할 수 있는 이유는 무엇일까?
~~47. 리버스 프록시를 두면 클라이언트는 실제 백엔드 서버의 존재를 알 수 있을까?~~ `작성완료`
48. Nginx 설정에서 `location` 매칭은 작성된 순서대로만 동작할까?
94. Nginx worker process와 worker connection 설정은 실제 동시 접속 처리량과 어떻게 연결될까?
~~95. Nginx에서 upstream keepalive를 설정하면 백엔드 서버와의 연결 비용이 어떻게 달라질까?~~ `작성완료`
96. proxy timeout 설정을 너무 길게 또는 짧게 잡으면 사용자 경험과 장애 감지에 어떤 영향이 있을까?
97. Nginx에서 buffering을 켜거나 끄는 선택은 대용량 응답, SSE, 스트리밍 API에서 어떻게 달라질까?
## Network / Infrastructure

409. Nginx와 application server의 timeout 값이 서로 맞지 않으면 어떤 499, 502, 504 계열 문제가 생길 수 있을까?
410. CDN edge cache에서 stale-while-revalidate와 stale-if-error는 availability와 freshness를 어떻게 교환할까?
