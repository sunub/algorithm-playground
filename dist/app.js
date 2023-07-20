"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var findMinArrowShots = function (points) {
    points.sort((a, b) => a[1] - b[1]);
    let answer = 0;
    let shootingPoint = points[0][1];
    for (let i = 1; i < points.length; i++) {
        if (shootingPoint < points[i][0] || shootingPoint > points[i][1]) {
            answer += 1;
            shootingPoint = points[i][1];
        }
    }
    console.log(points);
};
console.log(findMinArrowShots([
    [3, 9],
    [7, 12],
    [3, 8],
    [6, 8],
    [9, 10],
    [2, 9],
    [0, 9],
    [3, 9],
    [0, 6],
    [2, 8],
]));
//# sourceMappingURL=app.js.map