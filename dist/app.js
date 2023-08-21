"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    const n = s.length;
    for (let i = 0; i < Math.floor(n / 2); i++) {
        if (n % i === 0) {
            let pattern = "";
            for (let j = 0; j < Math.floor(n / i); j++) {
                pattern += s[j];
            }
            if (s === pattern) {
                return true;
            }
        }
    }
};
repeatedSubstringPattern("abcabcabc");
//# sourceMappingURL=app.js.map