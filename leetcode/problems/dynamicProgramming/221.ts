// 221. Maximal Square

// Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

// Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// Output: 4

function maximalSquare(matrix: string[][]): number {
    const row = matrix.length,
        cols = matrix[0].length
    const dp = Array.from({ length: row + 1 }, () =>
        Array.from({ length: cols + 1 }, () => 0)
    )
    let maxLength = 0

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][j] === "1") {
                dp[i][j] =
                    Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
                maxLength = Math.max(maxLength, dp[i][j])
            }
        }
    }

    return maxLength
}
