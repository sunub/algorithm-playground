// 228. Summary Ranges

// You are given a sorted unique integer array nums.

// A range [a,b] is the set of all integers from a to b (inclusive).

// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

// Each range [a,b] in the list should be output as:

// "a->b" if a != b
// "a" if a == b

/**
 * @argument { Input: nums = [0,1,2,4,5,7] }
 * @returns { Output: ["0->2","4->5","7"] }
 */

var summaryRanges = function (nums: number[]) {
    const n = nums.length
    const answer: string[] = []

    let tmp: number[] = []
    for (let i = 0; i < n; i++) {
        tmp.push(nums[i])
        if (nums[i] + 1 !== nums[i + 1]) {
            if (tmp.length > 1) {
                answer.push(`${tmp[0]}->${tmp[tmp.length - 1]}`)
            } else {
                answer.push(`${tmp.pop()}`)
            }
            tmp = []
        }
    }

    return answer
}
