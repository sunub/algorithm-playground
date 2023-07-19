"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    intervals = intervals.sort((a, b) => a[1] - b[1]);
    let needToDelete = 0;
    let endNum = -Infinity;
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][1] >= endNum) {
            endNum = intervals[i][1];
        }
        else {
            needToDelete += 1;
        }
    }
    return needToDelete;
};
console.log(eraseOverlapIntervals([
    [0, 2],
    [1, 3],
    [2, 4],
    [3, 5],
    [4, 6],
]));
//# sourceMappingURL=app.js.map