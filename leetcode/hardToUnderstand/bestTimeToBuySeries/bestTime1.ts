var maxProfit = function (prices) {
    let maxPrice = -Infinity
    let minPrice = Infinity
    for (let i = 1; i < prices.length; i++) {
        minPrice = Math.min(prices[i - 1], minPrice)
        maxPrice = Math.max(maxPrice, prices[i] - minPrice)
    }

    return maxPrice <= 0 ? 0 : maxPrice
}
