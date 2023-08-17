function updateMatrix(mat) {
    const m = mat.length
    const n = mat[0].length

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 1) {
                const visit = Array.from({ length: m }, () =>
                    Array.from({ length: n }, () => false)
                )
                mat[i][j] = bfs(i, j, visit)
            }
        }
    }

    return mat

    function bfs(i, j, visit) {
        if (i < 0 || i + 1 > m || j < 0 || j + 1 > n || visit[i][j]) {
            return Number.MAX_SAFE_INTEGER
        }

        if (mat[i][j] === 0) {
            return 0
        }

        visit[i][j] = true
        const a = bfs(i - 1, j, visit)
        const b = bfs(i + 1, j, visit)
        const c = bfs(i, j - 1, visit)
        const d = bfs(i, j + 1, visit)

        return 1 + Math.min(a, b, c, d)
    }
}

console.log(
    updateMatrix([
        [0, 0, 0],
        [0, 1, 0],
        [1, 1, 1],
    ])
)
