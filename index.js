/**
 *
 * @param {number[][]} edges
 */
function solution(edges) {
    const graph = new Map();

    for (const [u, v] of edges) {
        graph.has(u) ? graph.set(u, [...graph.get(u), v]) : graph.set(u, [v]);
    }

    function countNodeAndLines(root, visit) {
        if(!graph.get(root)) {
            visit.add(root);
            return [new Set([root]), new Set()]};
        let queue = [root];
        const node = new Set();
        const line = new Set();
        let isFirst = true;
        while (queue.length) {
            const curr = queue.shift();
            
            if (node.has(curr) && curr === root) continue;
            if(isFirst) { isFirst = false }
            else {
                visit.add(curr);
                node.add(curr)};


            if (graph.has(curr)) {
                for (const v of [...graph.get(curr)]) {
                    const lineName = `${curr},${v}`;
                    line.add(lineName);
                     if(!node.has(v)) {
                        queue.unshift(v);
                    }
                }
            }
        }
        return [node, line];
    }

    function isDonut(node, line) {
        let size = 1;
        while(size <= node.size) {
            let expectedNode = size;
            let expectedLine = size;
            if(expectedNode === node.size && expectedLine === line.size) {
                return true;
            }
            size += 1; 
        }
        return false;
    }

    function isStick(node, line) {
        let size = 1;
        while(size <= node.size) {
            let expectedNode = size;
            let expectedLine = size - 1;
            if(expectedNode === node.size && expectedLine === line.size) {
                return true;
            }
            size += 1; 
        }
        return false;
    }
    
    function isEightShapeGraph(node, line) {
        let size = 1;
        while(size <= node.size) {
            let expectedNode = 2 * size + 1;
            let expectedLine = 2 * size + 2;
            if(expectedNode === node.size && expectedLine === line.size) {
                return true;
            }
            size += 1; 
        }
        return false;
    }

    const findRoot = () => {
        const [node, line] = countNodeAndLines(branch);

    };


    // const root = findRoot();

    const answer = Array.from({ length: 4}, () => 0);
    // answer[0] = root;

    const visit = new Set();
    const allNodes = new Set();
    for(const [root, branches] of [...graph.entries()]) {
        allNodes.add(root);
        for(const branch of branches) {
            allNodes.add(branch);
            if(visit.has(branch)) continue;
            const [node, line] = countNodeAndLines(branch, visit);
            const donut = isDonut(node, line);
            const stick = isStick(node, line);
            const eightShapeGraph = isEightShapeGraph(node, line);
            
            answer[1] += donut ? 1 : 0
            answer[2] += stick ? 1 : 0
            answer[3] += eightShapeGraph ? 1 : 0
        }
    }

    const root = [...allNodes.values()].find((node) => !visit.has(node))
    answer[0] = root;
    return answer;
}

solution([[4, 11], [1, 12], [8, 3], [12, 7], [4, 2], [7, 11], [4, 8], [9, 6], [10, 11], [6, 10], [3, 5], [11, 1], [5, 3], [11, 9], [3, 8]]);
