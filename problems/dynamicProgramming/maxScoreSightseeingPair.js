var maxScoreSightseeingPair = function (values) {
    let initPair = values[0]
    let resultPair = -Infinity
    for (let i = 1; i < values.length; i++) {
        let secondPair = values[i] - i
        let curMaxPair = initPair + secondPair

        resultPair = Math.max(curMaxPair, resultPair)
        initPair = Math.max(initPair, values[i] + i)
    }
    return resultPair
}
