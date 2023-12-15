// 2328. Number of Increasing Paths in a Grid

// You are given an m x n integer matrix grid, where you can move from a cell to any adjacent cell in all 4 directions.

// Return the number of strictly increasing paths in the grid such that you can start from any cell and end at any cell. Since the answer may be very large, return it modulo 109 + 7.

// Two paths are considered different if they do not have exactly the same sequence of visited cells.

/**
 * @argument { Input: grid = [[1,1],[3,4]] }
 * @returns { Output: 8 }
 */

var myAnswer = function (grid) {
    const m = grid.length
    const n = grid[0].length
    const dp = Array(m)
        .fill(0)
        .map((v, i) => (v = Array.from({ length: n }, (v, _) => (v = 1))))
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i + 1 < m && grid[i + 1][j] && grid[i + 1][j] > grid[i][j]) {
                dp[i + 1][j] += dp[i][j]
            }
            if (j + 1 < n && grid[i][j + 1] && grid[i][j + 1] > grid[i][j]) {
                dp[i][j + 1] += dp[i][j]
            }
        }
    }

    let max = 0
    for (let i = 0; i < m; i++) {
        max += dp[i].reduce((acc, curr) => acc + curr)
    }
    return max
}

var countPaths = function (grid: number[][]) {
    let mod = Math.pow(10, 9) + 7
    let result = 0
    let rows = grid.length,
        columns = grid[0].length
    let dp = Array(rows)
        .fill(null)
        .map((_) => Array(columns).fill(0))

    function dfs(r: number, c: number, preVal: number): number {
        if (r < 0 || r == rows || c < 0 || c == columns || grid[r][c] <= preVal)
            return 0
        if (dp[r][c]) return dp[r][c]
        return (dp[r][c] =
            (1 +
                dfs(r + 1, c, grid[r][c]) +
                dfs(r - 1, c, grid[r][c]) +
                dfs(r, c + 1, grid[r][c]) +
                dfs(r, c - 1, grid[r][c])) %
            mod)
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            result += dfs(i, j, -1) % mod
        }
    }

    return result % mod
}
