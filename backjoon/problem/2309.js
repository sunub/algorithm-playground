const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const numbers = input.slice(0, 9).map(Number);

/**
 *
 * @param {number[]} numbers
 */
function solution(numbers) {
    const result = [];
    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    const sortedNumbers = numbers.sort((a, b) => a - b);
    let i = 0;
    let j = 1;
    while (i < 8 && j < 9) {
        const currentSum = sum - sortedNumbers[i] - sortedNumbers[j];
        if (currentSum === 100) {
            for (let k = 0; k < 9; k++) {
                if (k !== i && k !== j) {
                    result.push(sortedNumbers[k]);
                }
            }
            return result;
        } else if (currentSum < 100) {
            j++;
        } else {
            i++;
            j = i + 1;
        }
    }
    return result;
}

solution(numbers).forEach((n) => console.log(n));
