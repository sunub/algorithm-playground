function minSubArrayLen(target: number, nums: number[]): number {
    let answer = Infinity
    let sum = 0
    let start = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (sum > target) {
            while (sum > target) {
                sum -= nums[start]
                start += 1
            }
        }

        if (sum >= target) {
            answer = Math.min(answer, i - start + 1)
        }
    }

    return answer === Infinity ? 0 : answer
}
console.log(minSubArrayLen(213, [12, 28, 83, 4, 25, 26, 25, 2, 25, 25, 25, 12]))
