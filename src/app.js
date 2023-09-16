/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
    const m = heights.length;
    const n = heights[0].length;
    const dp = Array.from({ length: m }, () =>
        Array.from({ length: n }, () => 0)
    );

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            let curr = heights[i][j];

            if (i === 0 && j === 0) {
                dp[i][j] = Math.min(dp[i + 1][j], dp[i][j + 1]);
            } else if (i + 1 < m && j + 1 < n) {
                dp[i][j] = Math.min(
                    Math.abs(curr - heights[i + 1][j]),
                    Math.abs(curr - heights[i][j + 1])
                );
            } else if (i + 1 < m) {
                dp[i][j] = Math.max(
                    Math.abs(curr - heights[i + 1][j]),
                    dp[i + 1][j]
                );
            } else if (j + 1 < n) {
                dp[i][j] = Math.max(
                    Math.abs(curr - heights[i][j + 1]),
                    dp[i][j + 1]
                );
            }
        }
    }
    console.log(dp);

    return dp[0][0];
};

console.log(
    minimumEffortPath([
        [1, 2, 2],
        [3, 8, 2],
        [5, 3, 5],
    ])
);
