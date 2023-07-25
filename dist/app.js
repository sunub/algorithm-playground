"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var findLongestChain = function (pairs) {
    pairs = pairs.sort((a, b) => a[0] - b[0]);
    let answer = 1;
    for (let i = 0; i < pairs.length; i++) {
        let count = 1;
        let pair = pairs[i];
        for (let j = 0; j < pairs.length; j++) {
            if (i !== j && pair[1] < pairs[j][0]) {
                pair = pairs[j];
                count += 1;
            }
        }
        answer = Math.max(answer, count);
    }
    console.log(pairs);
    return answer;
};
console.log(findLongestChain([
    [7, 9],
    [4, 5],
    [7, 9],
    [-7, -1],
    [0, 10],
    [3, 10],
    [3, 6],
    [2, 3],
]));
//# sourceMappingURL=app.js.map