// 2705. Compact Object
// Given an object or array obj, return a compact object. A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

// You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

// Example 1:

// Input: obj = [null, 0, false, 1]
// Output: [1]
// Explanation: All falsy values have been removed from the array.
// Example 2:

// Input: obj = {"a": null, "b": [false, 1]}
// Output: {"b": [1]}
// Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.

var compactObject = function (obj) {
    if (typeof obj === "object" && Object.keys(obj).length === 0) return obj
    if (Array.isArray(obj) && obj.length === 0) return obj

    let answer
    if (Array.isArray(obj)) {
        answer = clearArray(obj)
    } else if (Object.keys(obj).length > 0) {
        answer = clearObject(obj)
    }

    return answer
}

function clearArray(array) {
    let compactArray = []

    while (array.length) {
        const curr = array.shift()

        if (curr) {
            if (Array.isArray(curr)) {
                let value = clearArray(curr)
                compactArray.push(value)
            } else if (typeof curr === "object") {
                let value = clearObject(curr)
                compactArray.push(value)
            } else {
                compactArray.push(curr)
            }
        }
    }

    return compactArray
}

function clearObject(obj) {
    const compactObj = {}
    const objToArray = Object.entries(obj)

    for (const [key, values] of objToArray) {
        if (values && values !== false) {
            let value
            if (Array.isArray(values)) {
                value = clearArray(values)
            } else if (typeof values === "object") {
                value = clearObject(values)
            } else {
                value = values
            }

            compactObj[key] = value
        }
    }

    return compactObj
}
