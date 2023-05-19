// 785. Is Graph Bipartite?

// There is an undirected graph with n nodes, where each node is numbered between 0 and n - 1. You are given a 2D array graph, where graph[u] is an array of nodes that node u is adjacent to. More formally, for each v in graph[u], there is an undirected edge between node u and node v. The graph has the following properties:

/*
There are no self-edges (graph[u] does not contain u).
There are no parallel edges (graph[u] does not contain duplicate values).
If v is in graph[u], then u is in graph[v] (the graph is undirected).
The graph may not be connected, meaning there may be two nodes u and v such that there is no path between them.
*/

/**
 * @argument { Input: graph = [[1,2,3],[0,2],[0,1,3],[0,2]] }
 * @returns { Output: false }
 */

/**
 * @argument { Input: graph = [[1,3],[0,2],[1,3],[0,2]] }
 * @returns { Output: true }
 */

var isBipartite = function (graph: number[][]) {
    const color = new Map()
    const stack: number[] = []

    for (let i = 0; i < graph.length; i++) {
        if (color.has(i)) continue

        color.set(i, true)
        stack.push(i)

        while (stack.length) {
            const curr = stack.shift()!
            for (const neighbor of graph[curr]) {
                if (!color.has(neighbor)) {
                    stack.push(neighbor)
                    color.set(neighbor, !color.get(curr))
                } else if (color.get(curr) === color.get(neighbor)) {
                    return false
                }
            }
        }
    }

    return true
}
