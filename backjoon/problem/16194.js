const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const M = input[1].split(" ").map(Number);

solution(N, M);

function solution(N, M) {
    const dp = new Array(N + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= N; i++) {
        for (let j = 0; j < M.length; j++) {
            if (i - j - 1 >= 0 && dp[i - j - 1] !== Infinity) {
                dp[i] = Math.min(dp[i], dp[i - j - 1] + M[j]);
            }
        }
    }

    console.log(dp[N]);
}
