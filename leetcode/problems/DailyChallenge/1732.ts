// 1732. Find the Highest Altitude

// There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

// You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

/**
 * @argument { Input: gain = [-5,1,5,0,-7] }
 * @returns { Output: 1 }
 */

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let max = -Infinity
    gain.unshift(0)
    for (let i = 1; i < gain.length; i++) {
        gain[i] = gain[i] + gain[i - 1]
        if (max < gain[i]) {
            max = gain[i]
        }
    }
    return max < 0 ? 0 : max
}
