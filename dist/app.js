"use strict";
var checkStraightLine = function (coordinates) {
    function getXDiff(a, b) {
        return a[1] - b[1];
    }
    function getYDiff(a, b) {
        return a[0] - b[0];
    }
    let deltaY = getYDiff(coordinates[1], coordinates[0]);
    let deltaX = getXDiff(coordinates[1], coordinates[0]);
    for (let i = 2; i < coordinates.length; i++) {
        if (deltaY * getXDiff(coordinates[i], coordinates[0]) !==
            deltaX * getYDiff(coordinates[i], coordinates[0])) {
            return false;
        }
    }
    return true;
};
console.log(checkStraightLine([
    [1, -8],
    [2, -3],
    [1, 2],
]));
//# sourceMappingURL=app.js.map