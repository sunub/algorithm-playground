/**
 *  @example
 *  Given a square matrix mat, return the sum of the matrix diagonals.
 *  Only include the sum of all the elements on the primary diagonal
 *  and all the elements on the secondary diagonal that are not part
 *  of the primary diagonal.
 */

/**
 * @argument {Input: mat = [[1,2,3],[4,5,6],[7,8,9]]}
 * @returns {Output: 25}
 * @example
 * Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
 * Notice that element mat[1][1] = 5 is counted only once.
 */

var diagonalSum = function (mat) {
    let answer = 0
    let col = 0,
        row = mat.length - 1
    let i = 0
    while (col < mat.length || row >= 0) {
        if (col === row) {
            answer += mat[col][row]
        } else {
            answer += mat[col][col]
            answer += mat[row][i]
        }
        ;[col, row, i] = [col + 1, row - 1, i + 1]
    }
    return answer
}
