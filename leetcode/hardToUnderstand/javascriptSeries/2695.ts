// 2695. Array Wrapper

// Create a class ArrayWrapper that accepts an array of integers in it's constructor. This class should have two features:

// When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
// When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].

/**
 * @argument { Input: nums = [[1,2],[3,4]], operation = "Add" }
 * @returns { Output : 10 }
 */
var ArrayWrapper = function (nums: number[]) {
    this.arr = nums
}

ArrayWrapper.prototype.valueOf = function () {
    let Sum = 0
    let arr1: number[] = this.arr
    for (const v of arr1) {
        Sum += v
    }
    return Sum
}

ArrayWrapper.prototype.toString = function () {
    return JSON.stringify(this.arr)
}
/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
