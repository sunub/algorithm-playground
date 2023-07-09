"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
// const multiply = function (x = 0, ...y: number[]) {
//     if (y.length) {
//         return y.reduce((acc: any, curr: any) => {
//             return typeof curr === "number" && (acc *= curr)
//         }, x)
//     }
//     return typeof x === "number" && ((i: number) => (i *= x))
// }
function largestVariance(s) {
    let answer = -Infinity;
    for (let i = 0; i < s.length; i++) {
        const count = new Map().set(s[i], 1);
        for (let j = i + 1; j < s.length; j++) {
            count.has(s[j])
                ? count.set(s[j], count.get(s[j]) + 1)
                : count.set(s[j], 1);
            const characters = [...count.keys()];
            let currVariance = 0;
            if (characters.length >= 2) {
                ;
                [...count.values()].reduce((acc, curr) => {
                    currVariance = Math.max(currVariance, Math.abs(acc - curr));
                    return curr;
                });
            }
            answer = Math.max(answer, currVariance);
        }
    }
    return answer;
}
console.log(largestVariance("icexiahccknibwuwgi"));
//# sourceMappingURL=app.js.map