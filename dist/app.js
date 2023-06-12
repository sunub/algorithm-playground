"use strict";
function minFallingPathSum(matrix) {
    const memo = new Map();
    const m = matrix.length;
    const n = matrix[0].length;
    for (let i = 0; i < n; i++) {
        dfs(1, i, "", matrix[0][i]);
    }
    function dfs(col, row, key, min) {
        if (col >= m || row >= n) {
            return min;
        }
        if (memo.has(key)) {
            return memo.get(key);
        }
        for (let i = row - 1 >= 0 ? row - 1 : 0; i <= row + 1; i++) {
            let curKey = `${matrix[col][i]}`;
            memo.set(key, dfs(col + 1, i, `${key}${curKey}`, min + matrix[col][i]));
        }
        return min;
    }
}
console.log(minFallingPathSum([
    [2, 1, 3],
    [6, 5, 4],
    [7, 8, 9],
]));
//# sourceMappingURL=app.js.map