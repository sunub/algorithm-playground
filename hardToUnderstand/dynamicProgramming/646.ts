// 646. Maximum Length of Pair Chain

// You are given an array of n pairs pairs where pairs[i] = [lefti, righti] and lefti < righti.

// A pair p2 = [c, d] follows a pair p1 = [a, b] if b < c. A chain of pairs can be formed in this fashion.

// Return the length longest chain which can be formed.

// You do not need to use up all the given intervals. You can select pairs in any order.

// Input: pairs = [[1,2],[2,3],[3,4]]
// Output: 2
// Explanation: The longest chain is [1,2] -> [3,4].

// Input: pairs = [[1,2],[7,8],[4,5]]
// Output: 3
// Explanation: The longest chain is [1,2] -> [4,5] -> [7,8].

var findLongestChain = function (pairs) {
    const n = pairs.length
    pairs = pairs.sort((a, b) => a[0] - b[0])

    const dp = Array.from({ length: n }, () => 1)
    let answer = 1

    for (let i = n - 1; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            if (pairs[i][1] < pairs[j][0]) {
                dp[i] = Math.max(dp[i], 1 + dp[j])
            }
        }
        answer = Math.max(answer, dp[i])
    }
    return answer
}

var greedy = function (pairs) {
    pairs = pairs.sort((a, b) => a[1] - b[1])

    let answer = 1
    for (let i = 0; i < pairs.length; i++) {
        let count = 1
        let pair = pairs[i]
        for (let j = 0; j < pairs.length; j++) {
            if (i !== j && pair[1] < pairs[j][0]) {
                pair = pairs[j]
                count += 1
            }
        }

        answer = Math.max(answer, count)
    }

    return answer
}
