// 542. 01 Matrix

// Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

// The distance between two adjacent cells is 1.

// Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
// Output: [[0,0,0],[0,1,0],[1,2,1]]

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

const DIRECTION = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
]

var updateMatrix = function (mat) {
    const m = mat.length
    const n = mat.length

    const queue = []
    const visit = Array.from({ length: m }, () =>
        Array.from({ length: n }, () => false)
    )
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j, 0])
                visit[i][j] = true
            }
        }
    }

    while (queue.length) {
        const curr = queue.shift()
        let row = curr[0],
            col = curr[1],
            steps = curr[2]

        for (const direction of DIRECTION) {
            const nextRow = row + direction[0],
                nextCol = col + direction[1]

            if (valid(nextRow, nextCol) && !visit[nextRow][nextCol]) {
                visit[nextRow][nextCol] = true
                queue.push([nextRow, nextCol, steps + 1])
                mat[nextRow][nextCol] = steps + 1
            }
        }
    }

    return mat

    function valid(row, col) {
        return 0 <= row && row < m && 0 <= col && col < n
    }
}
