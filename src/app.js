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
    const queue = [[0, 0, diff[0][0]]];
    while (queue.length > 0) {
        const curr = queue.pop();
        const x = curr[0];
        const y = curr[1];
        const effort = curr[2];

        if (effort > diff[x][y]) continue;
        if (x === rows - 1 && y === cols - 1) return effort;

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
minimumEffortPath([
    [1, 2, 2],
    [3, 8, 2],
    [5, 3, 5],
]);
