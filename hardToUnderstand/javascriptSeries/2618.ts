// 2618. Check if Object Instance of Class

// Write a function that checks if a given value is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.

// There are no constraints on the data types that can be passed to the function. For example, the value or the class could be undefined.

/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var mySolution = function (obj: any, classFunction: any) {
    const type = typeof obj

    if (
        typeof Object.getPrototypeOf(classFunction) !== "function" ||
        obj === null ||
        obj === undefined
    ) {
        return false
    }

    if (type === "object") {
        return obj instanceof classFunction
    }

    if (classFunction === Object) {
        return classFunction(obj) instanceof classFunction
    }

    switch (type) {
        case "number":
            return classFunction === Number
        case "string":
            return classFunction === String
        case "bigint":
            return classFunction === BigInt
        case "boolean":
            return classFunction === Boolean
        case "symbol":
            return obj.__proto__ === classFunction.prototype
    }
    return false
}

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */

function iterativeSolution(obj: any, classFunction: any) {
    if (
        obj == null ||
        obj == undefined ||
        typeof classFunction !== "function"
    ) {
        return false
    }

    let currPotentialPrototype = Object.getPrototypeOf(obj)

    while (currPotentialPrototype !== null) {
        if (currPotentialPrototype === (classFunction as Function).prototype) {
            return true
        }
        currPotentialPrototype = Object.getPrototypeOf(currPotentialPrototype)
    }
    return false
}

function usingMethod(obj: any, classFunction: any) {
    if (
        obj == null ||
        obj == undefined ||
        typeof classFunction !== "function"
    ) {
        return false
    }

    let inputObj = obj
    if (typeof inputObj !== "object") {
        inputObj = Object(inputObj)
    }
    return inputObj instanceof classFunction
}

function usingGeneratorFunction(obj: any, classFunction: any) {
    function* prototypeGenerator(obj: any) {
        let currPrototype = Object.getPrototypeOf(obj)

        while (currPrototype !== null) {
            yield
            currPrototype = Object.getPrototypeOf(currPrototype)
        }
    }

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
