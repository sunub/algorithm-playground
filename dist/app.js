"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var minimumDeleteSum = function (s1, s2) {
    const saveResult = new Map();
    return computeCost(s1.length - 1, s2.length - 1);
    function computeCost(i, j) {
        if (i < 0 && j < 0) {
            return 0;
        }
        let key = `${i} ${j}`;
        if (saveResult.has(key)) {
            return saveResult.get(key);
        }
        if (i < 0) {
            saveResult.set(key, s2[j].charCodeAt(0) + computeCost(i, j - 1));
            return saveResult.get(key);
        }
        if (j < 0) {
            saveResult.set(key, s1[i].charCodeAt(0) + computeCost(i - 1, j));
            return saveResult.get(key);
        }
        if (s1[i] === s2[j]) {
            saveResult.set(key, computeCost(i - 1, j - 1));
        }
        else {
            saveResult.set(key, Math.min(s1[i].charCodeAt(0) + computeCost(i, j - 1), s2[j].charCodeAt(0) + computeCost(i - 1, j)));
        }
        return saveResult.get(key);
    }
};
console.log(minimumDeleteSum("delete", "leet"));
//# sourceMappingURL=app.js.map