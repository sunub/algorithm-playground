// 714. Best Time to Buy and Sell Stock with Transaction Fee

// You are given an array prices where prices[i] is the price of a given stock on the ith day, and an integer fee representing a transaction fee.

// Find the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.

// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

/**
 * @argument { Input: prices = [1,3,2,8,4,9], fee = 2 }
 * @returns { Output: 8 }
 */

function maxProfit(prices: number[], fee: number): number {
    const n = prices.length
    const hold = Array.from({ length: n }, () => 1)
    const free = Array.from({ length: n }, () => 1)

    hold[0] = prices[0]
    for (let i = 1; i < n; i++) {
        hold[i] = Math.max(hold[i - 1], free[i - 1] - prices[i])
        free[i] = Math.max(free[i - 1], hold[i - 1] + prices[i] - fee)
    }
    return free[n - 1]
}
