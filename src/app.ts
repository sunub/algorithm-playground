var shortestBridge = function (grid: number[][]) {
    const length = grid.length

    let minCount = Infinity
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

console.log(
    shortestBridge([
        [0, 1, 0],
        [0, 0, 0],
        [0, 0, 1],
    ])
)
