function longestSubarray(nums: number[]): number {
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
console.log(longestSubarray([1, 1, 1]))
