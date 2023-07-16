function minimumDeleteSum(s1: string, s2: string): number {
    const savedResult = new Map()

    function computeCost(i: number, j: number): number {
        if (i < 0 && j < 0) {
            return 0
        }

        let key = `${i} ${j}`
        if (savedResult.has(key)) {
            return savedResult.get(key)
        }

        if (i < 0) {
            savedResult.set(key, s2[j].charCodeAt(0) + computeCost(i, j - 1))
            return savedResult.get(key)
        }
        if (j < 0) {
            savedResult.set(key, s1[i].charCodeAt(0) + computeCost(i - 1, j))
            return savedResult.get(key)
        }
        if (s1[i].charCodeAt(0) === s2[j].charCodeAt(0)) {
            savedResult.set(key, computeCost(i - 1, j - 1))
        } else {
            savedResult.set(
                key,
                Math.min(
                    s1[i].charCodeAt(0) + computeCost(i - 1, j),
                    s2[j].charCodeAt(0) + computeCost(i, j - 1)
                )
            )
        }
        return savedResult.get(key)
    }

    return computeCost(s1.length - 1, s2.length - 1)
}

console.log(minimumDeleteSum("delete", "leet"))
