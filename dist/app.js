"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var minExtraChar = function (s, dictionary) {
    let sToArray = s.split("");
    const visit = new Set();
    for (let i = 0; i < dictionary.length; i++) {
        for (let j = 0; j < dictionary[i].length; j++) {
            if (sToArray.includes(dictionary[i][j]) &&
                !visit.has(dictionary[i])) {
                const index = sToArray.indexOf(dictionary[i][j]);
                sToArray = [
                    ...sToArray.slice(0, index),
                    ...sToArray.slice(index + 1, sToArray.length),
                ];
            }
        }
        visit.add(dictionary[i]);
    }
    return sToArray.length;
};
console.log(minExtraChar("dwmodizxvvbosxxw", [
    "ox",
    "lb",
    "diz",
    "gu",
    "v",
    "ksv",
    "o",
    "nuq",
    "r",
    "txhe",
    "e",
    "wmo",
    "cehy",
    "tskz",
    "ds",
    "kzbu",
]));
//# sourceMappingURL=app.js.map