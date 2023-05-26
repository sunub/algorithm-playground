"use strict";
var flat = function (arr, n) {
    const result = [];
    if (n > 0) {
        depthSearch([...arr], 0);
    }
    else {
        return arr;
    }
    function depthSearch(copy, depth) {
        if (depth >= n) {
            return result.push(copy);
        }
        for (const array of copy) {
            if (Array.isArray(array)) {
                depthSearch(array.shift(), depth + 1);
                // while (array.length) {
                //     let cur = array.shift()
                //     if (curDepth >= n) {
                //         result.push(cur)
                //     } else {
                //         if (Array.isArray(cur)) {
                //             depthSearch(cur, curDepth + 1)
                //         } else {
                //             result.push(cur)
                //         }
                //     }
                // }
            }
            else {
                result.push(array);
            }
        }
        return;
    }
    return result;
};
console.log(flat([1, 2, [3, [4, [5, [6]]]]], 2));
//# sourceMappingURL=app.js.map