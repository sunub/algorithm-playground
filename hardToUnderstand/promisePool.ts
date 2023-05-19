var promisePool = async function (functions, n) {
    async function evaluateNext() {
        if (functions.length === 0) return
        const fn = functions.shift()
        await fn()
        await evaluateNext()
    }

    const nPromise = Array(n)
        .fill(null)
        .map(() => evaluateNext)
    await Promise.all(nPromise)
}
