// 77. Combinations

// Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

// You may return the answer in any order.

// Input: n = 4, k = 2
// Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
// Explanation: There are 4 choose 2 = 6 total combinations.
// Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.

var combine = function (n, k) {
    function* comb(arr, index) {
        if (arr.length === k) {
            yield arr
            return
        }

        for (let i = index; i < n + 1; i++) {
            yield* comb([...arr, i], i + 1)
        }

        return
    }
    return [...comb([], 1)]
}
