// 1091. Shortest Path in Binary Matrix

// Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.

// A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:

// All the visited cells of the path are 0.
// All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).
// The length of a clear path is the number of visited cells of this path.

/**
 * @argument { Input: grid = [[0,1],[1,0]] }
 * @returns { Output: 2 }
 */

/**
 * @argument { Input: grid = [[0,0,0],[1,1,0],[1,1,0]] }
 * @returns { Output: 4 }
 */

const shortestPathBinaryMatrix = (grid) => {
    const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
    ]

    if (grid[0][0] === 1) return -1

    const N = grid.length
    const queue = [[0, 0, 1]]

    while (queue.length) {
        const [row, col, path] = queue.shift()!

        if (row === N - 1 && col === N - 1) return path

        for (const [dx, dy] of directions) {
            let x = row + dx
            let y = col + dy

            if (x < 0 || x >= N) continue
            if (y < 0 || y >= N) continue
            if (grid[x][y] !== 0) continue

            queue.push([x, y, path + 1])
            grid[x][y] = 1
        }
    }

    return -1
}
