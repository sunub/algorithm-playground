// 63. Unique Paths II
// You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.

// Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The testcases are generated so that the answer will be less than or equal to 2 * 109.

/**
/ *@argument {Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]}
/ *@returns {Output: 2}
*/

var uniquePathsWithObstacles = function (obstacleGrid) {
    let m = obstacleGrid.length
    let n = obstacleGrid[0].length
    let memo = new Map()
    if (m === 1 && n === 1) {
        if (obstacleGrid[0][0] === 1) {
            return 0
        }
        return 1
    }

    const getAllPaths = (row, column) => {
        if (row === 0 && column === 0) {
            if (obstacleGrid[0][0] === 1) {
                return 0
            }
            return 1
        }
        if (row < 0 || column < 0 || obstacleGrid[row][column] === 1) {
            return 0
        }
        if (memo.has(row + "_" + column)) {
            return memo.get(row + "_" + column)
        }

        let up = getAllPaths(row - 1, column)
        let left = getAllPaths(row, column - 1)
        memo.set(row + "_" + column, up + left)
        return up + left
    }

    return getAllPaths(m - 1, n - 1)
}
