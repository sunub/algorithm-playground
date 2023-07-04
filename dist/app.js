"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function minFallingPathSum(matrix) {
    const length = matrix.length;
    const dp = Array.from({ length: length }, () => Array.from({ length: length }, () => 0));
    for (let i = length - 1; i >= 0; i--) {
        dp[length - 1][i] = matrix[length - 1][i];
    }
    for (let i = length - 2; i >= 0; i--) {
        for (let j = length - 1; j >= 0; j--) {
            let case1 = Infinity, case2 = Infinity, case3 = Infinity;
            if (i + 1 < length) {
                case1 = dp[i + 1][j];
            }
            if (i + 1 < length && j + 1 < length) {
                case2 = dp[i + 1][j + 1];
            }
            if (i + 1 < length && j - 1 >= 0) {
                case3 = dp[i + 1][j - 1];
            }
            dp[i][j] = Math.min(case1, case2, case3) + matrix[i][j];
        }
    }
}
console.log(minFallingPathSum([
    [2, 1, 3],
    [6, 5, 4],
    [7, 8, 9],
]));
//# sourceMappingURL=app.js.map