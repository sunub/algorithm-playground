"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getAverages = function (nums, k) {
    const answer = Array(nums.length).fill(-1);
    const slidSize = 2 * k + 1;
    const indexSize = k * 2;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (i >= indexSize) {
            answer[i - k] = Math.floor(sum / slidSize);
            sum -= nums[i - indexSize];
        }
    }
    return answer;
};
console.log(getAverages([7, 4, 3, 9, 1, 8, 5, 2, 6], 3));
//# sourceMappingURL=app.js.map