type MultiDimensionalArray = (number | MultiDimensionalArray)[]

var flat = function (arr: MultiDimensionalArray, n: number) {
    let nestedArrayElement = true
    let queue: MultiDimensionalArray
    let depth = 0

    while (nestedArrayElement && depth < n) {
        nestedArrayElement = false
        queue = []

        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                queue.push(...(arr[i] as MultiDimensionalArray))
                nestedArrayElement = true
            } else {
                queue.push(arr[i])
            }
        }
        arr = [...queue]
        depth++
    }

    return arr
}

console.log(flat([1, 2, [3, [4, [5, [6]]]]], 2))
