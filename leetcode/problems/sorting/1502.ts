// 1502. Can Make Arithmetic Progression From Sequence

// A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

// Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression. Otherwise, return false.

/**
 * @argument { Input : arr = [3,5,1] }
 * @returns { Output : Output: true }
 */

/**
 * @argument { Input: arr = [1,2,4] }
 * @returns { Output : Output: false }
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
    arr.sort((a, b) => a - b)

    let diff: number[] = []
    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i] - arr[i - 1]

        if (diff.length) {
            if (curr !== diff[0]) {
                return false
            }
        } else {
            diff.push(curr)
        }
    }
    return true
}

// Slope = ΔY / ΔX, 기울기

// p0, p1, p2 세개의 점을 비교한다고 하였을 때 p0의 점을 기준으로 비교를 하면
// p1 / p0 === p2 / p0의 기울기가 같아야 하는 것이다.
// 이러한 특징으로 ΔY1 * ΔX2 X2ΔX2 = ΔY2 Y2ΔY2 * ΔX1 X1ΔX1를 유추해서 푸는 것이다.
