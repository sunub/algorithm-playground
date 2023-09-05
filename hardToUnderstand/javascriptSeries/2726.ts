// 2726. Calculator with Method Chaining

// Design a Calculator class. The class should provide the mathematical operations of addition, subtraction, multiplication, division, and exponentiation. It should also allow consecutive operations to be performed using method chaining. The Calculator class constructor should accept a number which serves as the initial value of result.

// Your Calculator class should have the following methods:

// add - This method adds the given number value to the result and returns the updated Calculator.
// subtract - This method subtracts the given number value from the result and returns the updated Calculator.
// multiply - This method multiplies the result  by the given number value and returns the updated Calculator.
// divide - This method divides the result by the given number value and returns the updated Calculator. If the passed value is 0, an error "Division by zero is not allowed" should be thrown.
// power - This method raises the result to the power of the given number value and returns the updated Calculator.
// getResult - This method returns the result.
// Solutions within 10-5 of the actual result are considered correct.

// Example 1:

// Input:
// actions = ["Calculator", "add", "subtract", "getResult"],
// values = [10, 5, 7]
// Output: 8
// Explanation:
// new Calculator(10).add(5).subtract(7).getResult() // 10 + 5 - 7 = 8

class Calculator {
    globalNum: number
    constructor(value) {
        this.globalNum = value
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.globalNum += value
        return this
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.globalNum -= value
        return this
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        this.globalNum *= value
        return this
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) {
            throw "Division by zero is not allowed"
        }
        this.globalNum = Number((this.globalNum / value).toFixed(5))
        return this
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        if (value === 0) {
            this.globalNum = 1
            return this
        }
        this.globalNum = Math.pow(this.globalNum, value)
        return this
    }

    /**
     * @return {number}
     */
    getResult() {
        return this.globalNum
    }
}
