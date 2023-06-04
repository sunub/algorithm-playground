"use strict";
function uniquePathsWithObstacles(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const dp = Array.from({ length: m + 1 }, (v, _) => (v = Array.from({ length: n + 1 }, (v, _) => (v = 0))));
    const direction = [
        [1, 0],
        [0, 1],
    ];
    if (obstacleGrid[m - 1][n - 1] === 1 || obstacleGrid[0][0] === 1)
        return 0;
    for (let i = 1; i < m + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            if (obstacleGrid[i][j - 1] === 0) {
                dp[i][j - 1] = dp[i][j] + 1;
            }
            if (obstacleGrid[i - 1][j] === 0) {
                dp[i - 1][j] = dp[i][j] + 1;
            }
        }
    }
    for (const [dx, dy] of direction) {
    }
}
console.log(uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
]));
//# sourceMappingURL=app.js.map