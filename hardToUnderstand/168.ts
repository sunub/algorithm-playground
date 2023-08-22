// 168. Excel Sheet Column Title

// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...

// Input: columnNumber = 1
// Output: "A"

// Input: columnNumber = 28
// Output: "AB"

// Input: columnNumber = 701
// Output: "ZY"

const convertToTitle = (columnNumber: number) => {
    const answer: string[] = []
    const baseNumber = 65

    while (columnNumber > 0) {
        columnNumber -= 1

        const convertString: string = String.fromCharCode(
            (columnNumber % 26) + baseNumber
        )
        answer.push(convertString)
        columnNumber = Math.floor(columnNumber / 26)
    }

    return answer.reverse().join("")
}
