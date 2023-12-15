// 373. Find K Pairs with Smallest Sums

// You are given two integer arrays nums1 and nums2 sorted in ascending order and an integer k.

// Define a pair (u, v) which consists of one element from the first array and one element from the second array.

// Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with the smallest sums.

/**
 * @argument { Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3 }
 * @returns { Output: [[1,2],[1,4],[1,6]] }
 */

/**
 * @argument { Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2 }
 * @returns { Output: [[1,1],[1,1]]}
 */

var kSmallestPairs = function (nums1: number[], nums2: number[], k: number) {
    const heap = new MinHeap()

    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            heap.insert(nums1[i] + nums2[j], nums1[i], nums2[j])
        }
    }

    let answer = []
    while (answer.length !== k) {
        let curr = heap.extractMin()
        if (curr.length) {
            answer.push(curr)
        } else {
            break
        }
    }
    return answer
}

class MinHeap {
    root: number[]
    map: Map<number, number[][]>
    constructor() {
        this.root = []
        this.map = new Map()
        this.bubbleUp(this.root.length - 1)
    }

    insert(val: number, i: number, j: number) {
        this.root.push(val)
        this.map.has(val)
            ? this.map.set(val, [...this.map.get(val)!, [i, j]])
            : this.map.set(val, [[i, j]])
        this.bubbleUp(this.root.length - 1)
    }

    bubbleUp(index: number) {
        while (index > 0) {
            let parent = Math.floor((index + 1) / 2) - 1
            if (this.root[parent] > this.root[index]) {
                let temp = this.root[parent]
                this.root[parent] = this.root[index]
                this.root[index] = temp
            }
            index = parent
        }
    }

    extractMin() {
        var min = this.root[0]
        this.root[0] = this.root.pop()!

        const curr = this.map.get(min)!
        let minValue: any
        if (curr.length > 0) {
            minValue = curr.shift()!
        } else {
            minValue = curr
        }
        this.bubbleDown(0)
        return minValue
    }

    bubbleDown(index: number) {
        while (true) {
            let child = (index + 1) * 2
            let sibling = child - 1
            let toSwap: any = null
            if (this.root[index] > this.root[child]) {
                toSwap = child
            }
            if (
                this.root[index] > this.root[sibling] &&
                (this.root[child] == null ||
                    (this.root[child] !== null &&
                        this.root[sibling] < this.root[child]))
            ) {
                toSwap = sibling
            }
            if (toSwap == null) {
                break
            }
            let temp = this.root[toSwap]
            this.root[toSwap] = this.root[index]
            this.root[index] = temp
            index = toSwap
        }
    }
}
