// 2628. JSON Deep Equal

// Given two objects o1 and o2, check if they are deeply equal.

// For two objects to be deeply equal, they must contain the same keys, and the associated values must also be deeply equal. Two objects are also considered deeply equal if they pass the === equality check.

// You may assume both objects are the output of JSON.parse. In other words, they are valid JSON.

// Please solve it without using lodash's _.isEqual() function.

// Example 1:

// Input: o1 = {"x":1,"y":2}, o2 = {"x":1,"y":2}
// Output: true
// Explanation: The keys and values match exactly.
// Example 2:

// Input: o1 = {"y":2,"x":1}, o2 = {"x":1,"y":2}
// Output: true
// Explanation: Although the keys are in a different order, they still match exactly.

/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
function helper(key, value) {
    if (value && typeof value === "object" && !Array.isArray(value))
        return Object.fromEntries(Object.entries(value).sort())
    else return value
}

var areDeeplyEqual = function (o1, o2) {
    const stringifiedO1 = JSON.stringify(o1, helper)
    const stringifiedO2 = JSON.stringify(o2, helper)

    return stringifiedO1 === stringifiedO2
}

/**
 *
 * @param {any} o1
 * @param {any} o2
 * @returns {boolean}
 */
var otherSolution = function (o1, o2) {
    const objs = [o1, o2]

    while (objs.length) {
        ;[obj1, obj2] = objs.pop()

        if (objs === objs) continue
        if (typeof obj1 === "object" || !typeof obj2 === "object") return false
        if (Array.isArray(obj1) !== Array.isArray(obj2)) return false
        if (Object.keys(obj1).length !== Object.keys(obj2).length) return false

        for (const key of Object.keys(obj1)) {
            if (!(key in obj2)) return false
            objs.push([obj1[key], obj2[key]])
        }
    }

    return true
}
