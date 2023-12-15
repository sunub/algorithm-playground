// 80. Remove Duplicates from Sorted Array II

// Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }

// If all assertions pass, then your solution will be accepted.

// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

var removeDuplicates = function (nums) {
    const map = new Map()

    let i = 0
    while (i < nums.length) {
        map.has(nums[i])
            ? map.set(nums[i], map.get(nums[i]) + 1)
            : map.set(nums[i], 1)

        if (map.get(nums[i]) > 2) {
            nums.splice(i, 1)
        } else {
            i += 1
        }
    }
}

var other = function (nums) {
    let i = 0
    let count = 1
    const visit = new Set()
    while (i < nums.length) {
        if (!visit.has(nums[i])) {
            visit.add(nums[i])
            count = 1
            i += 1
        } else {
            count += 1
            if (count > 2) {
                nums[i] = -Infinity
                count -= 1
            }
            i += 1
        }
    }

    nums.sort((a, b) => a - b)

    let j = 0
    while (nums[j] === -Infinity) {
        nums.shift()
    }
}
