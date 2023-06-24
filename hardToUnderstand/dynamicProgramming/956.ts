// 956. Tallest Billboard

// You are installing a billboard and want it to have the largest height. The billboard will have two steel supports, one on each side. Each steel support must be an equal height.

// You are given a collection of rods that can be welded together. For example, if you have rods of lengths 1, 2, and 3, you can weld them together to make a support of length 6.

// Return the largest possible height of your billboard installation. If you cannot support the billboard, return 0.

/**
 * @argument { Input: rods = [1,2,3,6] }
 * @returns { Output: 6 }
 */

/**
 * @argument { Input: rods = [1,2,3,4,5,6] }
 * @returns { Output: 10 }
 */

function tallestBillboard(rods: number[]): number {
    let dp = new Map().set(0, 0)

    for (const rod of rods) {
        const newDp = new Map(dp)

        for (const [diff, taller] of dp.entries()) {
            const shorter = taller - diff
            const newTaller = newDp.has(diff + rod) ? newDp.get(diff + rod) : 0
            newDp.set(diff + rod, Math.max(diff + rod, newTaller))

            const newDiff = Math.abs(shorter + rod - taller)
            const newTaller2 = Math.max(shorter + rod, taller)
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
