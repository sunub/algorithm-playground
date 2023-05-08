"use strict";
function mincostTickets(days, costs) {
    let maxDay = days[days.length - 1];
    if (maxDay <= 30) {
        return costs[2];
    }
    let costDay = [1, 7, 30];
    let start = 1;
    const dp = Array(days.length).fill(0);
    for (let i = 1; i < days.length; i++) {
        if (start + costDay[0] === days[i]) {
            dp[i] = dp[start] + costs[0];
        }
        else if (start + costDay[1] >= days[i]) {
            dp[i] = dp[start] + costs[1];
        }
        else if (start + costDay[2] >= days[i]) {
            dp[i] = dp[start] + costs[2];
        }
    }
}
console.log(mincostTickets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15]));
//# sourceMappingURL=onGoingProblem.js.map