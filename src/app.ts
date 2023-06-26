/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function (costs, k, candidates) {
    const pqL = new PriorityQueue({ compare: (a, b) => a[0] - b[0] })
    const pqR = new PriorityQueue({ compare: (a, b) => a[0] - b[0] })
    let cost = 0
    let i = 0
    let j = costs.length - candidates
    const excluded = new Set()

    for (i; i < candidates; i++) {
        pqL.enqueue([costs[i], i])
    }

    for (j; j < costs.length; j++) {
        pqR.enqueue([costs[j], j])
    }

    j = costs.length - candidates - 1

    while (k > 0) {
        if (pqL.front()[0] <= pqR.front()[0]) {
            const [val, idx] = pqL.dequeue()
            if (!excluded.has(idx)) {
                cost += val
                k--
            }
            if (i < costs.length) {
                pqL.enqueue([costs[i], i])
            }
            excluded.add(idx)
            i++
        } else {
            const [val, idx] = pqR.dequeue()
            if (!excluded.has(idx)) {
                cost += val
                k--
            }
            if (j >= 0) {
                pqR.enqueue([costs[j], j])
            }
            excluded.add(idx)
            j--
        }
    }

    return cost
}
console.log(
    totalCost(
        [31, 25, 72, 79, 74, 65, 84, 91, 18, 59, 27, 9, 81, 33, 17, 58],
        11,
        2
    )
)
