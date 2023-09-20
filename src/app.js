/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function (jobDifficulty, d) {
    const n = jobDifficulty.length;
    const dp = Array.from({ length: d + 1 }, () =>
        Array.from({ length: n }, () => Infinity)
    );

    for (let i = d; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {}
    }
};

console.log(minDifficulty([6, 5, 4, 3, 2, 1], 2));
