/**
 * @example
 * Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.
 *
 * A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.
 *
 * For example, "ace" is a subsequence of "abcde".
 * A common subsequence of two strings is a subsequence that is common to both strings.
 *
 * @argument { Input: text1 = "abcde", text2 = "ace"  }
 * @returns { Output: 3 }
 *
 * @argument { Input: text1 = "abc", text2 = "abc" }
 * @returns { Output: 3 }
 */

function recursiveSolution(text1: string, text2: string): number {
    const m = text1.length
    const n = text2.length
    const memo = Array.from({ length: m + 1 }, () =>
        Array.from({ length: n + 1 }, () => -1)
    )

    function solve(i, j, t1, t2, memo) {
        if (i === m || j === n) {
            return 0
        }

        if (memo[i][j] !== -1) {
            return memo[i][j]
        }

        let answer = 0
        if (t1[i] === t2[j]) {
            answer = 1 + solve(i + 1, j + 1, t1, t2, memo)
        } else {
            answer = Math.max(
                solve(i + 1, j, t1, t2, memo),
                solve(i, j + 1, t1, t2, memo)
            )
        }

        memo[i][j] = answer
        return memo[i][j]
    }

    return solve(0, 0, text1, text2, memo)
}

function iterationSolution(text1: string, text2: string): number {
    const m = text1.length
    const n = text2.length
    const dp = Array.from({ length: m + 1 }, () =>
        Array.from({ length: n + 1 }, () => 0)
    )

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1]
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }

    return dp[m][n]
}
