function shipWithinDays(weights: number[], days: number): number {
    let [totalLoad, maxLoad] = [0, 0]
    for (let weight of weights) {
        totalLoad += weight
        maxLoad = Math.max(maxLoad, weight)
    }

    let [l, r] = [maxLoad, totalLoad]

    while (l < r) {
        let mid = Math.floor((l + r) / 2)
        if (feasible(weights, mid, days)) {
            r = mid
        } else {
            l = mid + 1
        }
    }
    return l
}

function feasible(weights: number[], capacity: number, days: number) {
    let daysNeeded = 1
    let currentLoad = 0
    for (let weight of weights) {
        currentLoad += weight
        if (currentLoad > capacity) {
            daysNeeded++
            currentLoad = weight
        }
    }
    return daysNeeded <= days
}

shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)
