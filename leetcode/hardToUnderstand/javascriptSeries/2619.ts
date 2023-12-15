// 2619. Array Prototype Last

// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

/**
 * @argument { Input: nums = [1,2,3] }
 * @returns { Output: 3 }
 */

/**
 * @argument { Input: nums = [] }
 * @returns { Output : -1 }
 */

Array.prototype.last = function () {
    const last = this.pop()
    return last != undefined ? last : -1
}
