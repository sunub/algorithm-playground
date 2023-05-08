function myAnswer(nums: number[], target: number): number[] {
    const mid = Math.floor(nums.length / 2)
    let start = 0
    let end = nums.length

    if (nums.length < 2) {
        nums[mid] < target ? (start = mid) : (end = mid)
    }

    let ptr = 0
    for (let i = start; i < end; i++) {
        if (nums[i] === target) {
            ptr = i
            while (nums[ptr + 1] === target) {
                ptr++
            }
            return [i, ptr]
        }
    }

    return nums.length === 1 && nums[0] === target ? [0, 0] : [-1, -1]
}
