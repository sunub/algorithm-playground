function minimumTotal(triangle: number[][]): number {
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
console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]))
