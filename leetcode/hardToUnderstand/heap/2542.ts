// Maximum Subsequence Score

// You are given two 0-indexed integer arrays nums1 and nums2 of equal length n and a positive integer k. You must choose a subsequence of indices from nums1 of length k.

// For chosen indices i0, i1, ..., ik - 1, your score is defined as:

// The sum of the selected elements from nums1 multiplied with the minimum of the selected elements from nums2.
// It can defined simply as: (nums1[i0] + nums1[i1] +...+ nums1[ik - 1]) * min(nums2[i0] , nums2[i1], ... ,nums2[ik - 1]).
// Return the maximum possible score.

// A subsequence of indices of an array is a set that can be derived from the set {0, 1, ..., n-1} by deleting some or no elements.

/**
 * @argument { Input: nums1 = [1,3,3,2], nums2 = [2,1,3,4], k = 3 }
 * @returns {Output: 12 }
 */

/**
 * @argument { Input: nums1 = [4,2,3,1,1], nums2 = [7,5,10,9,6], k = 1 }
 * @returns { Output: 30 }
 */

function maxScore(nums1: number[], nums2: number[], k: number): number {
    const n = nums1.length
    const pairs = Array.from(
        { length: n },
        (v, _) => (v = Array.from({ length: 2 }, (v, _) => (v = 0)))
    )

    for (let i = 0; i < n; i++) {
        pairs[i] = [nums1[i], nums2[i]]
    }
    pairs.sort((a, b) => b[1] - a[1])

    let topKSum = 0
    let topKHeap = new MinHeap()
    for (let i = 0; i < k; i++) {
        topKSum += pairs[i][0]
        topKHeap.insert(pairs[i][0])
    }

    let answer = topKSum * pairs[k - 1][1]
    for (let i = k; i < n; i++) {
        topKSum += pairs[i][0] - topKHeap.extractMin()
        topKHeap.insert(pairs[i][0])

        answer = Math.max(answer, topKSum * pairs[i][1])
    }
    return answer
}

class MinHeap {
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
        this.bubbleDown(0)
        return min
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
