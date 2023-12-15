// 2700. Differences Between Two Objects

// Write a function that accepts two deeply nested objects or arrays obj1 and obj2 and returns a new object representing their differences.

// The function should compare the properties of the two objects and identify any changes. The returned object should only contains keys where the value is different from obj1 to obj2. For each changed key, the value should be represented as an array [obj1 value, obj2 value]. Keys that exist in one object but not in the other should not be included in the returned object. When comparing two arrays, the indices of the arrays are considered to be their keys. The end result should be a deeply nested object where each leaf value is a difference array.

// You may assume that both objects are the output of JSON.parse.

/**
 * @argument {
 * obj1 = {
 *    "a": 1,
 *    "v": 3,
 *    "x": [],
 *    "z": {
 *      "a": null
 *    }
 *    }
 *    obj2 = {
 *    "a": 2,
 *    "v": 4,
 *    "x": [],
 *    "z": {
 *      "a": 2
 *    }
 *    }
 * }
 * @returns {
 * Output:
 *     {
 *       "a": [1, 2],
 *       "v": [3, 4],
 *       "z": {
 *         "a": [null, 2]
 *       }
 *     }
 * }
 */

const objDiff = (sourceObj, targetObj) => {
    if (sourceObj === targetObj) return {}

    if (sourceObj === null || targetObj === null) return [sourceObj, targetObj]
    if (typeof sourceObj !== "object" || typeof targetObj !== "object")
        return [sourceObj, targetObj]
    if (Array.isArray(sourceObj) !== Array.isArray(targetObj))
        return [sourceObj, targetObj]

    const diffObj = {}

    Object.keys(sourceObj).forEach((key) => {
        if (key in targetObj) {
            const subDiff = objDiff(sourceObj[key], targetObj[key])

            if (Object.keys(subDiff).length > 0) {
                diffObj[key] = subDiff
            }
        }
    })

    return diffObj
}
