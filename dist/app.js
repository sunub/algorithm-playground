"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function minCost(nums, cost) {
    const dp = Array(nums.length)
        .fill(0)
        .map(() => Array.from({ length: nums.length }, () => 0));
    const map = new Map();
    let min = Infinity;
    for (let i = 0; i < nums.length; i++) {
        let j = 0;
        let curMin = 0;
        while (j < nums.length) {
            let diff = Math.abs(nums[j] - nums[i]);
            let key = `${nums[j]}, ${diff}`;
            if (map.has(key)) {
                curMin += map.get(key);
            }
            else {
                let curCost = dp[i][j] * cost[j];
                curMin += curCost;
                map.set(key, curCost);
            }
            j += 1;
        }
        min = Math.min(curMin, min);
    }
    console.log(dp);
    return min;
}
console.log(minCost([1, 3, 5, 2], [2, 3, 1, 14]));
//# sourceMappingURL=app.js.map