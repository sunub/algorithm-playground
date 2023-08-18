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
                // 내가 풀었던 문제에서 steps의 값이 각각의 값으로 서로 참조하지 않고 변수가 저장되지 않았던 문제를 해결할 수 있는 방법으로 사용되었다. 변수의 값들은 서로 참조가 되므로 이런 식으로 queue를 이용하여 돌아갈 수 있게끔 저장하는 방법을 사용해야 한다는 것을 기억하자.
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

function myAnswer(mat) {
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
        // 카운트 값이 저장이 되지 않고 돌아가지 않는다. 내가 원하는 것은 한번 돌때마다 이전의 값으로 돌아가는 것이지만 값들이 이전으로 돌릴때 서로 참조가 되어서 그런지 돌아가지 않고 저장된 값에서 계속해서 되니 내가 원하는 값이 되지 않는다.
        return 1 + Math.min(a, b, c, d)
    }
}
