// 209. Minimum Size Subarray Sum

// Given an array of positive integers nums and a positive integer target, return the minimal length of a
// subarray
//  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2

// Input: target = 4, nums = [1,4,4]
// Output: 1

function minSubArrayLen(target: number, nums: number[]): number {
    let answer = Infinity
    let sum = 0
    let start = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (sum >= target) {
            while (sum >= target) {
                answer = Math.min(answer, i - start + 1)
                sum -= nums[start]
                start += 1
            }
        }
    }

    if (answer === Infinity) {
        return sum >= target ? nums.length : 0
    }

    return answer
}
