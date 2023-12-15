// 435. Non-overlapping Intervals

// Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1

// Input: intervals = [[1,2],[1,2],[1,2]]
// Output: 2

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    intervals = intervals.sort((a, b) => a[1] - b[1])

    let needToDelete = 0
    let endNum = -Infinity

    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][0] >= endNum) {
            endNum = intervals[i][1]
        } else {
            needToDelete += 1
        }
    }

    return needToDelete
}
