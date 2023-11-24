// let dijkstra = (n, map, s, d) => {
//     let visited = new Array(n).fill(0);
//     let costs = new Array(n).fill(0);
//     costs[s] = 1;
//     while (true) {
//         let node;
//         for (let i = 0; i < visited.length; i++) {
//             if (visited[i]) continue;
//             if (node === undefined) node = i;
//             else node = costs[node] < costs[i] ? i : node;
//         }
//         if (node === undefined) break;
//         if (node === d) return costs[d];
//         visited[node] = 1;
//         if (map[node] === undefined) continue;
//         let adjNodes = Object.keys(map[node]);
//         for (let adj of adjNodes) {
//             if (visited[adj]) continue;
//             let w = map[node][adj] * costs[node];
//             costs[adj] = Math.max(costs[adj], w);
//         }
//     }
//     return costs[d];
// };
// dijkstra 알고리즘은 시작과 끝이 정해져 있을 때 최소 비용으로 도달할 수 있는 경우의 수를 구할 경우 유용하다. 하지만 주의해야할 것은 비용 중 음수가 있을 경우 테스트가 정상적으로 작동하지 않는다는 것을 유의해서 적용해야 한다.

// 문제를 해결하는데 있어 제약된 전체의 크기
const n = 9;

/**
 *
 * @param {number} src //
 */
function dijkstra(startNode, endNode, graph) {
    // 방문한 노드는 다시 방문하지 않기 위해서, 선택한 노드는 다시 방문하지 않기 위해 갑을 변환 시켜주어야 한다.
    const visited = Array.from({ length: n }, () => false);

    // 각 노드에 방문할 때 마다 최소 비용을 찾은 내용을 업데이트 해줘서 반복 작업을 줄여야 한다.
    const costs = Array.from({ length: n }, () => Infinity);

    const pq = new PriorityQueue();

    for (let node in graph) {
        if (node === startNode) {
            // 시작지점의 비용은 0으로 초기화 해주고 진행해야 한다.
            distances[node] = 0;
            pq.enqueue(node, 0); // Put the starting node in our priority queue
        } else {
            // 시작지점 이외의 노드들은 Infinity로 초기화 해준다.
            distances[node] = Infinity;
            pq.enqueue(node, Infinity);
        }
    }

    // 시작지점의 비용은 0으로 초기화 해주고 진행해야 한다.
    while (!pq.isEmpty()) {
        const shortestStep = pq.dequeue();
        const currentNode = shortestStep.element;

        if (!graph[currentNode]) continue;

        for (let neighbor in graph[currentNode]) {
            let newDistance = costs[currentNode] + graph[currentNode];
            if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;
                prev[neighbor] = currentNode;
                pq.enqueue(newDistance, neighbor);
            }
        }
    }
}

function dijkstra(graph, start) {
    const n = Object.keys(graph).length;
    const dist = new Array(n).fill(Infinity);
    const visit = new Array(n).fill(false);

    dist[start] = 0;

    for (let i = 0; i < n - 1; i++) {
        let u = -1;

        // Find the unvisited node with the smallest distance
        for (let j = 0; j < n; j++) {
            if (!visit[j] && (u === -1 || dist[j] < dist[u])) {
                u = j;
            }
        }

        // Mark the chosen node as visited
        visit[u] = true;

        // Update the distance for the neighbors
        for (let v in graph[u]) {
            if (!visit[v] && dist[u] + graph[u][v] < dist[v]) {
                dist[v] = dist[u] + graph[u][v];
            }
        }
    }

    return dist;
}
