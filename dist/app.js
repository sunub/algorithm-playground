"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var combine = function (n, k) {
    function* comb(arr, index) {
        if (arr.length === k) {
            yield arr;
            return;
        }
        for (let i = index; i < n + 1; i++) {
            yield* comb([...arr, i], i + 1);
        }
        return;
    }
    return [...comb([], 1)];
};
console.log(combine(4, 2));
//# sourceMappingURL=app.js.map