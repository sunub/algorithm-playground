"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const removeDuplicates = function (nums) {
    let index = 0;
    let duplicate = 1;
    for (let traverse = 1; traverse < nums.length; traverse++) {
        if (nums[index] === nums[traverse]) {
            duplicate++;
        }
        else {
            duplicate = 1;
        }
        if (duplicate <= 2) {
            index++;
            nums[index] = nums[traverse];
        }
    }
    nums.length = index + 1; // Truncate the array to remove duplicates
    console.log(nums);
    return index + 1;
};
removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]);
const nums = [1, 2, "a", 3, 4];
console.log(nums.sort((a, b) => a - b));
//# sourceMappingURL=app.js.map