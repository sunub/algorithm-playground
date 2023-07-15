var longestSubsequence = function (arr: number[], difference: number) {
    let answer = -Infinity
    const dp = new Map()

    for (const a of arr) {
        let beforeA = dp.has(a - difference) ? dp.get(a - difference) : 0
        dp.set(a, beforeA + 1)
        answer = Math.max(answer, dp.get(a))
    }
    console.log(dp)
    return answer
}
console.log(longestSubsequence([1, 5, 7, 8, 5, 3, 4, 2, 1], -2))

console.log(new Date("2023-06-12").getTime())
console.log(new Date("2023-06-13").getTime())

const b = [
    {
        date: "2023-06-12",
    },
    {
        date: "2023-06-13",
    },
    {
        date: "2023-06-15",
    },
    {
        date: "2023-06-18",
    },
]

console.log(
    b.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
)
