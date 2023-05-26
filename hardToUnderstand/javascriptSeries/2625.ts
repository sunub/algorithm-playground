// 2625. Flatten Deeply Nested Array

// Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

// A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

// A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

// Please solve it without the built-in Array.flat method.

/**
 * @argument { Input : arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], n = 0}
 * @returns { Output : [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]] }
 */

var flat = function (arr, n) {
    const result: number[][] = []
    if (n > 0) {
        depthSearch([...arr], 0)
    } else {
        return arr
    }

    function depthSearch(copy: number[][], depth: number) {
        for (const array of copy) {
            let curDepth = depth
            if (curDepth >= n) {
                result.push(array)
            } else {
                if (Array.isArray(array)) {
                    curDepth += 1
                    while (array.length) {
                        let cur: any = array.shift()
                        if (curDepth >= n) {
                            result.push(cur)
                        } else {
                            if (Array.isArray(cur)) {
                                depthSearch(cur, curDepth + 1)
                            } else {
                                result.push(cur)
                            }
                        }
                    }
                } else {
                    result.push(array)
                }
            }
        }
        return
    }

    return result
}
