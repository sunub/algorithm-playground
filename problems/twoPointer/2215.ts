/**
 * Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order.
 */

/**
 * @argument {Input: nums1 = [1,2,3], nums2 = [2,4,6]}
 * @returns {Output: [[1,3],[4,6]]}
 * Explanation:
For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].
 */

var findDifference = function (nums1: number[], nums2: number[]) {
    const answer: number[][] = Array.from({ length: 2 }, (v, _) => (v = []))
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)

    for (let i = 0; i < nums1.length; i++) {
        if (!set2.has(nums1[i])) {
            answer[0].push(nums1[i])
            set2.add(nums1[i])
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        if (!set1.has(nums2[i])) {
            answer[1].push(nums2[i])
            set1.add(nums2[i])
        }
    }

    return answer
}
