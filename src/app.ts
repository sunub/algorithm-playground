// var maxConsecutiveAnswers = function (answerKey: string, k: number) {
//     let [left, right, numOfTrue, numOfFalse, max] = new Array(5).fill(0)
//     const moreChanges = () => numOfTrue > k && numOfFalse > k
//     while (right < answerKey.length) {
//         if (answerKey[right] === "T") numOfTrue++
//         if (answerKey[right] === "F") numOfFalse++
//         while (moreChanges()) {
//             if (answerKey[left] === "T") numOfTrue--
//             if (answerKey[left] === "F") numOfFalse--
//             left++
//         }
//         max = Math.max(max, right - left + 1)
//         right++
//     }
//     return max
// }
// console.log(maxConsecutiveAnswers("TTFTTFTT", 1))

// const multiply = function (x = 0, ...y: number[]) {
//     if (y.length) {
//         return y.reduce((acc: any, curr: any) => {
//             return typeof curr === "number" && (acc *= curr)
//         }, x)
//     }
//     return typeof x === "number" && ((i: number) => (i *= x))
// }

function areDeeplyEqual(o1: any, o2: any): boolean {
    const objs: [any, any][] = [[o1, o2]]

    while (objs.length) {
        ;[o1, o2] = objs.pop()!

        if (o1 === o2) continue
        if (typeof o1 !== "object" || typeof o2 !== "object") return false
        if (Array.isArray(o1) !== Array.isArray(o2)) return false

        const keys1 = Object.keys(o1)
        const keys2 = Object.keys(o2)

        if (keys1.length !== keys2.length) return false
        for (const key of keys1) {
            if (!(key in o2)) return false
            objs.push([o1[key], o2[key]])
        }
    }

    return true
}
console.log(
    areDeeplyEqual({ x: null, L: [1, 2, 3] }, { x: null, L: ["1", "2", "3"] })
)
