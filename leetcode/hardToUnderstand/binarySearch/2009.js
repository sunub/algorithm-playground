// 2009. Minimum Number of Operations to Make Array Continuous

// You are given an integer array nums. In one operation, you can replace any element in nums with any integer.

// nums is considered continuous if both of the following conditions are fulfilled:

// All elements in nums are unique.
// The difference between the maximum element and the minimum element in nums equals nums.length - 1.
// For example, nums = [4, 2, 5, 3] is continuous, but nums = [1, 2, 3, 5, 6] is not continuous.

// Return the minimum number of operations to make nums continuous.

// Example 1:

// Input: nums = [4,2,5,3]
// Output: 0
// Explanation: nums is already continuous.
// Example 2:

// Input: nums = [1,2,3,5,6]
// Output: 1
// Explanation: One possible solution is to change the last element to 4.
// The resulting array is [1,2,3,5,4], which is continuous.

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    const n = nums.length;
    let answer = n;

    const unique = new Set(nums);
    const newNums = [...unique.values()];
    newNums.sort((a, b) => a - b);

    for (let i = 0; i < newNums.length; i++) {
        let left = newNums[i];
        let right = left + n - 1;
        let j = binarySearch(newNums, right);
        let count = j - i;
        answer = Math.min(answer, n - count);
    }
    return answer;

    function binarySearch(newNums, target) {
        let left = 0;
        let right = newNums.length;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (target < newNums[mid]) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
};
