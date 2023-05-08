function maxSubArray(nums: number[]): number {
    const n = nums.length
    const rightMax = Array(n)
    rightMax[n - 1] = nums[n - 1]
    // 뒤에서 부터 합한 최대값 결과들의 집합

    let suffixSum = nums[n - 1]
    for (let i = n - 2; i >= 0; i--) {
        suffixSum += nums[i]
        // 뒤에서 부터 모두 합친
        rightMax[i] = Math.max(rightMax[i + 1], suffixSum)
    }

    let maxSum = nums[0]
    let special_sum = nums[0]
    let curMax = 0
    let prefixSum = 0
    for (let i = 0; i < n; i++) {
        curMax = Math.max(curMax, 0) + nums[i]
        maxSum = Math.max(maxSum, curMax)
        prefixSum += nums[i]
        if (i + 1 < n) {
            special_sum = Math.max(special_sum, prefixSum + rightMax[i + 1])
        }
    }
    return Math.max(maxSum, special_sum)
}
