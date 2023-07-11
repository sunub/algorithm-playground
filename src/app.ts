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

function largestVariance(s: string): number {
    let answer = -Infinity
    const visit = new Set()
    for (let i = 0; i < s.length; i++) {
        let key = s[i]
        const count = new Map().set(key, 1)
        for (let j = i + 1; j < s.length; j++) {
            key += s[j]
            count.has(s[j])
                ? count.set(s[j], count.get(s[j]) + 1)
                : count.set(s[j], 1)

            const characters = [...count.keys()]
            let currVariance = 0
            if (characters.length >= 2) {
                currVariance = countingVariance([...count.values()])
                visit.add(key)
            }
            answer = Math.max(answer, currVariance)
        }
    }
    return answer === -Infinity ? 0 : answer
}

function countingVariance(countNum: number[]) {
    let maxVariance = -Infinity
    for (let i = 0; i < countNum.length; i++) {
        let currVariance = -Infinity
        for (let j = i + 1; j < countNum.length; j++) {
            currVariance = Math.max(
                currVariance,
                Math.abs(countNum[i] - countNum[j])
            )
        }
        maxVariance = Math.max(maxVariance, currVariance)
    }
    return maxVariance
}
console.log(largestVariance("icexiahccknibwuwgi"))

const COLORS = {
    text: {
        light: `oklch(21.08% 0.055 34.69)`,
        dark: `oklch(100% 0 31.08)`,
    },
    background: {
        light: `oklch(97.14% 0.011 31.07)`,
        dark: `oklch(54.74% 0.023 238.99)`,
    },
    primary: {
        light: `oklch(100% 0 0 / 0.8)`,
        dark: `oklch(34% 0.019 229.64)`,
    },
    highlightColor: {
        light: `oklch(70.8% 0.165 32.85)`,
        dark: `oklch(64.86% 0.181 249.54)`,
    },
}

const b = JSON.stringify(COLORS)
Object.entries(JSON.parse(b)).map(([v, c]) => console.log([v, c]))
