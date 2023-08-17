function updateMatrix(mat: number[][]): number[][] {
    const m = mat.length - 1
    const n = mat[0].length - 1

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 1) {
                bfs(i, j, 0)
            }
        }
    }

    function bfs(i: number, j: number, count) {}
}

console.log(
    updateMatrix([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
    ])
)
