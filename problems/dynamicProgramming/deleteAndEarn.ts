function deleteAndEarn(nums: number[]): number {
    if (nums.length === 0) {
        return 0
    }
    if (nums.length < 2) {
        return Math.max(...nums)
    }

    const hashMap = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (hashMap.has(nums[i])) {
            hashMap.set(nums[i], hashMap.get(nums[i]) + 1)
        } else {
            hashMap.set(nums[i], 1)
        }
    }

    let prevSum = 0
    let currSum = 0
    let prevKey = -1
    for (const key of hashMap.keys()) {
        const m = Math.max(prevSum, currSum)
        if (key - 1 !== prevKey) {
            currSum = key * hashMap.get(key) + m
            prevSum = m
        } else {
            currSum = key * hashMap.get(key) + prevSum
            prevSum = m
        }
        prevKey = key
    }

    return Math.max(prevSum, currSum)
}
