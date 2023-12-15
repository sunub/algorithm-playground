function mySolution(n) {
    const fibo = Array(n).fill(null)
    fibo[0] = 0
    fibo[1] = 1
    for (let i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2]
    }
    return fibo[n]
}

function betterSolutionTime(n) {
    return n === 0 || n === 1
        ? n === 0
            ? 0
            : 1
        : betterSolution(n - 1) + betterSolution(n - 2)
}

function lessMemorySolutino(n) {
    const memo = new Array(2)
    memo[0] = 0
    memo[1] = 1

    if (n === 0 || n === 1) return n

    for (let i = 0; i <= Math.floor(n / 2); i++) {
        memo[0] = memo[0] + memo[1]
        memo[1] = memo[0] + memo[1]
        console.log(i, memo)
    }

    if (n % 2 === 0) return memo[0]
    else return memo[1]
}
