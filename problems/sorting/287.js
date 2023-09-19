// 287. Find the Duplicate Number

// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    const set = new Set();

    let answer = 0;
    for (let i = 0; i < nums.length; i++) {
        set.has(nums[i]) ? (answer = nums[i]) : set.add(nums[i]);
        if (answer) return answer;
    }
};
