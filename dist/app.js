"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function maxProfit(prices, fee) {
    const n = prices.length;
    const hold = Array.from({ length: n }, () => 0);
    const free = Array.from({ length: n }, () => 0);
    hold[0] = -prices[0];
    for (let i = 1; i < n; i++) {
        hold[i] = Math.max(hold[i - 1], free[i - 1] - prices[i]);
        free[i] = Math.max(free[i - 1], hold[i - 1] + prices[i] - fee);
    }
    return free[n - 1];
}
console.log(maxProfit([9, 8, 7, 1, 2], 3));
//# sourceMappingURL=app.js.map