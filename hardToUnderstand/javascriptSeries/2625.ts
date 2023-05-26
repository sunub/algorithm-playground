// 2625. Flatten Deeply Nested Array

// Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

// A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

// A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

// Please solve it without the built-in Array.flat method.

/**
 * @argument { Input : arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], n = 0}
 * @returns { Output : [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]] }
 */

type MultiDimensionalArray = (number | MultiDimensionalArray)[]

var flat = function (
    arr: MultiDimensionalArray,
    n: number
): MultiDimensionalArray {
    const res: MultiDimensionalArray = []

    const flattening = (nums: MultiDimensionalArray, depth: number) => {
        for (const num of nums) {
            if (Array.isArray(num) && depth > 0 && n - depth > 0) {
                flattening(num, depth - 1)
            } else {
                res.push(num)
            }
        }
    }

    flattening(arr, n)
    return res
}

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

// Explain the concept of flattening a multi-dimensional array. Why might flattening be useful in certain scenarios?

// Flattening a multi-dimensional array means converting it into a single-dimensional array by removing any nested arrays and replacing them with their actual elements. This can be useful when we need to process or analyze the array as a flat list, disregarding its original nested structure. It simplifies operations such as searching, filtering, or transforming the elements of the array.
// Are there any edge cases or special scenarios that need to be considered when solving this problem? How does your solution handle them?

// Yes, we should consider edge cases such as empty arrays or arrays with no nested arrays. In such cases, the function should return the original array as there are no nested arrays to flatten. Additionally, we need to handle scenarios where the depth n is negative or exceeds the actual depth of the array. In these cases, the function should also return the original array without flattening.
// How does your solution handle circular references or self-referencing arrays within the input array?

// Circular references or self-referencing arrays can lead to infinite recursion. The provided solution does not explicitly handle circular references. If the input array contains circular references, the recursive flattening process may result in an infinite loop or stack overflow error.
