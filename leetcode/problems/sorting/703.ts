// Kth Largest Element in a Stream

// Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Implement KthLargest class:
// KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
// int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.

/**
 * @argument { Input: ["KthLargest", "add", "add", "add", "add", "add"], [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]] }
 * @returns { Output: [null, 4, 5, 5, 8, 8] }
 */

class KthLargest {
    root: number[]
    largestIndex: number
    constructor(k: number, nums: number[]) {
        this.root = [...nums].sort((a, b) => b - a)
        this.largestIndex = k - 1
    }

    add(val: number): number {
        this.root.push(val)
        if (this.root.length > 2) {
            this.sort()
        } else {
            this.root.sort((a, b) => b - a)
        }
        return this.root[this.largestIndex]
    }

    sort() {
        const n = this.root.length
        let i = n - 1
        while (i >= 0) {
            const parent = i - 1
            const left = parent + 1
            const right = parent + 2

            if (this.root[left] < this.root[right]) {
                ;[this.root[left], this.root[right]] = [
                    this.root[right],
                    this.root[left],
                ]
            }
            if (this.root[left] > this.root[parent]) {
                ;[this.root[parent], this.root[left]] = [
                    this.root[left],
                    this.root[parent],
                ]
            }

            i -= 2
        }
    }
}
