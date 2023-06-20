function getAverages(nums: number[], k: number): number[] {
    if (k === 0) return nums

    if (nums.length < 2 * k + 1)
        return Array.from({ length: nums.length }, () => -1)

    const ans = Array.from({ length: k }, () => -1)

    for (let i = k; i <= nums.length - k - 1; i++) {
        let add = 0
        let count = 0
        for (let j = i - k; j <= i + k; j++) {
            add += nums[j]
            count++
        }
        ans.push(Math.floor(add / (2 * k + 1)))
    }

    return ans.concat(Array.from({ length: k }, () => -1))
}
console.log(getAverages([7, 4, 3, 9, 1, 8, 5, 2, 6], 3))
