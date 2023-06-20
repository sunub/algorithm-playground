// 2090. K Radius Subarray Averages

// You are given a 0-indexed array nums of n integers, and an integer k.

// The k-radius average for a subarray of nums centered at some index i with the radius k is the average of all elements in nums between the indices i - k and i + k (inclusive). If there are less than k elements before or after the index i, then the k-radius average is -1.

// Build and return an array avgs of length n where avgs[i] is the k-radius average for the subarray centered at index i.

// The average of x elements is the sum of the x elements divided by x, using integer division. The integer division truncates toward zero, which means losing its fractional part.

// For example, the average of four elements 2, 3, 1, and 5 is (2 + 3 + 1 + 5) / 4 = 11 / 4 = 2.75, which truncates to 2.

/**
 * @argument { Input: nums = [7,4,3,9,1,8,5,2,6], k = 3 }
 * @returns { Output: [-1,-1,-1,5,4,4,-1,-1,-1] }
 */

function getAverages(nums: number[], k: number): number[] {
    if (k === 0) {
        return nums
    }

    const n = nums.length
    const averages = new Array(n).fill(-1)

    if (2 * k + 1 > n) {
        return averages
    }

    const prefix: number[] = new Array(n + 1).fill(0)
    for (let i = 0; i < n; ++i) {
        prefix[i + 1] = prefix[i] + nums[i]
    }
    console.log(prefix)

    for (let i = k; i < n - k; ++i) {
        const leftBound = i - k,
            rightBound = i + k
        const subArraySum = prefix[rightBound + 1] - prefix[leftBound]
        const average = Math.floor(subArraySum / (2 * k + 1))
        averages[i] = average
    }

    return averages
}

var myAnswer = function (nums, k) {
    // When a single element is considered then its average will be the number itself only.
    if (k === 0) {
        return nums
    }

    const n = nums.length
    const averages = new Array(n).fill(-1)

    // Any index will not have 'k' elements in its left and right.
    if (2 * k + 1 > n) {
        return averages
    }

    // First get the sum of first window of the 'nums' array.
    let windowSum = 0
    for (let i = 0; i < 2 * k + 1; ++i) {
        windowSum += nums[i]
    }
    averages[k] = Math.floor(windowSum / (2 * k + 1))

    // Iterate on rest indices which have at least 'k' elements
    // on its left and right sides.
    for (let i = 2 * k + 1; i < n; ++i) {
        // We remove the discarded element and add the new element to get current window sum.
        // 'i' is the index of new inserted element, and
        // 'i - (window size)' is the index of the last removed element.
        windowSum = windowSum - nums[i - 2 * k - 1] + nums[i]
        averages[i - k] = Math.floor(windowSum / (2 * k + 1))
    }

    return averages
}
