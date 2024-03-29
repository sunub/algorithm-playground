// 1514. Path with Maximum Probability

// You are given an undirected weighted graph of n nodes (0-indexed), represented by an edge list where edges[i] = [a, b] is an undirected edge connecting the nodes a and b with a probability of success of traversing that edge succProb[i].

// Given two nodes start and end, find the path with the maximum probability of success to go from start to end and return its success probability.

// If there is no path from start to end, return 0. Your answer will be accepted if it differs from the correct answer by at most 1e-5.

/**
 * @argument { Input: n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.2], start = 0, end = 2 }
 * @returns { Output: 0.25000 }
 */

let dijkstra = (n: number, map: any, s: number, d: number) => {
    let visited = new Array(n).fill(0)
    let costs = new Array(n).fill(0)
    costs[s] = 1
    while (true) {
        let node
        for (let i = 0; i < visited.length; i++) {
            if (visited[i]) continue
            if (node === undefined) node = i
            else node = costs[node] < costs[i] ? i : node
        }
        if (node === undefined) break
        if (node === d) return costs[d]
        visited[node] = 1
        if (map[node] === undefined) continue
        let adjNodes = Object.keys(map[node])
        for (let adj of adjNodes) {
            if (visited[adj]) continue
            let w = map[node][adj] * costs[node]
            costs[adj] = Math.max(costs[adj], w)
        }
    }
    return costs[d]
}

function maxProbability(
    n: number,
    edges: number[][],
    succProb: number[],
    start: number,
    end: number
): number {
    const graph = new Map()
    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][0],
            v = edges[i][1]
        const pathProb = succProb[i]

        graph.has(u)
            ? graph.set(u, [...graph.get(u), [v, pathProb]])
            : graph.set(u, [[v, pathProb]])
        graph.has(v)
            ? graph.set(v, [...graph.get(v), [u, pathProb]])
            : graph.set(v, [[u, pathProb]])
    }

    const maxProb = Array.from({ length: n }, () => 0)
    maxProb[start] = 1

    const queue: number[] = [start]
    while (queue.length) {
        let curNode = queue.shift()!

        for (const [nxtNode, pathProb] of graph.get(curNode)) {
            if (maxProb[curNode] * pathProb > maxProb[nxtNode]) {
                maxProb[nxtNode] = maxProb[curNode] * pathProb
                queue.push(nxtNode)
            }
        }
    }

    return maxProb[end]
}
