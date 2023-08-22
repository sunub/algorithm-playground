"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var convertToTitle = function (columnNumber) {
    let answer = [];
    const baseNumber = 65;
    while (columnNumber > 0) {
        columnNumber -= 1;
        const b = columnNumber % 26;
        answer.push(String.fromCharCode((columnNumber % 26) + baseNumber));
        columnNumber = Math.floor(columnNumber / 26);
    }
    return answer.reverse().join("");
};
console.log(convertToTitle(2147483647));
//# sourceMappingURL=app.js.map