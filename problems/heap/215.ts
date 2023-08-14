// 215. Kth Largest Element in an Array

// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

var findKthLargest = function (nums, k) {
    const maxHeap = new MaxHeap()

    for (let i = 0; i < nums.length; i++) {
        maxHeap.insert(nums[i])
    }

    let answer
    for (let i = 0; i < k; i++) {
        answer = maxHeap.extractMax()
    }

    return answer
}

class MaxHeap {
    root: number[]
    constructor() {
        this.root = []
        this.bubbleUp(this.root.length - 1)
    }

    insert(val: number) {
        this.root.push(val)
        this.bubbleUp(this.root.length - 1)
    }

    bubbleUp(index: number) {
        while (index > 0) {
            let parent = Math.floor((index + 1) / 2) - 1
            if (this.root[parent] < this.root[index]) {
                ;[this.root[parent], this.root[index]] = [
                    this.root[index],
                    this.root[parent],
                ]
            }
            index = parent
        }
    }

    extractMax() {
        var max = this.root[0]
        this.root[0] = this.root.pop()!
        this.bubbleDown(0)
        return max
    }

    bubbleDown(index: number) {
        while (true) {
            let child = (index + 1) * 2
            let sibling = child - 1
            let toSwap: any = null
            if (this.root[index] < this.root[child]) {
                toSwap = child
            }
            if (
                this.root[index] < this.root[sibling] &&
                (this.root[child] == null ||
                    (this.root[child] !== null &&
                        this.root[sibling] > this.root[child]))
            ) {
                toSwap = sibling
            }
            if (toSwap == null) {
                break
            }
            ;[this.root[toSwap], this.root[index]] = [
                this.root[index],
                this.root[toSwap],
            ]
            index = toSwap
        }
    }
}
