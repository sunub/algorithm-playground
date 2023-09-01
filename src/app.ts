var cancellable = function (fn, args, t) {
    fn(...args)
    const timer = setInterval(() => fn(...args), t)

    const cancelFn = () => clearInterval(timer)
    return cancelFn
}

const fn = (x) => x * 2

const start = performance.now()

const result: any[] = []
const log = () => {
    const diff = Math.floor(performance.now() - start)
    result.push(`{time: ${diff}`)
}
const cancle = cancellable(log, [4], 35)

setTimeout(() => {
    cancle()
}, 190)

console.log(result)
