function findMaximizedCapital(
    k: number,
    w: number,
    profits: number[],
    capital: number[]
): number {
    if (w >= Math.max(...capital)) {
        profits.sort((a, b) => b - a)
        return profits.slice(0, k).reduce((acc, num) => acc + num, w)
    }

    for (let i = 0; i < k; i++) {
        let maxProfit = -Infinity
        let projectIndex = -1
        for (let j = 0; j < profits.length; j++) {
            if (w < capital[j]) continue

            if (profits[j] >= maxProfit) {
                projectIndex = j
                maxProfit = profits[j]
            }
        }
        if (projectIndex === -1) {
            break
        }
        capital[projectIndex] = Infinity
        w += maxProfit
    }
    return w
}
