function mySolution(n) {
    var answer = 0
    var even = Math.floor(n / 2)
    for (var i = even; i > 0; i--) {
        var twoCount = (2 * i) / 2
        var oneCount = n - 2 * i
        var upper = factorial(oneCount + twoCount)
        var lower = factorial(twoCount) * factorial(oneCount)
        answer += upper / lower
    }
    return answer + 1
}
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1
    }
    for (var i = num - 1; i >= 1; i--) {
        num *= i
    }
    return num
}

function betterTimeSolution(n) {
    return helper(n)
}
function helper(n, memo) {
    if (memo === void 0) {
        memo = {}
    }
    if (memo[n]) return memo[n]
    if (n == 1 || n == 2) return n
    memo[n] = helper(n - 1, memo) + helper(n - 2, memo)
    return memo[n]
}
