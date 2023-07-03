// 859. Buddy Strings

// Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

// For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

// Input: s = "ab", goal = "ba"
// Output: true

// Input: s = "ab", goal = "ab"
// Output: false

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
