"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function longestSubarray(nums) {
    const count = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            count.push(nums[i]);
        }
        else {
            count[count.length - 1] !== 0 && count.length > 0
                ? (count[count.length - 1] += 1)
                : count.push(1);
        }
    }
    let answer = 0;
    for (let i = 0; i < count.length; i++) {
        let j = i + 1;
        let zeroCount = count[i] === 0 ? 1 : 0;
        let curr = count[i] !== 0 ? count[i] : 0;
        while (zeroCount <= 1 && j < count.length) {
            count[j] !== 0 ? (curr += count[j]) : (zeroCount += 1);
            j += 1;
        }
        answer = Math.max(curr, answer);
    }
    return answer;
}
console.log(longestSubarray([1, 1, 0, 1]));
//# sourceMappingURL=app.js.map