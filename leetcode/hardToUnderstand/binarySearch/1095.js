// 1095. Find in Mountain Array

// You may recall that an array arr is a mountain array if and only if:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
// Given a mountain array mountainArr, return the minimum index such that mountainArr.get(index) == target. If such an index does not exist, return -1.

// You cannot access the mountain array directly. You may only access the array using a MountainArray interface:

// MountainArray.get(k) returns the element of the array at index k (0-indexed).
// MountainArray.length() returns the length of the array.
// Submissions making more than 100 calls to MountainArray.get will be judged Wrong Answer. Also, any solutions that attempt to circumvent the judge will result in disqualification.

// Example 1:

// Input: array = [1,2,3,4,5,3,1], target = 3
// Output: 2
// Explanation: 3 exists in the array, at index=2 and index=5. Return the minimum index, which is 2.
// Example 2:

// Input: array = [0,1,2,4,2,1], target = 3
// Output: -1
// Explanation: 3 does not exist in the array, so we return -1.

/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function (target, mountainArr) {
    const length = mountainArr.length();
    function findPeak() {
        let left = 0,
            right = length;

        while (left < right) {
            // 이전에 내가 하던 방식은 left + right / 2의 방식인데 이 경우에는 right - left / 2를 사용하여 mid를 구했다. 두 가지에 큰 차이가 존재하지는 않는다.
            let mid = left + Math.floor((right - left) / 2);

            if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }

    const peakIndex = findPeak();
    let answer = binarySearch(0, peakIndex, target, true);
    if (answer !== -1) {
        return answer;
    }

    return binarySearch(peakIndex + 1, length - 1, target, false);

    function binarySearch(left, right, target, isUpside) {
        //binarySearch에서 가장 조심해야 할 부분이 이 대목이다. left < right를 할 것인지 left <= right를 해야할지에 대한 결정말이다. 특정 target을 찾을 경우에는 무조건 같은 값을 찾아야 하므로 left <= right를 해야 한다.
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            const midNum = mountainArr.get(mid);

            if (midNum === target) {
                return mid;
            }

            if (isUpside) {
                if (target > midNum) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            } else {
                if (target > midNum) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
        }
        return -1;
    }
};
