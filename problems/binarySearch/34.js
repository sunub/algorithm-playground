// 34. Find First and Last Position of Element in Sorted Array

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

var searchRange = function (nums, target) {
    const n = nums.length;
    let left = 0,
        right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            left = mid;
            break;
        }

        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    let answer = [-1, -1];
    if (nums[left] === target) {
        let i = left,
            j = left;
        while (nums[i] === target) {
            i -= 1;
        }
        while (nums[j] === target) {
            j += 1;
        }
        [answer[0], answer[1]] = [i + 1, j - 1];
    }
    return answer;
};
