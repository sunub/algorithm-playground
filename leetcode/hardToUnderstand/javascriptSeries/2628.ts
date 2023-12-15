// JSON Deep Equal

// Given two objects o1 and o2, check if they are deeply equal.
// For two objects to be deeply equal, they must contain the same keys, and the associated values must also be deeply equal. Two objects are also considered deeply equal if they pass the === equality check.
// You may assume both objects are the output of JSON.parse. In other words, they are valid JSON.
// Please solve it without using lodash's _.isEqual() function.

/**
 * @argument { Input: o1 = {"x":1,"y":2}, o2 = {"x":1,"y":2} }
 * @returns { Output: true }
 */

/**
 * @argument { Input: o1 = {"y":2,"x":1}, o2 = {"x":1,"y":2} }
 * @returns { Output: true }
 */

var myAnswer = function (o1: any, o2: any): any {
    if (typeof o1 !== typeof o2) {
        return false
    }
    if (Array.isArray(o1) !== Array.isArray(o2)) {
        return false
    }

    if (o1 instanceof Object && !Array.isArray(o1)) {
        return search(o1, o2)
    }
    if (o1 instanceof Array && o2 instanceof Array) {
        return myAnswer(o1.shift(), o2.shift())
    }
    return JSON.stringify(o1) === JSON.stringify(o2) ? true : false
}

function search(ob1: any, ob2: any): any {
    let o1Keys = Object.keys(ob1)
    let o2Keys = Object.keys(ob2)

    for (let i = 0; i < o1Keys.length; i++) {
        if (o2Keys.includes(o1Keys[i])) {
            const key1 = o1Keys[i]

            const val1 = ob1[key1]
            const val2 = ob2[key1]

            if (val1 instanceof Object && val2 instanceof Object) {
                return search(val1, val2)
            } else if (val1 !== val2) {
                return false
            }
        } else {
            return false
        }
    }
    return true
}

function areDeeplyEqual(o1: any, o2: any): boolean {
    const objs: [any, any][] = [[o1, o2]]

    while (objs.length) {
        ;[o1, o2] = objs.pop()!

        if (o1 === o2) continue
        if (typeof o1 !== "object" || typeof o2 !== "object") return false
        if (Array.isArray(o1) !== Array.isArray(o2)) return false

        const keys1 = Object.keys(o1)
        const keys2 = Object.keys(o2)

        if (keys1.length !== keys2.length) return false
        for (const key of keys1) {
            if (!(key in o2)) return false
            objs.push([o1[key], o2[key]])
        }
    }

    return true
}
