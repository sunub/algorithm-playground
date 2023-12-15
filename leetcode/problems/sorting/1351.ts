// 1351. Count Negative Numbers in a Sorted Matrix

// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

/**
 *@argument {Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]}
 *@returns {Output: 8}
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var myAnswer = function (grid) {
    const flat = grid.flat(1).sort((a, b) => a - b)
    const length = flat.length
    const half = Math.floor(length / 2)
    let start, end, answer
    if (flat[half] > 0) {
        ;[start, end, answer] = [0, half, 0]
    } else {
        ;[start, end, answer] = [half, length, half]
    }

    for (let i = start; i < end; i++) {
        flat[i] < 0 ? (answer += 1) : null
    }
    return answer
}

var countNegatives = function (grid) {
    const newArray = grid.flat()
    let count = 0
    console.log(newArray)
    newArray.filter((item) => {
        if (item < 0) count++
    })
    return count
}
