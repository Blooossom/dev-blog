# Kubernetes

총 11개 질문입니다.

## Kubernetes

~~49. Kubernetes의 Pod는 컨테이너 하나와 같은 개념일까?~~ `작성완료`
~~50. Deployment는 Pod를 실행하는 설정일까, 원하는 상태를 계속 유지하려는 컨트롤러일까?~~ `작성완료`
98. readiness probe와 liveness probe를 잘못 설정하면 정상 Pod가 계속 죽거나 트래픽을 받지 못하는 이유는 무엇일까?
~~99. Kubernetes의 Service는 Pod IP가 계속 바뀌는 문제를 어떤 방식으로 숨겨줄까?~~ `작성완료`
~~100. HPA가 CPU 사용률만 보고 스케일링하면 I/O bound 서비스나 queue 기반 서비스에서 어떤 한계가 있을까?~~ `작성완료`
## Network / Infrastructure

401. Kubernetes에서 request와 limit을 잘못 설정하면 CPU throttling과 OOMKill이 어떤 형태로 나타날까?
402. Kubernetes scheduler는 node affinity, taint, resource request를 바탕으로 어떤 결정을 내릴까?
403. Pod disruption budget은 노드 교체나 배포 중 가용성을 어떻게 보호할까?
404. rolling update 중 readiness probe가 늦거나 빠르면 트래픽 손실과 배포 지연이 어떻게 발생할까?
407. zero-downtime deployment는 애플리케이션 코드뿐 아니라 DB migration, cache warming, connection draining까지 왜 함께 봐야 할까?
408. autoscaling은 CPU 지표만으로 충분하지 않을 때 queue depth, latency, custom metric을 어떻게 활용해야 할까?
