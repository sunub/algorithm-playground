// 118. Pascal's Triangle

// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows === 1) return [[1]]
    const answer = [[1], [1, 1]]

    for (let i = 2; i < numRows; i++) {
        let curr = [1]
        for (let j = 1; j <= i - 1; j++) {
            let currSum = answer[i - 1][j - 1] + answer[i - 1][j]
            curr.push(currSum)
        }
        curr.push(1)
        answer.push(curr)
    }

    return answer
}
