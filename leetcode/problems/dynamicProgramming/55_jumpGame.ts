function canJump(nums: number[]): boolean {
    if (nums.length === 1) {
        return nums[0] >= nums.length - 1 ? true : false
    }
    let idx = 0
    let max = 0
    let target = nums.length - 1
    while (idx < target) {
        max = Math.max(max + nums[idx], idx)

        if (max >= target) {
            return true
        }

        if (max <= idx && nums[target] === 0) {
            return false
        }
        idx++
    }
    return false
}
