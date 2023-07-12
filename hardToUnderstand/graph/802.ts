// 802. Find Eventual Safe States

// There is a directed graph of n nodes with each node labeled from 0 to n - 1. The graph is represented by a 0-indexed 2D integer array graph where graph[i] is an integer array of nodes adjacent to node i, meaning there is an edge from node i to each node in graph[i].

// A node is a terminal node if there are no outgoing edges. A node is a safe node if every possible path starting from that node leads to a terminal node (or another safe node).

// Return an array containing all the safe nodes of the graph. The answer should be sorted in ascending order.

// Input: graph = [[1,2],[2,3],[5],[0],[5],[],[]]
// Output: [2,4,5,6]

// Input: graph = [[1,2,3,4],[1,2],[3,4],[0,4],[]]
// Output: [4]

var eventualSafeNodes = function (graph: number[][]) {
    const terminalCode: number[] = []
    const nodeCount = graph.length
    const adj: Map<number, number[]> = new Map()

    for (let i = 0; i < nodeCount; i++) {
        adj.set(i, graph[i])
    }

    const visit = Array.from({ length: nodeCount }, () => false)
    const inStack = Array.from({ length: nodeCount }, () => false)

    for (let i = 0; i < nodeCount; i++) {
        dfs(i, visit, inStack)
    }

    const safeNode = []
    for (let i = 0; i < nodeCount; i++) {
        if (!inStack[i]) {
            safeNode.push(i)
        }
    }

    return safeNode

    function dfs(node: number, visit: boolean[], inStack: boolean[]) {
        if (inStack[node]) {
            return true
        }
        if (visit[node]) {
            return false
        }

        visit[node] = true
        inStack[node] = true
        for (const neighbor of adj.get(node)!) {
            if (dfs(neighbor, visit, inStack)) {
                return true
            }
        }

        inStack[node] = false
        return false
    }
}
