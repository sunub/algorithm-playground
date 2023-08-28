"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var join = function (arr1, arr2) {
    const m = arr1.length;
    for (let i = 0; i < m; i++) {
        const curr = arr1[i];
        const id = curr.id;
        const other = Object.keys(arr1).filter((key) => key !== id);
        console.log(other);
    }
};
console.log(join([
    { id: 1, x: 2, y: 3 },
    { id: 2, x: 3, y: 6 },
], [
    { id: 2, x: 10, y: 20 },
    { id: 3, x: 0, y: 0 },
]));
//# sourceMappingURL=app.js.map