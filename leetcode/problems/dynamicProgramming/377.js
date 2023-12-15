var combinationSum4 = function (nums, target) {
    const dp = Array.from({ length: target + 1 }, () => -1)
    dp[0] = 1
    return helper(target)

    function helper(target) {
        if (dp[target] !== -1) {
            return dp[target]
        }

        let result = 0
        for (let i = 0; i < nums.length; i++) {
            if (target >= nums[i]) {
                result += helper(target - nums[i])
            }
        }

        dp[target] = result
        return result
    }
}
