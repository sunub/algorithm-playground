/**
 * @example
 *  Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
 *   Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
 */

/**
 * @argument { Input: s = "abciiidef", k = 3 }
 * @returns  { Output: 3 }
 * @example
 * Explanation: The substring "iii" contains 3 vowel letters.
 */

function maxVowels(s: string, k: number): number {
    const voewlLetters = new Set(["a", "e", "i", "o", "u"])

    let count = 0
    for (let i = 0; i < k; i++) {
        if (voewlLetters.has(s[i])) {
            count += 1
        }
    }

    let j = 0
    let maxLength = count
    for (let i = k; i < s.length; i++) {
        if (voewlLetters.has(s[i])) {
            count++
        }
        if (voewlLetters.has(s[j])) {
            count--
        }
        maxLength = Math.max(maxLength, count)
        j++
    }

    return maxLength
}
