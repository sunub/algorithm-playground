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
    const map = new Map()

    for (let i = 0; i < n; i++) {
        map.has(s[i]) ? map.set(s[i], map.get(s[i]) + 1) : map.set(s[i], 1)
    }

    const countMap = new Map()
    for (const index of map.values()) {
        countMap.has(index)
            ? countMap.set(index, countMap.get(index) + 1)
            : countMap.set(index, 1)
    }

    let aCounts = [...countMap.entries()].sort((a, b) => a[0] - b[0])
    let counts = Array.from({ length: aCounts[aCounts.length - 1][0] }, () => 0)
    for (let i = 0; i < aCounts.length; i++) {
        counts[aCounts[i][0] - 1] = aCounts[i][1]
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
}
