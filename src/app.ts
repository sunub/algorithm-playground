var hIndex = function (citations) {
    let n = citations.length
    let papers = Array.from({ length: n + 1 }, () => 0)

    for (let c of citations) {
        papers[Math.min(n, c)]++
    }

    let count = 0
    for (let i = n; i >= 0; i--) {
        count += papers[i]
        if (count >= i) {
            return i
        }
    }
    return 0
}
hIndex([3, 0, 6, 1, 5])
