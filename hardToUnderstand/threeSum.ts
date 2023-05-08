function threeSum(nums: number[]): number[][] {
    nums = nums.sort()

    const solution = {}
    for (let i = 0; i < nums.length - 2; i++) {
        const target = nums[i],
            seen = {}
        for (let j = i + 1; j < nums.length; j++) {
            const curr = nums[j],
                complement = -target - curr
            if (seen[complement]) {
                solution[`${target}, ${complement}, ${curr}`] = [
                    target,
                    complement,
                    curr,
                ]
                delete seen[complement]
            } else seen[curr] = true
        }
    }

    return Object.values(solution)
}
