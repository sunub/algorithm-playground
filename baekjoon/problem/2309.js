const fs = require('fs');
const path = require('path');

const submitPath = '/dev/stdin';
const localPath = path.join(process.cwd(), '/baekjoon/example.txt');

const input = fs.readFileSync(localPath).toString().split('\n');

const numbers = input.map(Number).sort((a, b) => a - b);

let answer;
function backtracking(start, curr, sum) {
    if (sum > 100 || curr.length > 7) {
        return;
    }

    if (sum === 100 && curr.length === 7) {
        answer = [...curr];
        return;
    }

    for (let i = start; i < numbers.length; i++) {
        curr.push(numbers[i]);
        sum += numbers[i];
        backtracking(i + 1, curr, sum);
        curr.pop();
        sum -= numbers[i];
    }
}

backtracking(0, [], 0);

answer.forEach((num) => console.log(num));
