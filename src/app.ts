var buddyStrings = function (s: string, goal: string) {
    if (s.length !== goal.length) {
        return false
    }

    if (s === goal) {
        const frequency = Array(26).fill(0)
        for (const ch of s) {
            frequency[ch.charCodeAt(0) - "a".charCodeAt(0)] += 1
            if (frequency[ch.charCodeAt(0) - "a".charCodeAt(0)] === 2) {
                return true
            }
        }
        return false
    }

    let firstIndex = -1
    let secondIndex = -1

    for (let i = 0; i < s.length; ++i) {
        if (s[i] !== goal[i]) {
            if (firstIndex === -1) {
                firstIndex = i
            } else if (secondIndex === -1) {
                secondIndex = i
            } else {
                return false
            }
        }
    }

    if (secondIndex === -1) {
        return false
    }

    return (
        s[firstIndex] === goal[secondIndex] &&
        s[secondIndex] === goal[firstIndex]
    )
}
console.log(buddyStrings("aaaaaaabc", "aaaaaaacb"))
