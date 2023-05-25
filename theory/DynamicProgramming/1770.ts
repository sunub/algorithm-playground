function maximumScore(nums: number[], multipliers: number[]): number {
    const m = multipliers.length
    const n = nums.length
    const dp = Array.from({ length: m + 1 }, (v, _) => (v = 0))

    for (let i = m - 1; i >= 0; i--) {
        for (let left = 0; left <= i; left++) {
            dp[left] = Math.max(
                multipliers[i] * nums[left] + dp[left + 1],
                multipliers[i] * nums[n - 1 - (i - left)] + dp[left]
            )
        }
    }

    return dp[0]
}
