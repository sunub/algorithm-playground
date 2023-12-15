function checkInclusion(s1: string, s2: string): boolean {
    const s1map = new Map()

    for (let i = 0; i < s1.length; i++) {
        s1map.set(s1[i], s1map.has(s1[i]) ? s1map.get(s1[i]) + 1 : 1)
    }

    for (let i = 0; i < s2.length - s1.length; i++) {
        const s2map = new Map()
        for (let j = 0; j < s1.length; j++) {
            s2map.set(
                s2[i + j],
                s2map.has(s1[i]) ? s2map.get(s1[i + j]) + 1 : 1
            )
        }
        if (matches(s1map, s2map)) {
            return true
        }
    }
    return false
}

function matches(s1map: Map<any, any>, s2map: Map<any, any>) {
    for (const key of s1map.keys()) {
        if (s1map.get(key) - s2map.get(key) !== 0) {
            return false
        }
    }
    return true
}

function mySolution(s1: string, s2: string): boolean {
    const hash = new Map()
    for (const word of s1) {
        hash.has(word) ? hash.set(word, hash.get(word) + 1) : hash.set(word, 1)
    }

    const length = s1.length - 1
    for (let i = 0; i < s2.length; i++) {
        if (hash.has(s2[i])) {
            const hash2 = new Map()
            for (let j = i; j <= i + length; j++) {
                if (hash.has(s2[j])) {
                    hash2.has(s2[j])
                        ? hash2.set(s2[j], hash2.get(s2[j]) + 1)
                        : hash2.set(s2[j], 1)
                }
            }

            if (hash.size === hash2.size) {
                let isSame = false
                for (const [key, value] of hash.entries()) {
                    if (hash2.get(key) === value) {
                        isSame = true
                    } else {
                        isSame = false
                        break
                    }
                }

                if (isSame) {
                    return true
                }
            }
        }
    }
    return false
}
