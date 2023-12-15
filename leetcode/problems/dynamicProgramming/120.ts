// 120. Triangle

// Given a triangle array, return the minimum path sum from top to bottom.

// For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

/**
 * @argument { Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]] }
 * @returns { Output: 11 }
 */

function minimumTotal(triangle: number[][]): number {
    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = triangle[i].length - 1; j >= 0; j--) {
            triangle[i][j] = Math.min(
                triangle[i + 1][j] + triangle[i][j],
                triangle[i][j] + triangle[i + 1][j + 1]
            )
        }
    }

    return triangle[0][0]
}

function memoization(triangle: number[][]) {
    const memo = new Map()

    function minPath(row: number, col: number) {
        let params = `${row}:${col}`

        if (memo.has(params)) {
            return memo.get(params)
        }
        let path = triangle[row][col]
        if (row < triangle.length - 1) {
            path += Math.min(minPath(row + 1, col), minPath(row + 1, col + 1))
        }
        memo.set(params, path)
        return path
    }

    return minPath(0, 0)
}
