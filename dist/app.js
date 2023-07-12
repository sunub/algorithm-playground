"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var eventualSafeNodes = function (graph) {
    const terminalCode = [];
    const nodeCount = graph.length;
    const adj = new Map();
    for (let i = 0; i < nodeCount; i++) {
        adj.set(i, graph[i]);
    }
    const visit = Array.from({ length: nodeCount }, () => false);
    const inStack = Array.from({ length: nodeCount }, () => false);
    for (let i = 0; i < nodeCount; i++) {
        dfs(i, visit, inStack);
    }
    const safeNode = [];
    for (let i = 0; i < nodeCount; i++) {
        if (!inStack[i]) {
            safeNode.push(i);
        }
    }
    return safeNode;
    function dfs(node, visit, inStack) {
        if (inStack[node]) {
            return true;
        }
        if (visit[node]) {
            return false;
        }
        visit[node] = true;
        inStack[node] = true;
        for (const neighbor of adj.get(node)) {
            if (dfs(neighbor, visit, inStack)) {
                return true;
            }
        }
        inStack[node] = false;
        return false;
    }
};
// function searchAdj(
//     node: number,
//     visit: Set<number>,
//     adj: Map<number, number[]>,
//     isCircular: boolean
// ): boolean {
//     if (visit.has(node)) {
//         isCircular = true
//         return isCircular
//     }
//     if (adj.get(node)?.length === 0) {
//         return isCircular
//     }
//     visit.add(node)
//     for (const currNode of adj.get(node)!) {
//         isCircular = searchAdj(currNode, visit, adj, isCircular)
//     }
//     return isCircular
// }
console.log(eventualSafeNodes([[1, 2], [2, 3], [5], [0], [5], [], []]));
//# sourceMappingURL=app.js.map