"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var change = function (amount, coins) {
    let answer = 0;
    const n = coins.length;
    for (let i = n - 1; i >= 0; i--) {
        let remainIndex = Math.floor(amount / coins[i]);
        const remain = amount % coins[i];
        let curr = 0;
        if (remain === 0) {
            answer += 1;
        }
        else {
            while (remainIndex >= 1) {
                curr = coins[i] * remainIndex;
                divide(curr, amount, i);
                remainIndex -= 1;
            }
        }
    }
    return answer;
    function divide(num, amount, index) {
        if (index < 0)
            return;
        const remain = amount % num;
        index -= 1;
        if (remain === 0) {
            answer += 1;
            return;
        }
        else if (remain > 0) {
            return divide(coins[index], remain, index);
        }
        else {
            return;
        }
    }
};
console.log(change(500, [1, 2, 5]));
//# sourceMappingURL=app.js.map