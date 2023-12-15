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
