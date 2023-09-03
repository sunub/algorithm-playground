"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var compactObject = function (obj) {
    if (!Array.isArray(obj)) {
        const objToArray = Object.entries(obj);
        for (const [key, values] of objToArray) {
            if (values) {
                while (values) {
                    const curr = values.pop();
                }
            }
        }
    }
};
console.log(compactObject({ a: null, b: [false, 1] }));
//# sourceMappingURL=app.js.map