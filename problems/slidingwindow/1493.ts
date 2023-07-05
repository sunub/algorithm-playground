// 1493. Longest Subarray of 1's After Deleting One Element

// Given a binary array nums, you should delete one element from it.

// Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

// Input: nums = [1,1,0,1]
// Output: 3

// Input: nums = [0,1,1,1,0,1,1,0,1]
// Output: 5

function longestSubarray(nums: number[]) {
    let zeroCount = 0
    let longestWindow = 0
    let start = 0

    for (let i = 0; i < nums.length; i++) {
        zeroCount += nums[i] === 0 ? 1 : 0

        while (zeroCount > 1) {
            zeroCount -= nums[start] === 0 ? 1 : 0
            start += 1
        }

        longestWindow = Math.max(longestWindow, i - start)
    }

    return longestWindow
}

function myAnswer(nums: number[]): number {
    let answer = 0
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1
        let zeroCount = nums[i] === 0 ? 1 : 0
        let curr = nums[i] !== 0 ? nums[i] : 0
        while (zeroCount <= 1 && j < nums.length) {
            nums[j] !== 0 ? (curr += nums[j]) : (zeroCount += 1)
            j += 1
        }
        answer = Math.max(curr, answer)
    }

    return nums.includes(0) ? answer : (answer -= 1)
}
