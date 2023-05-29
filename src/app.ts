function* prototypeGenerator(obj: any) {
    let currPrototype = Object.getPrototypeOf(obj)

    while (currPrototype !== null) {
        yield currPrototype
        currPrototype = Object.getPrototypeOf(currPrototype)
    }
}
function usingGeneratorFunction(obj: any, classFunction: any) {
    if (
        obj == null ||
        obj == undefined ||
        typeof classFunction !== "function"
    ) {
        return false
    }

    for (const prototype of prototypeGenerator(obj)) {
        if (prototype === (classFunction as Function).prototype) {
            return true
        }
    }

    return false
}
console.log(usingGeneratorFunction(0, Object))
