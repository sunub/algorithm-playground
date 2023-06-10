"use strict";
var maxValue = function (n, index, maxSum) {
    let left = 1, right = maxSum;
    while (left < right) {
        let mid = Math.floor((left + right + 1) >> 1);
        if (getSum(index, mid, n) <= maxSum) {
            left = mid;
        }
        else {
            right = mid - 1;
        }
    }
    return left;
    function getSum(index, value, n) {
        let count = 0;
        if (value > index) {
            count += (value + value - index) * Math.floor((index + 1) / 2);
        }
        else {
            count +=
                (value + 1) * Math.floor((index + 1) / 2) + index - value + 1;
        }
        if (value >= n - index) {
            count +=
                (value + value - n + 1 + index) * Math.floor((n - index) / 2);
        }
        else {
            count += (value + 1) * Math.floor(value / 2) + n - index - value;
        }
        return count - value;
    }
};
console.log(maxValue(7, 5, 30));
//# sourceMappingURL=app.js.map