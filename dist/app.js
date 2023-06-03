"use strict";
const arr = [[[6], [1, 3, [[[3]]]]], [1, 3], []];
const res = [];
function search(array, res) {
    for (const a of array) {
        if (Array.isArray(a))
            search(a, res);
        else
            res.push(a);
    }
    return res;
}
search(arr, []);
var inorderTraversal = function* (arr) {
    if (!arr.length)
        return arr;
    function search(array, res) {
        for (const a of array) {
            if (Array.isArray(a))
                search(a, res);
            else
                res.push(a);
        }
        return res;
    }
    const b = search(arr, []);
    while (b.length) {
        yield b.shift();
    }
};
const gen = inorderTraversal([[[6], [1, 3, [[[3]]]]], [1, 3], []]);
const vc = gen.next().value;
const a = 3;
//# sourceMappingURL=app.js.map