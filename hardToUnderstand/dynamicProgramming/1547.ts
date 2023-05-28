// 1547. Minimum Cost to Cut a Stick

// Given a wooden stick of length n units. The stick is labelled from 0 to n. For example, a stick of length 6 is labelled as follows:

// Given an integer array cuts where cuts[i] denotes a position you should perform a cut at.

// You should perform the cuts in order, you can change the order of the cuts as you wish.

// The cost of one cut is the length of the stick to be cut, the total cost is the sum of costs of all cuts. When you cut a stick, it will be split into two smaller sticks (i.e. the sum of their lengths is the length of the stick before the cut). Please refer to the first example for a better explanation.

// Return the minimum total cost of the cuts.

/**
 * @argument {  Input: n = 7, cuts = [1,3,4,5] }
 * @returns { Output: 16 }
 */

var minCost = function (n: number, cuts: number[]) {
    cuts.sort((a, b) => a - b)
    cuts = [0, ...cuts, n]

    const stickLen = cuts.length

    const dp = Array(stickLen)
        .fill(0)
        .map(() => Array(stickLen).fill(0))

    for (let i = stickLen - 2; i >= 0; i--) {
        for (let j = i + 2; j < stickLen; j++) {
            let minCost = Infinity
            for (let k = i + 1; k < j; k++) {
                const cost = cuts[j] - cuts[i] + dp[i][k] + dp[k][j]
                minCost = Math.min(minCost, cost)
            }

            dp[i][j] = minCost
        }
    }
    return dp[0][stickLen - 1]
}
