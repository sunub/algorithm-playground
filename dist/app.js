"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var minimumDeleteSum = function (s1, s2) {
    const map = new Map();
    backtracking(0, "");
    function backtracking(start, key) {
        if (map.has(key)) {
            return map.get(key);
        }
        if (start >= s2.length) {
            return;
        }
        for (let i = start; i < s2.length; i++) {
            key += s2[i];
            backtracking(i + 1, key);
            key = key.length > 1 ? key.slice(0, key.length - 1) : key[0];
        }
    }
};
function mapping(map, s) {
    return map.has(s) ? map.set(s, map.get(s) + 1) : map.set(s, 1);
}
console.log(minimumDeleteSum("delete", "leet"));
const a = "asd";
console.log(a.slice(0, a.length - 1));
//# sourceMappingURL=app.js.map