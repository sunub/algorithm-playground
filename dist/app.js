"use strict";
var spiralOrder = function (matrix) {
    const answer = [];
    const visit = new Set();
    const m = matrix.length;
    const n = matrix[0].length;
    let left = 0;
    let right = n - 1;
    let up = 0;
    let down = m - 1;
    while (answer.length < m * n) {
        for (let col = left; col <= right; col++) {
            answer.push(matrix[up][col]);
        }
        for (let row = up + 1; row <= down; row++) {
            answer.push(matrix[row][right]);
        }
        if (up !== down) {
            for (let col = right - 1; col >= left; col--) {
                answer.push(matrix[down][col]);
            }
        }
        if (left !== right) {
            for (let row = down - 1; row > up; row--) {
                answer.push(matrix[row][left]);
            }
        }
        ;
        [left, right, up, down] = [left + 1, right - 1, up + 1, down - 1];
    }
    return answer;
};
spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
]);
//# sourceMappingURL=app.js.map