/**
 *
 * @param {number[]} cards
 */
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

console.log(solution(4, [1, 5, 6, 7]));
