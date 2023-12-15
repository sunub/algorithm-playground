2677. Chunk Array

// Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

// You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

// Please solve it without using lodash's _.chunk function.

/**
 * @argument { Input: arr = [1,2,3,4,5], size = 1 }
 * @returns { Output: [[1],[2],[3],[4],[5]] }
 */

/**
 * @argument { Input: arr = [1,9,6,3,2], size = 3 }
 * @returns { Output: [[1,9,6],[3,2]]}
 */

function chunk(arr: any[], size: number): any[][] {
    const result = []
    while (arr.length) {
        result.push(arr.splice(0, size))
    }
    return result
};