var compactObject = function (obj) {
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
            } else if (typeof values === "object") {
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

console.log(compactObject({ a: 1, b: 1, c: null, d: "false", e: 0 }))
