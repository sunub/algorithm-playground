/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    let count1 = 0;
    let count2 = 0;

    let candiate1 = null;
    let candiate2 = null;

    for (const num of nums) {
        if (candiate1 != null && candiate1 === num) {
            count1 += 1;
        } else if (candiate2 != null && candiate2 === num) {
            count2 += 1;
        } else if (count1 === 0) {
            candiate1 = num;
            count1 += 1;
        } else if (count2 === 0) {
            candiate2 = num;
            count2 += 1;
        } else {
            count1 -= 1;
            count2 -= 1;
        }
    }

    const result = [];

    [count1, count2] = [0, 0];
    for (const num of nums) {
        if (candiate1 != null && num === candiate1) count1 += 1;
        if (candiate2 != null && num === candiate2) count2 += 1;
    }

    const n = nums.length;
    if (count1 > Math.floor(n / 3)) result.push(candiate1);
    if (count2 > Math.floor(n / 3)) result.push(candiate2);

    return result;
};
console.log(majorityElement([3, 2, 3, 1, 1, 2, 2]));
