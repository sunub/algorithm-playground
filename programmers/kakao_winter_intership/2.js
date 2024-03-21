/**
 *
 * @param {number[][]} edges
 */
function solution(edges) {
    const graph = new Map();
    const nodeCount = new Map();

    for (const [u, v] of edges) {
        graph.has(u) ? graph.set(u, [...graph.get(u), v]) : graph.set(u, [v]);
        nodeCount.set(v, (nodeCount.get(v) || 0) + 1);
    }

    let root = 0;
    for (const u of [...graph.keys()]) {
        if (graph.get(u).length >= 2 && !nodeCount.has(u)) {
            root = u;
        }
    }

    const answer = Array.from({ length: 4 }, () => 0);
    answer[0] = root;
    for (const node of [...graph.get(root)]) {
        const nodes = new Set(),
            lines = new Set();
        countNodeAndLines(node);

        if (nodes.size === lines.size) {
            answer[1] += 1;
        } else if (nodes.size > lines.size) {
            answer[2] += 1;
        } else if (nodes.size < lines.size) {
            answer[3] += 1;
        }

        function countNodeAndLines(currNode) {
            nodes.add(currNode);

            if (!graph.has(currNode)) return;

            for (const node of [...graph.get(currNode)]) {
                const line = `${currNode},${node}`;
                if (!lines.has(line)) {
                    lines.add(line);
                }

                if (!nodes.has(node)) {
                    countNodeAndLines(node);
                }
            }
            return;
        }
    }

    return answer;
}

solution([
    [4, 11],
    [1, 12],
    [8, 3],
    [12, 7],
    [4, 2],
    [7, 11],
    [4, 8],
    [9, 6],
    [10, 11],
    [6, 10],
    [3, 5],
    [11, 1],
    [5, 3],
    [11, 9],
    [3, 8],
]);
