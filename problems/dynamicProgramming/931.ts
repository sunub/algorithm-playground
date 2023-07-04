// 931. Minimum Falling Path Sum

// Given an n x n array of integers matrix, return the minimum sum of any falling path through matrix.

// A falling path starts at any element in the first row and chooses the element in the next row that is either directly below or diagonally left/right. Specifically, the next element from position (row, col) will be (row + 1, col - 1), (row + 1, col), or (row + 1, col + 1).

// Input: matrix = [[2,1,3],[6,5,4],[7,8,9]]
// Output: 13

// Input: matrix = [[-19,57],[-40,-5]]
// Output: -59

function minFallingPathSum(matrix: number[][]): number {
    const length = matrix.length
    const dp = Array.from({ length: length }, () =>
        Array.from({ length: length }, () => 0)
    )

    for (let i = length - 1; i >= 0; i--) {
        dp[length - 1][i] = matrix[length - 1][i]
    }

    for (let i = length - 2; i >= 0; i--) {
        for (let j = length - 1; j >= 0; j--) {
            let case1 = Infinity,
                case2 = Infinity,
                case3 = Infinity

            if (i + 1 < length) {
                case1 = dp[i + 1][j]
            }

            if (i + 1 < length && j + 1 < length) {
                case2 = dp[i + 1][j + 1]
            }

            if (i + 1 < length && j - 1 >= 0) {
                case3 = dp[i + 1][j - 1]
            }

            dp[i][j] = Math.min(case1, case2, case3) + matrix[i][j]
        }
    }

    return Math.min(...dp[0])
}
