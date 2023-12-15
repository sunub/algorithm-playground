// 1658. Minimum Operations to Reduce X to Zero

// You are given an integer array nums and an integer x. In one operation, you can either remove the leftmost or the rightmost element from the array nums and subtract its value from x. Note that this modifies the array for future operations.

// Return the minimum number of operations to reduce x to exactly 0 if it is possible, otherwise, return -1.

// Example 1:

// Input: nums = [1,1,4,2,3], x = 5
// Output: 2
// Explanation: The optimal solution is to remove the last two elements to reduce x to zero.
// Example 2:

// Input: nums = [5,6,7,8,9], x = 4
// Output: -1
// Example 3:

// Input: nums = [3,2,20,1,1,3], x = 10
// Output: 5
// Explanation: The optimal solution is to remove the last three elements and the first two elements (5 operations in total) to reduce x to zero.

/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
    let target = -x,
        n = nums.length;
    for (let num of nums) target += num;

    if (target === 0) return n;

    let maxLen = 0,
        curSum = 0,
        left = 0;

    for (let right = 0; right < n; ++right) {
        curSum += nums[right];
        while (left <= right && curSum > target) {
            curSum -= nums[left];
            left++;
        }
        if (curSum === target) {
            maxLen = Math.max(maxLen, right - left + 1);
        }
    }

    return maxLen ? n - maxLen : -1;
};
