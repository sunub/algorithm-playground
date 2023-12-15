// New 21 Game

// Alice plays the following game, loosely based on the card game "21".
// Alice starts with 0 points and draws numbers while she has less than k points. During each draw, she gains an integer number of points randomly from the range [1, maxPts], where maxPts is an integer. Each draw is independent and the outcomes have equal probabilities.
// Alice stops drawing numbers when she gets k or more points.
// Return the probability that Alice has n or fewer points.
// Answers within 10-5 of the actual answer are considered accepted.

/**
 * @argument { Input: n = 10, k = 1, maxPts = 10 }
 * @returns {Output: 1.00000 }
 */

/**
 * @argument { Input: n = 6, k = 1, maxPts = 10 }
 * @returns {Output: 0.60000}
 */

var new21Game = function (n, k, maxPts) {
    if (k == 0 || n >= k + maxPts) return 1.0
    let sum = 1.0
    let result = 0.0
    let dp = new Array(n + 1)
    dp[0] = 1.0
    for (let i = 1; i <= n; i++) {
        dp[i] = sum / maxPts
        if (i < k) sum += dp[i]
        else result += dp[i]
        if (i - maxPts >= 0) sum -= dp[i - maxPts]
    }
    return result
}
