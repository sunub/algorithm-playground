// 325. Maximum Size Subarray Sum Equals k

// Given an integer array nums and an integer k, return the maximum length of a
// subarray
//  that sums to k. If there is not one, return 0 instead.

// Example 1:

// Input: nums = [1,-1,5,-2,3], k = 3
// Output: 4
// Explanation: The subarray [1, -1, 5, -2] sums to 3 and is the longest.
// Example 2:

// Input: nums = [-2,-1,2,1], k = 1
// Output: 2
// Explanation: The subarray [-1, 2] sums to 1 and is the longest.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function (nums, k) {
    let prefixSum = 0;
    let longestSubarray = 0;
    const indices = new Map();

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];

        if (prefixSum === k) {
            longestSubarray = i + 1;
        }

        if (indices.has(prefixSum - k)) {
            longestSubarray = Math.max(
                longestSubarray,
                i - indices.get(prefixSum - k)
            );
        }

        if (!indices.has(prefixSum)) {
            indices.set(prefixSum, i);
        }
    }

    return longestSubarray;
};
