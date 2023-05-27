"use strict";
function chunk(arr, size) {
    const result = [];
    while (arr.length) {
        result.push(arr.splice(0, size));
    }
    return result;
}
console.log(chunk([1, 9, 6, 3, 2], 3));
//# sourceMappingURL=app.js.map