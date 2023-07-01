/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function (cookies: number[], k: number) {
    const bags = Array.from({ length: k }, () => 0)
    let answer = Infinity

    function backtracking(i: number, zeroCount: number) {
        if (i === cookies.length) {
            let max = -Infinity
            for (const b of bags) {
                max = Math.max(max, b)
            }
            answer = Math.min(answer, max)

            return
        }

        for (let j = 0; j < k; j++) {
            bags[j] += cookies[i]
            backtracking(i + 1, zeroCount)
            bags[j] -= cookies[i]
        }
    }

    backtracking(0, k)
    return answer
}
console.log(distributeCookies([8, 15, 10, 20, 8], 2))
