// 4. Median of Two Sorted Arrays

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

var findMedianSortedArrays = function (nums1, nums2) {
    const nums = [...nums1, ...nums2].sort((a, b) => a - b);
    let answer = 0,
        mid = Math.floor(nums.length / 2);
    if (nums.length % 2 === 0) {
        answer = ((nums[mid] + nums[mid - 1]) / 2).toFixed(6);
    } else {
        answer = nums[mid];
    }
    return Number(answer);
};

var otherSolution = function (nums1, nums2) {
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
