"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var maxProbability = function (n, edges, succProb, start, end) {
    const adjList = new Map();
    const succ = new Map();
    for (let i = 0; i < edges.length; i++) {
        let key1 = `${edges[i][0]} ${edges[i][1]}`;
        succ.set(key1, succProb[i]);
        insertMap(edges[i][0], edges[i][1], adjList);
    }
    t(1, end, [start], -Infinity, [succ.get(`0 1`)]);
    function t(s, end, visit, result, array) {
        if (visit.includes(s) || !adjList.has(s)) {
            return 0;
        }
        if (s === end) {
            result = array.reduce((acc, cur) => {
                const result = acc * cur;
                return Number(result.toFixed(5));
            });
            return result;
        }
        visit.push(s);
        for (const v of adjList.get(s)) {
            let key = `${s} ${v}`;
            if (succ.has(key)) {
                array.push(succ.get(key));
            }
            result = Math.max(result, t(v, end, visit, result, array));
            array.pop();
        }
        return result;
    }
};
function insertMap(start, end, map) {
    return map.has(start)
        ? map.set(start, [...map.get(start), end])
        : map.set(start, [end]);
}
console.log(maxProbability(5, [
    [2, 3],
    [1, 2],
    [3, 4],
    [1, 3],
    [1, 4],
    [0, 1],
    [2, 4],
    [0, 4],
    [0, 2],
], [0.06, 0.26, 0.49, 0.25, 0.2, 0.64, 0.23, 0.21, 0.77], 0, 3));
// let a = 0.77 * 0.66
// a = Number(a.toFixed(5))
// console.log(a)
// // 2
// let b = 0.64 * 0.25
// b = Number(b.toFixed(5))
// console.log(b)
// // 1
// let c = 0.64 * 0.26
// c = Number(c.toFixed(5))
// c *= 0.06
// c = Number(c.toFixed(5))
// console.log(c)
//# sourceMappingURL=app.js.map