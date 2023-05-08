"use strict";
var diagonalSum = function (mat) {
    let answer = 0;
    let col = 0, row = mat.length - 1;
    let i = 0;
    while (col < mat.length || row >= 0) {
        if (col === row) {
            answer += mat[col][row];
        }
        else {
            answer += mat[col][col];
            answer += mat[row][i];
        }
        ;
        [col, row, i] = [col + 1, row - 1, i + 1];
    }
    return answer;
};
console.log(diagonalSum([
    [7, 3, 1, 9],
    [3, 4, 6, 9],
    [6, 9, 6, 6],
    [9, 5, 8, 5],
]));
//# sourceMappingURL=app.js.map