const fs = require('fs');
const path = require('path');

const submitPath = '/dev/stdin';
const localPath = path.join(process.cwd(), '/baekjoon/example.txt');

const input = fs.readFileSync(localPath).toString().split('\n');

const a = input[0];
const b = input[1];

/**
 *
 * @param {string} a
 * @param {string} b
 */
function solution(a, b) {
    const dp = Array.from({ length: a.length }, () =>
        Array.from({ length: b.length }, () => 0)
    );

    let answer = -Infinity;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] == b[j]) {
                dp[i][j] = ((i > 0 && j > 0 ? dp[i - 1][j - 1] : 0) || 0) + 1;
                answer = Math.max(answer, dp[i][j]);
            }
        }
    }

    answer = answer === -Infinity ? 0 : answer;
    console.log(answer);
}

solution(a, b);
