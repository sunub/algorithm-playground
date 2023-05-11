/**
 * @example
 * You are given two integer arrays nums1 and nums2. We write the integers of nums1 and nums2 (in the order they are given) on two separate horizontal lines.
 * We may draw connecting lines: a straight line connecting two numbers nums1[i] and nums2[j] such that:
 * nums1[i] == nums2[j], and the line we draw does not intersect any other connecting (non-horizontal) line.
 * Note that a connecting line cannot intersect even at the endpoints (i.e., each number can only belong to one connecting line).
 * Return the maximum number of connecting lines we can draw in this way.
 *
 * @argument { Input: nums1 = [1,4,2], nums2 = [1,2,4] }
 * @returns { Output: 2 }
 */

var maxUncrossedLines = function (nums1, nums2) {
    nums1 = [-1].concat(nums1)
    nums2 = [-1].concat(nums2)

    let [h, w] = [nums1.length, nums2.length]
    const dp = new Array(h).fill(0).map(() => new Array(w).fill(0))

    for (let y = 1; y < h; y++) {
        for (let x = 1; x < w; x++) {
            if (nums1[y] == nums2[x]) {
                dp[y][x] = dp[y - 1][x - 1] + 1
            } else {
                dp[y][x] = Math.max(dp[y - 1][x], dp[y][x - 1])
            }
        }
    }
    return dp[h - 1][w - 1]
}
