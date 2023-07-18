function minimumDeleteSum(s1: string, s2: string): number {
    const savedResult = new Map()

    function computeCost(i: number, j: number) {
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
            // 삭제할 필요가 없는 경우
            savedResult.set(key, computeCost(i - 1, j - 1))
        } else {
            savedResult.set(
                key,
                Math.min(
                    // 각각의 인덱스를 하나씩 줄여나가면서 경우를 판단한다.
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

const cache = new Set()
cache.add(2)
cache.add(3)
console.log(cache)
if (cache.has(2)) {
    cache.delete(2)
    cache.add(2)
}
console.log(cache)
