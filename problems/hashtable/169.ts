// 169. Majority Element

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Input: nums = [3,2,3]
// Output: 3

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        map.has(nums[i])
            ? map.set(nums[i], map.get(nums[i]) + 1)
            : map.set(nums[i], 1)

        if (map.get(nums[i]) > Math.floor(nums.length / 2)) {
            return nums[i]
        }
    }
}
