"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hIndex = function (citations) {
    let n = citations.length;
    let papers = Array.from({ length: n + 1 }, () => 0);
    for (let c of citations) {
        papers[Math.min(n, c)]++;
    }
    let k = n;
    for (let s = papers[n]; k > s; s += papers[k]) {
        k -= 1;
    }
    return k;
};
hIndex([3, 0, 6, 1, 5]);
//# sourceMappingURL=app.js.map