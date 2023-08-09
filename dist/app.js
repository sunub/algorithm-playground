"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var minimizeMax = function (nums, p) {
    const cases = Array.from({ length: nums.length });
    const diffs = Array.from({ length: nums.length }, () => Infinity);
    backtracking(0, [], 0);
    function backtracking(start, curr, index) {
        if (curr.length === 2) {
            let diff = Math.abs(curr[0] - curr[1]);
            if (diff < diffs[index]) {
                cases[index] = [...curr];
            }
            return;
        }
        for (let i = start; i < nums.length; i++) {
            curr.push(nums[i]);
            backtracking(i + 1, curr, index);
            index += 1;
            curr.pop();
        }
    }
};
minimizeMax([10, 1, 2, 7, 1, 3], 2);
//# sourceMappingURL=app.js.map