# Algorithm / Data Structure / Performance Engineering

총 31개 질문입니다.

## Algorithm / Data Structure

135. 시간 복잡도 `O(n log n)` 알고리즘이 항상 `O(n)` 알고리즘보다 느리다고 말할 수 있을까?
~~136. 해시 테이블의 평균 탐색은 `O(1)`인데, 최악의 경우와 충돌 전략은 왜 여전히 중요할까?~~ `작성완료`
137. 정렬 알고리즘에서 stable sort가 필요한 실제 서비스 사례는 무엇일까?
138. quicksort는 평균적으로 빠르지만, 입력 분포에 따라 어떤 최악의 상황이 생길 수 있을까?
139. binary search는 정렬된 배열에서만 쓰는 기법일까, 답의 범위를 줄이는 문제에도 적용될 수 있을까?
140. two pointer와 sliding window는 비슷해 보이지만 어떤 조건에서 각각 더 자연스럽게 쓰일까?
141. BFS와 DFS는 단순 순회 방식 차이를 넘어 최단 거리, 사이클 탐지, 위상 정렬에서 어떻게 선택이 달라질까?
142. Dijkstra 알고리즘은 왜 음수 간선이 있는 그래프에서 올바르게 동작하지 않을까?
143. union-find는 연결 여부 확인 외에 어떤 문제 유형에서 강력하게 쓰일 수 있을까?
144. dynamic programming은 단순히 점화식을 세우는 문제가 아니라, 상태 정의와 중복 구조를 찾는 문제라고 볼 수 있을까?
145. greedy 알고리즘이 맞다는 것을 증명하려면 어떤 교환 논리나 불변 조건이 필요할까?
146. heap은 정렬된 자료구조가 아닌데도 우선순위 큐를 효율적으로 구현할 수 있는 이유는 무엇일까?
147. trie는 문자열 검색에 유리하지만, 메모리 사용량 측면에서는 어떤 부담이 있을까?
148. segment tree와 Fenwick tree는 둘 다 구간 질의를 처리하지만, 어떤 연산에서 선택이 갈릴까?
149. bloom filter는 존재 여부를 빠르게 판단하지만, false positive를 허용한다는 점이 어떤 설계 제약을 만들까?
150. 알고리즘 문제에서 입력 크기, 제한 시간, 메모리 제한을 보면 어떤 방식으로 풀이 전략을 역산할 수 있을까?
## Algorithm / Performance Engineering

426. amortized analysis는 배열 resize나 union-find에서 최악의 단일 연산과 평균 비용을 어떻게 다르게 설명할까?
427. cache-aware algorithm은 같은 Big-O라도 실제 성능을 왜 크게 바꿀 수 있을까?
428. external sorting은 메모리에 다 못 올리는 데이터를 어떤 방식으로 정렬할까?
429. consistent hashing은 노드 추가/삭제 시 rebalancing 범위를 어떻게 줄일까?
430. rendezvous hashing은 consistent hashing과 비교해 어떤 단순성과 재배치 특성을 가질까?
431. top-k 문제에서 heap, quickselect, streaming sketch는 입력 크기와 정확도 요구에 따라 어떻게 선택될까?
432. count-min sketch는 빈도 추정에서 어떤 오차를 허용하고, 어떤 서비스 문제에 적용될 수 있을까?
433. HyperLogLog는 distinct count를 정확히 세지 않고도 어떻게 큰 규모의 추정을 가능하게 할까?
434. graph traversal에서 bidirectional BFS는 어떤 조건에서 탐색 공간을 극적으로 줄일 수 있을까?
435. A* 알고리즘에서 heuristic이 admissible해야 최단 경로 보장이 가능한 이유는 무엇일까?
436. dynamic programming 최적화에서 monotonic queue, divide and conquer optimization, bitmask DP는 어떤 패턴을 노릴까?
437. NP-hard 문제를 만났을 때 정확해, 근사해, 휴리스틱, 제한 조건 완화를 어떻게 선택할까?
438. online algorithm은 전체 입력을 모르는 상태에서 어떤 경쟁비 관점으로 평가할 수 있을까?
439. backtracking에서 pruning 조건의 강도는 탐색 성능과 정답 보장에 어떤 영향을 줄까?
440. probabilistic data structure를 도입할 때 false positive와 false negative 중 무엇을 허용할지 어떻게 판단할까?
