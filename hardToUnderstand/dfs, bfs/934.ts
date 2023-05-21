// You are given an n x n binary matrix grid where 1 represents land and 0 represents water.
// An island is a 4-directionally connected group of 1's not connected to any other 1's. There are exactly two islands in grid.
// You may change 0's to 1's to connect the two islands to form one island.
// Return the smallest number of 0's you must flip to connect the two islands.

/**
 * @argument { Input: grid = [[0,1],[1,0]] }
 * @returns { Output: 1 }
 */
/**
 * @argument { Input: grid = [[0,1,0],[0,0,0],[0,0,1]] }
 * @returns { Output: 2 }
 */

var shortestBridge = function (grid: number[][]) {
    const length = grid.length
    const islands = Array(2).fill(0)
    let count = 0
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (grid[i][j] === 1) {
                islands[count] = dfs(i, j, [])
                count += 1
            }
        }
    }

    const island1: number[][] = islands.shift()!
    const island2: number[][] = islands.shift()!

    let minDistance = Infinity
    for (let i = 0; i < island1.length; i++) {
        let curMinDistance = Infinity
        let x1 = island1[i][0]
        let y1 = island1[i][1]

        for (let j = 0; j < island2.length; j++) {
            let x2 = island2[j][0]
            let y2 = island2[j][1]

            let distance = Math.abs(x2 - x1) + Math.abs(y2 - y1) - 1
            curMinDistance = Math.min(distance, curMinDistance)
        }
        minDistance = Math.min(minDistance, curMinDistance)
    }

    return minDistance

    function dfs(col: number, row: number, queue: number[][]): number[][] {
        if (
            col < 0 ||
            col + 1 > length ||
            row < 0 ||
            row + 1 > length ||
            grid[col][row] !== 1
        ) {
            return queue
        }
        grid[col][row] = -1
        queue.push([col, row])

        dfs(col + 1, row, queue)
        dfs(col - 1, row, queue)
        dfs(col, row + 1, queue)
        dfs(col, row - 1, queue)
        return queue
    }
}
