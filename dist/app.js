"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function minSubArrayLen(target, nums) {
    console.log(nums.length);
    let answer = Infinity;
    function backtracking(i, cur, sum) {
        if (sum >= target) {
            answer = Math.min(answer, cur.length);
            return;
        }
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            cur.push(nums[j]);
            backtracking(j + 1, cur, sum);
            let start = cur.pop();
            sum -= start;
        }
    }
    backtracking(0, [], 0);
    return answer === Infinity ? 0 : answer;
}
console.log(minSubArrayLen(213, [12, 28, 83, 4, 25, 26, 25, 2, 25, 25, 25, 12]));
//# sourceMappingURL=app.js.map