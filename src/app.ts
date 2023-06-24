function tallestBillboard(rods: number[]) {
    let dp = new Map().set(0, 0)

    for (const r of rods) {
        const newDp = new Map(dp)

        for (const [diff, taller] of dp.entries()) {
            let shorter = taller - diff

            let newTaller = newDp.has(diff + r) ? newDp.get(diff + r) : 0
            newDp.set(diff + r, Math.max(newTaller, taller + r))

            let newDiff = Math.abs(shorter + r - taller)
            let newTaller2 = Math.max(shorter + r, taller)
            newDp.set(
                newDiff,
                Math.max(
                    newTaller2,
                    newDp.has(newDiff) ? newDp.get(newDiff) : 0
                )
            )
        }

        dp = newDp
    }
    return dp.get(0)
}

console.log(tallestBillboard([1, 2, 3, 4, 5, 6]))
