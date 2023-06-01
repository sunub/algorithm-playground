"use strict";
var shortestPathBinaryMatrix = function (grid) {
    const m = grid[0].length;
    const n = grid.length;
    const visit = new Set();
    if (grid[0][0] !== 0 || grid[n - 1][n - 1] !== 0) {
        return -1;
    }
    console.log(dfs(0, 0, 1));
    function dfs(col, row, count) {
        if (col < 0 ||
            col + 1 > m ||
            row < 0 ||
            row + 1 > n ||
            grid[col][row] !== 0 ||
            visit.has(`${col} ${row}`)) {
            return count;
        }
        visit.add(`${col} ${row}`);
        if (col + 1 < m && row - 1 >= 0 && grid[col + 1][row - 1] === 0) {
            return dfs(col + 1, row - 1, count + 1);
        }
        if (col - 1 >= 0 && row + 1 < n && grid[col - 1][row + 1] === 0) {
            return dfs(col - 1, row + 1, count + 1);
        }
        if (col + 1 < m && row + 1 < n && grid[col + 1][row + 1] === 0) {
            return dfs(col + 1, row + 1, count + 1);
        }
        if (col - 1 >= 0 && row - 1 && grid[col - 1][row - 1] === 0) {
            return dfs(col - 1, row - 1, count + 1);
        }
        if (row + 1 < n && grid[col][row + 1] === 0) {
            return dfs(col, row + 1, count + 1);
        }
        if (row - 1 >= 0 && grid[col][row - 1] === 0) {
            return dfs(col, row - 1, count + 1);
        }
        if (col + 1 < m && grid[col + 1][row] === 0) {
            return dfs(col + 1, row, count + 1);
        }
        if (col - 1 >= 0 && grid[col - 1][row] === 0) {
            return dfs(col - 1, row, count + 1);
        }
        return count;
    }
};
console.log(shortestPathBinaryMatrix([
    [0, 1, 1, 0, 0, 0],
    [0, 1, 0, 1, 1, 0],
    [0, 1, 1, 0, 1, 0],
    [0, 0, 0, 1, 1, 0],
    [1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 0],
]));
//# sourceMappingURL=app.js.map