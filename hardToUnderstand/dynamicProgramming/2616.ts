// 2616. Minimize the Maximum Difference of Pairs

// You are given a 0-indexed integer array nums and an integer p. Find p pairs of indices of nums such that the maximum difference amongst all the pairs is minimized. Also, ensure no index appears more than once amongst the p pairs.

// Note that for a pair of elements at the index i and j, the difference of this pair is |nums[i] - nums[j]|, where |x| represents the absolute value of x.

// Return the minimum maximum difference among all p pairs. We define the maximum of an empty set to be zero.

// Input: nums = [10,1,2,7,1,3], p = 2
// Output: 1
// Explanation: The first pair is formed from the indices 1 and 4, and the second pair is formed from the indices 2 and 5.
// The maximum difference is max(|nums[1] - nums[4]|, |nums[2] - nums[5]|) = max(0, 1) = 1. Therefore, we return 1.

/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function minimizeMax(nums, p) {
    nums.sort((a, b) => a - b)

    let left = 0,
        right = nums[nums.length - 1] - nums[0]

    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (canFormPairs(nums, mid, p)) {
            right = mid
        } else {
            left = mid + 1
        }
    }

    return left
}

function canFormPairs(nums, mid, p) {
    let count = 0
    for (let i = 0; i < nums.length - 1 && count < p; ) {
        if (nums[i + 1] - nums[i] <= mid) {
            count++
            i += 2
        } else {
            i++
        }
    }
    return count >= p
}
