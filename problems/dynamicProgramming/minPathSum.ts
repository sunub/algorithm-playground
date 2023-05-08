function minPathSum(grid: number[][]): number {
    const dp = Array(grid.length).fill(Array(grid[0].length).fill(0))

    for (let i = grid.length - 1; i > -1; i--) {
        for (let j = grid[0].length - 1; j > -1; j--) {
            if (i === grid.length - 1 && j !== grid[0].length - 1) {
                dp[i][j] = grid[i][j] + dp[i][j + 1]
            } else if (j === grid[0].length - 1 && i !== grid.length - 1) {
                dp[i][j] = grid[i][j] + dp[i + 1][j]
            } else if (j !== grid[0].length - 1 && i !== grid.length - 1) {
                dp[i][j] = grid[i][j] + Math.min(dp[i + 1][j], dp[i][j + 1])
            } else {
                dp[i][j] = grid[i][j]
            }
        }
    }
    return dp[0][0]
}
