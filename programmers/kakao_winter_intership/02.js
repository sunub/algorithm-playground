/**
 *
 * @param {number[][]} edges
 */
function solution(edges) {
    const graph = new Map();

    for (const [u, v] of edges) {
        graph.has(u) ? graph.set(u, [...graph.get(u), v]) : graph.set(u, [v]);
    }

    const findRoot = () => {
        const result = [];
        for (const [u, vertices] of [...graph.entries()]) {
            if (vertices.length > 1) {
                result.push(u);
            }
        }

        for (const root of result) {
            const isLoop = findLoop(root, new Set(), root);
            if (!isLoop) {
                return root;
            }
        }

        function findLoop(u, visit, root) {
            visit.add(u);

            if (!graph.has(u)) return false;

            for (const v of [...graph.get(u)]) {
                if (visit.has(v) && v === root) {
                    return true;
                }

                if (!visit.has(v)) {
                    return findLoop(v, visit, root);
                }
            }

            return false;
        }
    };

    const root = findRoot();

    for (const branch of graph.get(root)) {
        const donut = isDonut(branch);
    }

    function isDonut(root) {
        let queue = [root];
        const visit = new Set();

        let line = 0;
        let node = 0;
        while (queue.length) {
            const curr = queue.shift();

            if (visit.has(curr) && curr === root) continue;
            node += 1;
            visit.add(curr);

            if (graph.has(curr)) {
                for (const v of [...graph.get(curr)]) {
                    line += 1;
                    queue.unshift(v);
                }
            }
        }

        console.log(line, node);
        if (line === node) return true;
        return false;
    }

    function isStick(root) {}
}

function dfs(graph, u, visit, root) {
    visit.add(v);

    if (!graph.has(v)) return visit;

    for (const [v] of graph.get(u)) {
        if (visit.has(v) && v === root) {
            return false;
        }

        if (!visit.has(v)) {
            dfs(graph, v, visit);
        }
    }

    return visit;
}
solution([
    [2, 3],
    [4, 3],
    [1, 1],
    [2, 1],
]);
