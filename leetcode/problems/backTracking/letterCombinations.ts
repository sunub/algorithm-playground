function letterCombinations(digits: string): string[] {
    if (digits.length === 0) {
        return []
    }
    const chars = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
    if (digits.length === 1) {
        return chars[Number(digits) - 2].split("")
    }

    const phoneChars = []
    for (let i = 0; i < digits.length; i++) {
        let phoneNum = Number(digits[i])
        phoneChars.push(chars[phoneNum - 2])
    }

    const result: string[] = []
    backtrack(phoneChars, "", result, 0)

    return result
}

function backtrack(
    phoneChars: string[],
    curChars: string,
    result: string[],
    start: number
) {
    if (curChars.length === phoneChars.length) {
        result.push(curChars)
        return
    }

    for (let i = 0; i < phoneChars[start].length; i++) {
        curChars += phoneChars[start][i]
        backtrack(phoneChars, curChars, result, start + 1)
        curChars = curChars.slice(0, curChars.length - 1)
    }
}
const input = "239"

console.log(letterCombinations(input))
