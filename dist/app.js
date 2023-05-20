"use strict";
var calcEquation = function (equations, values, queries) {
    const adj = new Map();
    for (const factor of equations) {
        adj.set(factor[0], []);
        adj.set(factor[1], []);
    }
    for (const factor of equations) {
        const u = factor[0];
        const v = factor[1];
        const weight = values.shift();
        adj.get(u).push([v, weight]);
        adj.get(v).push([u, 1 / weight]);
    }
    const res = [];
    for (const query of queries) {
        const u = query[0];
        const v = query[1];
        const value = dfs(u, v, new Set());
        if (!value) {
            res.push(-1);
        }
        else {
            res.push(value);
        }
    }
    function dfs(start, end, seen) {
        if (!adj.has(start) || !adj.has(end)) {
            return false;
        }
        if (start === end) {
            return 1;
        }
        seen.add(start);
        const neighbors = adj.get(start);
        for (const neighbor of neighbors) {
            if (seen.has(neighbor)) {
                continue;
            }
            const val = dfs(neighbor, end, seen);
            if (val !== false)
                return val;
        }
        return false;
    }
    return res;
};
calcEquation([
    ["a", "b"],
    ["b", "c"],
], [2.0, 3.0], [
    ["a", "c"],
    ["b", "a"],
    ["a", "e"],
    ["a", "a"],
    ["x", "x"],
]);
const a = 1.0;
const b = String(a).indexOf(".");
console.log(b);
//# sourceMappingURL=app.js.map