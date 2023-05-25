// Maximal Square

// Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

/**
 * @argument { Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]] }
 * @returns { Output: 4 }
 */

function maximalSquare(matrix: string[][]): number {
    let rows = matrix.length,
        cols = rows > 0 ? matrix[0].length : 0
    const dp = Array.from(
        { length: rows + 1 },
        (v, _) => (v = Array.from({ length: cols + 1 }, (v, _) => (v = 0)))
    )
    let maxqlen = 0

    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            if (matrix[i - 1][j - 1] === "1") {
                dp[i][j] =
                    Math.min(
                        Math.min(dp[i][j - 1], dp[i - 1][j]),
                        dp[i - 1][j - 1]
                    ) + 1
                maxqlen = Math.max(maxqlen, dp[i][j])
            }
        }
    }
    return maxqlen * maxqlen
}
