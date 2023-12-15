/**
 * @example
 * You are given two integer arrays nums1 and nums2. We write the integers of nums1 and nums2 (in the order they are given) on two separate horizontal lines.
 * We may draw connecting lines: a straight line connecting two numbers nums1[i] and nums2[j] such that:
 * nums1[i] == nums2[j], and the line we draw does not intersect any other connecting (non-horizontal) line.
 * Note that a connecting line cannot intersect even at the endpoints (i.e., each number can only belong to one connecting line).
 * Return the maximum number of connecting lines we can draw in this way.
 *
 * @argument { Input: nums1 = [1,4,2], nums2 = [1,2,4] }
 * @returns { Output: 2 }
 */

var maxUncrossedLines = function (nums1: number[], nums2: number[]) {
    const n1 = nums1.length
    const n2 = nums2.length
    const dp: number[][] = Array.from({ length: n1 + 1 }, () =>
        Array.from({ length: n2 + 1 }, () => 0)
    )

    for (let i = 1; i <= n1; i++) {
        for (let j = 1; j <= n2; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1]
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
            }
        }
    }

    return dp[n1][n2]
}

var otherSolution = function (nums1: number[], nums2: number[]) {
    function solve(
        i: number,
        j: number,
        arr1: number[],
        arr2: number[],
        memo: number[][]
    ): number {
        if (i <= 0 || j <= 0) {
            return 0
        }
        if (memo[i][j] !== -1) {
            return memo[i][j]
        }

        if (nums1[i - 1] === nums2[j - 1]) {
            memo[i][j] = 1 + solve(i - 1, j - 1, arr1, arr2, memo)
        } else {
            memo[i][j] = Math.max(
                solve(i, j - 1, arr1, arr2, memo),
                solve(i - 1, j, arr1, arr2, memo)
            )
        }

        return memo[i][j]
    }

    const n1 = nums1.length
    const n2 = nums2.length
    const memo = Array.from({ length: n1 + 1 }, () =>
        Array.from({ length: n2 + 1 }, () => -1)
    )
    return solve(n1, n2, nums1, nums2, memo)
}
