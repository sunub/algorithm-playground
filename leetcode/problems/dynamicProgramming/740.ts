/**
 * @example
 * You are given an integer array nums. You want to maximize the number of points you get by performing the following operation any number of times:
 * Pick any nums[i] and delete it to earn nums[i] points. Afterwards, you must delete every element equal to nums[i] - 1 and every element equal to nums[i] + 1.
 * Return the maximum number of points you can earn by applying the above operation some number of times.
 */

/**
 * @argument { Input: nums = [3,4,2] }
 * @returns { Output: 6 }
 * @example
 * Explanation: You can perform the following operations:
 * Delete 4 to earn 4 points. Consequently, 3 is also deleted. nums = [2].
 * Delete 2 to earn 2 points. nums = [].
 * You earn a total of 6 points.
 */

var deleteAndEarn = function (nums: number[]) {
    if (nums.length === 1) {
        return nums[0]
    }

    let maxNumber = Math.max(...nums)
    let points = Array(maxNumber + 1).fill(0)
    const cache = Array(maxNumber + 1).fill(0)

    for (let i = 0; i < nums.length; i++) {
        points[nums[i]] += nums[i]
    }

    function maxPoint(num: number): number {
        if (cache[num] !== 0) {
            return cache[num]
        }

        if (num === 0) {
            return 0
        }
        if (num === 1) {
            return points[num]
        }

        const gain = points[num]
        cache[num] = Math.max(maxPoint(num - 1), maxPoint(num - 2) + gain)
        return cache[num]
    }
    return maxPoint(maxNumber)
}
