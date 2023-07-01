// 2305. Fair Distribution of Cookies

// You are given an integer array cookies, where cookies[i] denotes the number of cookies in the ith bag. You are also given an integer k that denotes the number of children to distribute all the bags of cookies to. All the cookies in the same bag must go to the same child and cannot be split up.

// The unfairness of a distribution is defined as the maximum total cookies obtained by a single child in the distribution.

// Return the minimum unfairness of all distributions.

// Input: cookies = [8,15,10,20,8], k = 2
// Output: 31

// Input: cookies = [6,1,3,2,2,4,1,2], k = 3
// Output: 7

/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */

var distributeCookies = function (cookies, k) {
    let ans = Infinity
    let bag = Array(k).fill(0)
    function backtrack(i) {
        if (i >= cookies.length) {
            let max = -Infinity
            for (let b of bag) max = Math.max(max, b)
            ans = Math.min(ans, max)
            return
        }
        for (let j = 0; j < k; j++) {
            bag[j] += cookies[i]
            backtrack(i + 1)
            bag[j] -= cookies[i]
        }
    }
    backtrack(0)
    return ans
}
