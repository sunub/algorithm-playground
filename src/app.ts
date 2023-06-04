function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length
    const dp = Array.from(
        { length: m + 1 },
        (v, _) => (v = Array.from({ length: n + 1 }, (v, _) => (v = 0)))
    )
    const direction = [
        [1, 0],
        [0, 1],
    ]
    if (obstacleGrid[m - 1][n - 1] === 1 || obstacleGrid[0][0] === 1) return 0

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j] === 0) {
            }
        }
    }

    for (const [dx, dy] of direction) {
    }
}
console.log(
    uniquePathsWithObstacles([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
    ])
)
