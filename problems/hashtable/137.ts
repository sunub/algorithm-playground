// 137. Single Number II

// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Input: nums = [2,2,3,2]
// Output: 3

// Input: nums = [0,1,0,1,0,1,99]
// Output: 99

function myAnswer(nums: number[]): number {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        map.has(nums[i])
            ? map.set(nums[i], map.get(nums[i]) + 1)
            : map.set(nums[i], 1)
    }

    let answer = 0
    for (const [num, count] of map.entries()) {
        if (count === 1) {
            answer = num
            break
        }
    }
    return answer
}

function singleNumber(nums: number[]): number {
    const sumNum = nums.reduce((acc, curr) => acc + curr)
    const set = new Set(nums)

    let sumSet = 0
    for (const num of set) {
        sumSet += num
    }

    return Math.floor((3 * sumSet - sumNum) / 2)
}
