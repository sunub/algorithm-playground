// 744. Find Smallest Letter Greater Than Target

// You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

// Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

/**
 * @argument { Input: letters = ["c","f","j"], target = "a" }
 * @returns { Output: "c" }
 */

function nextGreatestLetter(letters: string[], target: string): string {
    for (const word of letters) {
        if (target.charCodeAt(0) < word.charCodeAt(0)) {
            return word
        }
    }

    return letters[0]
}
