// 17. Letter Combinations of a Phone Number

// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Input: digits = "2"
// Output: ["a","b","c"]

const mappingLetters = [
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
]

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length === 0) {
        return []
    }

    const letters: string[][] = []
    for (let i = 0; i < digits.length; i++) {
        let index = Number(digits[i]) - 2

        letters.push(mappingLetters[index].split(""))
    }

    const target = digits.length
    const answer: string[][] = []

    backtracking("", 0)

    return answer

    function backtracking(curr, row) {
        if (curr.length === target) {
            answer.push(curr)
            return
        }

        for (let i = 0; i < letters[row].length; i++) {
            curr += letters[row][i]
            backtracking(curr, row + 1)
            curr = curr.slice(0, curr.length - 1)
        }
    }
}
