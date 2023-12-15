// 50. Pow(x, n)

// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

// Input: x = 2.00000, n = 10
// Output: 1024.00000

// Input: x = 2.10000, n = 3
// Output: 9.26100

function myPow(x: number, n: number): number {
    if (n === 0) return 1
    if (Math.abs(x) === 1) {
        if (n % 2 === 0) return 1
        else return x
    }

    if (n < 0) {
        x = 1 / x
        n = n * -1
    }

    let res = 1

    while (n > 0) {
        res *= x
        n--
    }

    return res
}
