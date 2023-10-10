/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    nums = new Set(nums).values();
    nums = [...nums];
    const n = nums.length;
    const target = n - 1;
    const answer = findIt(nums, target, 0);
    return answer;

    function findIt(nums, target, count) {
        nums = nums.sort();
        let left = 0,
            right = n - 1;
        let mid = Math.floor((left + right) / 2);

        if (nums[right] - nums[left] === target) {
            return count;
        }

        if (nums[mid] < target) {
            nums[right] = nums[mid] + 1;
        } else {
            nums[left] = nums[mid] - 1;
        }

        return findIt(nums, target, count + 1);
    }
};

console.log(minOperations([1, 2, 3, 5, 6]));
