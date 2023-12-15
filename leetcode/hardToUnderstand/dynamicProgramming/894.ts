// 894. All Possible Full Binary Trees

// Given an integer n, return a list of all possible full binary trees with n nodes. Each node of each tree in the answer must have Node.val == 0.

// Each element of the answer is the root node of one possible tree. You may return the final list of trees in any order.

// A full binary tree is a binary tree where each node has exactly 0 or 2 children.

// Input: n = 7
// Output: [[0,0,0,null,null,0,0,null,null,0,0],[0,0,0,null,null,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,null,null,null,null,0,0],[0,0,0,0,0,null,null,0,0]]

class TreeNode {
    val?: any
    left?: any
    right?: any
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val
        this.left = left === undefined ? null : left
        this.right = right === undefined ? null : right
    }
}

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function (n) {
    var solve = function (n, dp) {
        if (n % 2 === 0) return (dp[n] = [])

        if (dp[n] !== -1) return dp[n]

        if (n === 1) return (dp[n] = [new TreeNode(0)])

        let ans = []

        n = n - 1

        for (let ctr = 1; ctr < n; ctr++) {
            let left = solve(ctr, dp)
            let right = solve(n - ctr, dp)

            for (let row = 0; row < left.length; row++)
                for (let col = 0; col < right.length; col++) {
                    const node = new TreeNode(0)

                    node.left = left[row]
                    node.right = right[col]

                    ans.push(node)
                }
        }

        return (dp[n] = ans)
    }
    let dp = Array.from({ length: n + 1 }, () => -1)
    return solve(n, dp)
}
