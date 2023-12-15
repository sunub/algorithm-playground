// 229. Majority Element II

// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// Example 1:

// Input: nums = [3,2,3]
// Output: [3]
// Example 2:

// Input: nums = [1]
// Output: [1]
// Example 3:

// Input: nums = [1,2]
// Output: [1,2]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    let count1 = 0;
    let count2 = 0;

    let candiate1 = null;
    let candiate2 = null;

    for (const n of nums) {
        if (candiate1 != null && candiate1 === n) {
            count1 += 1;
        } else if (candiate2 != null && candiate2 === n) {
            count2 += 1;
        } else if (candiate1 == null) {
            candiate1 = n;
            count1 += 1;
        } else if (candiate2 == null) {
            candiate2 = n;
            count2 += 1;
        } else {
            count1 -= 1;
            count2 -= 1;
        }
    }

    count1 = 0;
    count2 = 0;

    for (const n of nums) {
        if (candiate1 === n) count1 += 1;
        if (candiate2 === n) count2 += 1;
    }

    const n = nums.length;
    const result = [];
    if (count1 > Math.floor(n / 3)) result.push(candiate1);
    if (count2 > Math.floor(n / 2)) result.push(candiate2);

    return result;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var mySolution = function (nums) {
    const m = nums.length;
    const map = new Map();
    const maxTimes = Math.floor(m / 3);

    for (let i = 0; i < m; i++) {
        map.has(nums[i])
            ? map.set(nums[i], map.get(nums[i]) + 1)
            : map.set(nums[i], 1);
    }

    const answer = [];
    for (const [num, count] of map.entries()) {
        if (count > maxTimes) {
            answer.push(num);
        }
    }
    return answer;
};
