// 1647. Minimum Deletions to Make Character Frequencies Unique
// A string s is called good if there are no two different characters in s that have the same frequency.

// Given a string s, return the minimum number of characters you need to delete to make s good.

// The frequency of a character in a string is the number of times it appears in the string. For example, in the string "aab", the frequency of 'a' is 2, while the frequency of 'b' is 1.

// Example 1:

// Input: s = "aab"
// Output: 0
// Explanation: s is already good.
// Example 2:

// Input: s = "aaabbbcc"
// Output: 2
// Explanation: You can delete two 'b's resulting in the good string "aaabcc".
// Another way it to delete one 'b' and one 'c' resulting in the good string "aaabbc".
// Example 3:

// Input: s = "ceabaacb"
// Output: 2
// Explanation: You can delete both 'c's resulting in the good string "eabaab".
// Note that we only care about characters that are still in the string at the end (i.e. frequency of 0 is ignored).

/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function (s) {
    const n = s.length
    const [maxFrequency, frequencyMap] = countWordFrequence()

    let counts = Array.from({ length: maxFrequency }, () => 0)
    for (const [frequency] of frequencyMap.keys()) {
        counts[frequency - 1] = frequencyMap.get(frequency)
    }

    let i = 0,
        answer = 0
    while (i < counts.length) {
        if (counts[i] > 1) {
            i - 1 >= 0 ? (counts[i - 1] += 1) : null
            counts[i] -= 1
            ;[i, answer] = [0, answer + 1]
        } else {
            i += 1
        }
    }

    return answer

    function countWordFrequence() {
        const tmp = new Map()

        for (let i = 0; i < n; i++) {
            tmp.has(s[i]) ? tmp.set(s[i], tmp.get(s[i]) + 1) : tmp.set(s[i], 1)
        }

        let maxFrequency = -Infinity
        const result = new Map()
        for (const index of map.values()) {
            maxFrequency = Math.max(maxFrequency, index)
            result.has(index)
                ? result.set(index, result.get(index) + 1)
                : result.set(index, 1)
        }

        return [maxFrequency, result]
    }
}
