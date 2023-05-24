"use strict";
function maxScore(nums1, nums2, k) {
    const max = backTracking(0, k, [], nums1, "max", []);
    const min = backTracking(0, k, [], nums2, "min", []);
    const n = max.length;
    let answer = -Infinity;
    for (let i = 0; i < n; i++) {
        answer = Math.max(answer, max[i] * min[i]);
    }
    return answer;
}
function backTracking(start, target, temp, nums, status, result) {
    if (temp.length === target) {
        if (status === "max") {
            result.push(temp.reduce((acc, cur) => acc + cur));
        }
        else if (status === "min") {
            result.push(Math.min(...temp));
        }
        return result;
    }
    for (let i = start; i < nums.length; i++) {
        temp.push(nums[i]);
        backTracking(i + 1, target, temp, nums, status, result);
        temp.pop();
    }
    return result;
}
console.log(maxScore([79, 76, 41, 28, 41, 66, 44, 30, 25], [25, 0, 69, 67, 55, 0, 9, 77, 26], 7));
//# sourceMappingURL=app.js.map