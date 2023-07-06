"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function minSubArrayLen(target, nums) {
    let answer = Infinity;
    let sum = 0;
    let start = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum > target) {
            while (sum >= target) {
                answer = Math.min(answer, i - start + 1);
                sum -= nums[start];
                start += 1;
            }
        }
    }
    if (answer === Infinity) {
        return sum >= target ? nums.length : 0;
    }
    return answer;
}
console.log(minSubArrayLen(5, [2, 3, 1, 1, 1, 1, 1]));
//# sourceMappingURL=app.js.map