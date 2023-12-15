// 712. Minimum ASCII Delete Sum for Two Strings

// Given two strings s1 and s2, return the lowest ASCII sum of deleted characters to make two strings equal.

// Input: s1 = "sea", s2 = "eat"
// Output: 231

// Input: s1 = "delete", s2 = "leet"
// Output: 403

var minimumDeleteSum = function (s1, s2) {
    const memo = {}
    const memo2 = {}

    function dfs(i, j) {
        if (i >= s1.length && j >= s2.length) return 0
        if (i >= s1.length) return getCharCode(s2.slice(j))
        if (j >= s2.length) return getCharCode(s1.slice(i))

        const memostr = `${i}, ${j}`
        if (memostr in memo) return memo[memostr]

        if (s1[i] === s2[j]) return (memo[memostr] = dfs(i + 1, j + 1))

        const s1code = getCharCode(s1[i])
        const s2code = getCharCode(s2[j])

        memo[memostr] = Math.min(s1code + dfs(i + 1, j), s2code + dfs(i, j + 1))
        return memo[memostr]
    }

    function getCharCode(s1) {
        if (s1 in memo2) return memo2[s1]
        let sum = 0
        for (let i = 0; i < s1.length; i++) {
            sum += s1[i].charCodeAt()
        }
        return (memo2[s1] = sum)
    }

    return dfs(0, 0)
}

function iteration(s1: string, s2: string): number {
    const computeCost = (i: number, j: number): number => {
        if (i < 0) {
            let deleteCost = 0
            for (let pointer = 0; pointer <= j; pointer++) {
                deleteCost += s2[pointer].charCodeAt(0)
            }
            return deleteCost
        }

        if (j < 0) {
            let deleteCost = 0
            for (let pointer = 0; pointer <= j; pointer++) {
                deleteCost += s1[pointer].charCodeAt(0)
            }
            return deleteCost
        }

        if (s1[i].charCodeAt(0) === s2[j].charCodeAt(0)) {
            return computeCost(i - 1, j - 1)
        } else {
            return Math.min(
                s1[i].charCodeAt(0) + computeCost(i - 1, j),
                Math.min(
                    s2[j].charCodeAt(0) + computeCost(i, j - 1),
                    s1[i].charCodeAt(0) +
                        s2[j].charCodeAt(0) +
                        computeCost(i - 1, j - 1)
                )
            )
        }
    }
    return computeCost(s1.length - 1, s2.length - 1)
}

function topDown(s1: string, s2: string): number {
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
