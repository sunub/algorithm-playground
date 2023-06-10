// 1802. Maximum Value at a Given Index in a Bounded Array

// You are given three positive integers: n, index, and maxSum. You want to construct an array nums (0-indexed) that satisfies the following conditions:

// nums.length == n
// nums[i] is a positive integer where 0 <= i < n.
// abs(nums[i] - nums[i+1]) <= 1 where 0 <= i < n-1.
// The sum of all the elements of nums does not exceed maxSum.
// nums[index] is maximized.
// Return nums[index] of the constructed array.

// Note that abs(x) equals x if x >= 0, and -x otherwise.

/**
 * @argument { Input: n = 4, index = 2,  maxSum = 6 }
 * @returns { Output: 2 }
 */

var maxValue = function (n: number, index: number, maxSum: number) {
    let left = 1,
        right = maxSum

    while (left < right) {
        let mid = Math.floor((left + right + 1) >> 1)
        if (getSum(index, mid, n) <= maxSum) {
            left = mid
        } else {
            right = mid - 1
        }
    }

    return left

    function getSum(index: number, value: number, n: number): number {
        let count = 0
        if (value > index) {
            count += (value + value - index) * Math.floor((index + 1) / 2)
        } else {
            count +=
                (value + 1) * Math.floor((index + 1) / 2) + index - value + 1
        }

        if (value >= n - index) {
            count +=
                (value + value - n + 1 + index) * Math.floor((n - index) / 2)
        } else {
            count += (value + 1) * Math.floor(value / 2) + n - index - value
        }

        return count - value
    }
}
