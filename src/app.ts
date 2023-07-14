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
console.log(longestSubsequence([1, 5, 7, 8, 5, 3, 4, 2, 1], -2))
