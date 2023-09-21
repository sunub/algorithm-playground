/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const m = nums1.length,
        n = nums2.length;

    let i = 0,
        mid = Math.floor((m + n) / 2),
        isEvenNum = false;
    if ((m + n) % 2 === 0) {
        isEvenNum = true;
    }

    let midNum = 0;
    while (i < mid) {
        let curr;

        if (nums1[0] != null && nums2[0] != null) {
            if (nums1[0] <= nums2[0]) {
                curr = nums1.shift();
            } else {
                curr = nums2.shift();
            }
        } else {
            curr = nums1[0] != null ? nums1.shift() : nums2.shift();
        }

        midNum = curr;
        i += 1;
    }

    nums1[0] == null ? nums1.unshift(Infinity) : null;
    nums2[0] == null ? nums2.unshift(Infinity) : null;
    if (isEvenNum) {
        const answer =
            nums1[0] < nums2[0]
                ? ((midNum + nums1[0]) / 2).toFixed(6)
                : ((midNum + nums2[0]) / 2).toFixed(6);

        return Number(answer);
    }

    nums1[0] == null ? (nums1[0] = Infinity) : null;
    nums2[0] == null ? (nums2[0] = Infinity) : null;
    return nums1[0] < nums2[0] ? nums1[0] : nums2[0];
};
console.log(findMedianSortedArrays([], [3, 4]));
