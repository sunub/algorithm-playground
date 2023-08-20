"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var findCriticalAndPseudoCriticalEdges = function (n, edges) {
    const adj = new Map();
    for (let i = 0; i < edges.length; i++) {
        adj.has(edges[i][0])
            ? adj.set(edges[i][0], [...adj.get(edges[i][0]), edges[i][1]])
            : adj.set(edges[i][0], [edges[i][1]]);
        adj.has(edges[i][1])
            ? adj.set(edges[i][1], [...adj.get(edges[i][1]), edges[i][0]])
            : adj.set(edges[i][1], [edges[i][0]]);
    }
    for (let i = 0; i <= n; i++) {
        search(i, adj.get(i), [], Array.from({ length: n }, () => false));
    }
    console.log(adj);
    function search(start, vertices, curr, visit) {
        if (visit[start] === true) {
            return;
        }
        visit[start] = true;
        curr.push(start);
        for (let i = 0; i < vertices.length; i++) {
            search(vertices[i], adj.get(vertices[i]), curr, visit);
            visit[start] = false;
        }
    }
};
console.log(findCriticalAndPseudoCriticalEdges(5, [
    [0, 1, 1],
    [1, 2, 1],
    [2, 3, 2],
    [0, 3, 2],
    [0, 4, 3],
    [3, 4, 3],
    [1, 4, 6],
]));
//# sourceMappingURL=app.js.map