/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
    const start = "JFK"

    let startPoints = []

    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i][0] === start) {
            startPoints.push([tickets[i], i])
        }
    }
    let answer = []

    while (startPoints.length) {
        let start = startPoints.pop()
        let startIndex = start[1]
    }

    return answer

    function search(start, next) {}
}

console.log(
    findItinerary([
        ["JFK", "KUL"],
        ["JFK", "NRT"],
        ["NRT", "JFK"],
    ])
)
