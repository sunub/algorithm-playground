// 2352. Equal Row and Column Pairs

// Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

// A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

/**
 * @argument { Input: grid = [[3,2,1],[1,7,6],[2,7,7]] }
 * @returns { Output: 1 }
 */

function mySolution(grid: number[][]): number {
    const n = grid.length
    let answer = 0
    const memo = new Map()

    for (let i = 0; i < n; i++) {
        let rowNum = grid[i].join(" ")
        for (let j = 0; j < n; j++) {
            let colNum = getColNum(0, j)
            if (rowNum === colNum) {
                answer += 1
            }
        }
    }

    function getColNum(col: number, row: number) {
        if (memo.has(col)) {
            return memo.get(col)
        }

        let colNum: number[] = []
        while (col < n) {
            colNum.push(grid[col][row])
            col += 1
        }
        memo.set(col, colNum)
        return colNum.join(" ")
    }

    return answer
}
