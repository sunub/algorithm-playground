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
