"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function myPow(x, n) {
    if (n === 0)
        return 1;
    if (Math.abs(x) === 1) {
        if (n % 2 === 0)
            return 1;
        else
            return x;
    }
    if (n < 0) {
        x = 1 / x;
        n = n * -1;
    }
    let res = 1;
    while (n > 0) {
        res *= x;
        n--;
    }
    return res;
}
console.log(myPow(2, -3));
//# sourceMappingURL=app.js.map