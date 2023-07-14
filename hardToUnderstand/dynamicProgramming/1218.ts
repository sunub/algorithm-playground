// 1218. Longest Arithmetic Subsequence of Given Difference

// Given an integer array arr and an integer difference, return the length of the longest subsequence in arr which is an arithmetic sequence such that the difference between adjacent elements in the subsequence equals difference.

// A subsequence is a sequence that can be derived from arr by deleting some or no elements without changing the order of the remaining elements.

// Input: arr = [1,2,3,4], difference = 1
// Output: 4

// Input: arr = [1,3,5,7], difference = 1
// Output: 1

var longestSubsequence = function (arr: number[], difference: number) {
    let answer = -Infinity
    const dp = new Map()

    for (const a of arr) {
        let beforeA = dp.has(a - difference) ? dp.get(a - difference) : 0
        dp.set(a, beforeA + 1)
        answer = Math.max(answer, dp.get(a))
    }
    console.log(dp)
    return answer
}
