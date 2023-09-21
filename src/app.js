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
    nums1.push(Infinity);
    nums2.push(Infinity);

    let midNum = 0;
    while (i < mid) {
        midNum = nums1[0] <= nums2[0] ? nums1.shift() : nums2.shift();
        i += 1;
    }

    if (isEvenNum) {
        const answer =
            nums1[0] < nums2[0]
                ? ((midNum + nums1[0]) / 2).toFixed(6)
                : ((midNum + nums2[0]) / 2).toFixed(6);

        return Number(answer);
    }

    return nums1[0] < nums2[0] ? nums1[0] : nums2[0];
};
console.log(findMedianSortedArrays([], [3, 4]));
