function minCost(nums: number[], cost: number[]): number {
    const n = nums.length
    const map = new Map()
    for (let i = 0; i < n; i++) {
        map.set(nums[i], cost[i])
    }
    const numsAndCost = [...map.entries()].sort((a, b) => a[0] - b[0])

    const prefixSum = Array.from({ length: n }, () => 0)
    prefixSum[0] = numsAndCost[0][1]
    for (let i = 1; i < n; i++) {
        prefixSum[i] = numsAndCost[i][1] + prefixSum[i - 1]
    }

    let totalCost = 0
    for (let i = 1; i < n; i++) {
        totalCost += numsAndCost[i][1] * (numsAndCost[i][0] - numsAndCost[0][0])
    }

    let answer = totalCost
    for (let i = 1; i < n; i++) {
        let gap = numsAndCost[i][0] - numsAndCost[i - 1][0]
        totalCost += prefixSum[i - 1] * gap
        totalCost -= gap * (prefixSum[n - 1] - prefixSum[i - 1])
        answer = Math.min(answer, totalCost)
    }
    return answer
}
console.log(minCost([1, 3, 5, 2], [2, 3, 1, 14]))
