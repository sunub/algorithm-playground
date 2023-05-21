"use strict";
var shortestBridge = function (grid) {
    const length = grid.length;
    let minCount = Infinity;
    const queue = [];
    const map = new Map();
    let island = 1;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (grid[i][j] === 1) {
                let key = `island${island}`;
                map.set(key, dfs(i, j, []));
                island += 1;
            }
        }
    }
    return minCount;
    function dfs(col, row, queue) {
        if (col < 0 ||
            col + 1 > length ||
            row < 0 ||
            row + 1 > length ||
            grid[col][row] !== 1) {
            return queue;
        }
        grid[col][row] = -1;
        queue.push([col, row]);
        dfs(col + 1, row, queue);
        dfs(col - 1, row, queue);
        dfs(col, row + 1, queue);
        dfs(col, row - 1, queue);
        return queue;
    }
};
console.log(shortestBridge([
    [1, 1, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1],
]));
//# sourceMappingURL=app.js.map