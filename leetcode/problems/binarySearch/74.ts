// 74. Search a 2D Matrix

// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

function searchMatrix(matrix: number[][], target: number): boolean {
    let col = -1
    let left = 0
    let right = matrix[0].length - 1
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][left] <= target && target <= matrix[i][right]) {
            col = i
        }
    }

    if (col === -1) {
        return false
    }

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (matrix[col][mid] === target) {
            return true
        }

        if (matrix[col][mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return false
}
