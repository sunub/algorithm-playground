"use strict";
var areDeeplyEqual = function (o1, o2) {
    if (typeof o1 !== typeof o2) {
        return false;
    }
    if (Array.isArray(o1) !== Array.isArray(o2)) {
        return false;
    }
    if (o1 instanceof Object && !Array.isArray(o1)) {
        return search(o1, o2);
    }
    if (o1 instanceof Array && o2 instanceof Array) {
        return JSON.stringify(o1) === JSON.stringify(o2)
            ? true
            : areDeeplyEqual(o1.shift(), o2.shift());
    }
    return JSON.stringify(o1) === JSON.stringify(o2) ? true : false;
};
function search(ob1, ob2) {
    let o1Keys = Object.keys(ob1);
    let o2Keys = Object.keys(ob2);
    for (let i = 0; i < o1Keys.length; i++) {
        if (o2Keys.includes(o1Keys[i])) {
            const key1 = o1Keys[i];
            const val1 = ob1[key1];
            const val2 = ob2[key1];
            if (val1 instanceof Object && val2 instanceof Object) {
                return search(val1, val2);
            }
            else if (val1 !== val2) {
                return false;
            }
        }
        else {
            return false;
        }
    }
    return true;
}
areDeeplyEqual([1], [1, 2]);
//# sourceMappingURL=app.js.map