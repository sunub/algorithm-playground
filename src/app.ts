/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    let m = s1.length,
        n = s2.length,
        l = s3.length
    if (m + n !== l) return false

    const table = Array.from({ length: m + 1 }, () =>
        Array.from({ length: n + 1 }, () => false)
    )

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0 && j === 0) {
                table[i][j] = true
            } else if (i === 0) {
                table[i][j] = table[i][j - 1] && s2[j - 1] === s3[i + j - 1]
            } else if (j === 0) {
                table[i][j] = table[i - 1][j] && s1[i - 1] === s3[i + j - 1]
            } else {
                table[i][j] =
                    (table[i][j - 1] && s2[j - 1] === s3[i + j - 1]) ||
                    (table[i - 1][j] && s1[i - 1] === s3[i + j - 1])
            }
        }
    }

    return table[m][n]
}
console.log(isInterleave("aa", "ab", "abaa"))
