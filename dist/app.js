"use strict";
function minimumTotal(triangle) {
    const tmp = [];
    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = triangle[i].length - 1; j >= 0; j--) {
            triangle[i][j] = Math.min(triangle[i + 1][j] + triangle[i][j], triangle[i][j] + triangle[i + 1][j + 1]);
        }
    }
}
console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
//# sourceMappingURL=app.js.map