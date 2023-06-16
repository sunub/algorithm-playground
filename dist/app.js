"use strict";
const map = new Map();
var numOfWays = function (nums) {
    const root = nums.shift();
    let left = nums.splice(0, Math.floor(nums.length / 2));
    let right = nums;
    dfs(left, 1);
    dfs(right, 1);
};
function dfs(nums, floor) {
    if (!nums.length) {
        return;
    }
    map.has(floor)
        ? map.set(floor, [...map.get(floor), nums.shift()])
        : map.set(floor, [nums.shift()]);
    if (nums.length % 2 === 0 && nums.length !== 0) {
        dfs(nums, floor + 1);
        dfs(nums.splice(0), floor + 1);
    }
    else {
        return;
    }
}
console.log(numOfWays([3, 4, 5, 6, 1, 2, 7]));
//# sourceMappingURL=app.js.map