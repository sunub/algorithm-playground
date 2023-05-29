"use strict";
function* prototypeGenerator(obj) {
    let currPrototype = Object.getPrototypeOf(obj);
    while (currPrototype !== null) {
        yield currPrototype;
        currPrototype = Object.getPrototypeOf(currPrototype);
    }
}
function usingGeneratorFunction(obj, classFunction) {
    if (obj == null ||
        obj == undefined ||
        typeof classFunction !== "function") {
        return false;
    }
    for (const prototype of prototypeGenerator(obj)) {
        if (prototype === classFunction.prototype) {
            return true;
        }
    }
    return false;
}
console.log(usingGeneratorFunction(0, Object));
//# sourceMappingURL=app.js.map