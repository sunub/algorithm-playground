// 1631. Path With Minimum Effort

const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];
/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
    const rows = heights.length,
        cols = heights[0].length;

    const diff = Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => Infinity)
    );

    diff[0][0] = 0;
    const queue = [0, 0, diff[0][0]];
    while (queue.length) {
        const [x, y, effort] = queue.pop();

        if (effort > diff[x][y]) continue;
        if (x === rows - 1 && y === cols - 1) effort;

        for (const [dx, dy] of directions) {
            const nx = dx + x,
                ny = dy + y;
            if (nx >= 0 && nx < rows && ny >= 0 && ny < cols) {
                const newEffort = Math.max(
                    effort,
                    Math.abs(heights[x][y] - heights[nx][ny])
                );

                if (newEffort < diff[nx][ny]) {
                    diff[nx][ny] = newEffort;
                    queue.push([nx, ny, newEffort]);
                }
            }
        }
    }
};

let dijkstra = (n, map, s, d) => {
    let visited = new Array(n).fill(0);
    let costs = new Array(n).fill(0);
    costs[s] = 1;
    while (true) {
        let node;
        for (let i = 0; i < visited.length; i++) {
            if (visited[i]) continue;
            if (node === undefined) node = i;
            else node = costs[node] < costs[i] ? i : node;
        }
        if (node === undefined) break;
        if (node === d) return costs[d];
        visited[node] = 1;
        if (map[node] === undefined) continue;
        let adjNodes = Object.keys(map[node]);
        for (let adj of adjNodes) {
            if (visited[adj]) continue;
            let w = map[node][adj] * costs[node];
            costs[adj] = Math.max(costs[adj], w);
        }
    }
    return costs[d];
};
