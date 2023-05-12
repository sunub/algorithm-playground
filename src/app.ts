var mostPoints = function (questions: number[][]) {
    let maxNum = -Infinity

    for (let i = 0; i < questions.length; i++) {
        let cur = questions[i][0]
        let skip = questions[i][1] + i + 1

        for (let j = skip; j < questions.length; j++) {
            cur += questions[j][0]
            if (j + questions[j][1] + 1 >= questions.length) {
                maxNum = Math.max(cur, maxNum)
                cur = questions[i][0]
            } else {
                j += questions[j][1] + 1
            }
        }
        maxNum = Math.max(cur, maxNum)
    }
    return maxNum
}
console.log(
    mostPoints([
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4],
        [5, 5],
    ])
)
