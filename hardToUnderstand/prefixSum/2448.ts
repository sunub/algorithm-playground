// 2448. Minimum Cost to Make Array Equal
// Hard

// You are given two 0-indexed arrays nums and cost consisting each of n positive integers.

// You can do the following operation any number of times:

// Increase or decrease any element of the array nums by 1.
// The cost of doing one operation on the ith element is cost[i].

// Return the minimum total cost such that all the elements of the array nums become equal.

/**
 * @argument { Input: nums = [1,3,5,2], cost = [2,3,1,14] }
 * @returns { Output: 8 }
 */

var minCost = function (nums: number[], cost: number[]) {
    const numsAndCost: number[][] = []
    const n = nums.length

    for (let i = 0; i < n; i++) {
        numsAndCost.push([nums[i], cost[i]])
    }
    numsAndCost.sort((a, b) => a[0] - b[0])

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
