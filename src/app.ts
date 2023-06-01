var shortestPathBinaryMatrix = function (grid: number[][]) {
    const m = grid[0].length
    const n = grid.length
    const visit = new Set()
    if (grid[0][0] !== 0 || grid[n - 1][n - 1] !== 0) {
        return -1
    }

    return dfs(0, 0, 0)

    function dfs(col: number, row: number, count: number) {
        if (
            col < 0 ||
            col + 1 > m ||
            row < 0 ||
            row + 1 > n ||
            grid[col][row] !== 0 ||
            visit.has(`${col} ${row}`)
        ) {
            return count
        }

        visit.add(`${col} ${row}`)

        let moveDiagonal = Math.max(
            dfs(col + 1, row + 1, count + 1),
            dfs(col - 1, row - 1, count + 1),
            dfs(col + 1, row - 1, count + 1),
            dfs(col - 1, row + 1, count + 1)
        )

        let moveStraight = Math.max(
            dfs(col + 1, row, count + 1),
            dfs(col - 1, row, count + 1),
            dfs(col, row + 1, count + 1),
            dfs(col, row - 1, count + 1)
        )

        return Math.max(moveDiagonal, moveStraight)
    }
}

console.log(
    shortestPathBinaryMatrix([
        [0, 0, 0],
        [1, 0, 0],
        [1, 1, 0],
    ])
)
