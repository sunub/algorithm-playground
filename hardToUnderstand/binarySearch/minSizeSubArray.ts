function minSubArrayLen(target: number, nums: number[]): number {
    const n = nums.length
    if (n === 0) return 0

    let length = Number.MAX_SAFE_INTEGER
    let left = 0
    let sum = 0
    for (let i = 0; i < n; i++) {
        sum += nums[i]
        while (sum >= target) {
            length = Math.min(length, i + 1 - left)
            sum -= nums[left++]
        }
    }

    return length === Number.MAX_SAFE_INTEGER ? 0 : length
}
