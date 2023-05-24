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

    let topKsum = 0
    let topKHeap = new MaxHeap()
    for (let i = 0; i < k; i++) {
        topKsum += pairs[i][0]
        topKHeap.add(pairs[i][0])
    }

    let answer = topKsum * pairs[k - 1][1]

    for (let i = k; i < n; i++) {
        topKsum += pairs[i][0] - topKHeap.get()
        topKHeap.add(pairs[i][0])

        answer = Math.max(answer, topKsum * pairs[i][1])
    }

    return answer
}

class MaxHeap {
    root: number[]
    constructor() {
        this.root = []
    }

    add(val: number) {
        this.root.push(val)
        if (this.root.length > 2) {
            this.sort()
        } else {
            this.root.sort((a, b) => b - a)
        }
    }

    get(): number {
        return this.root.shift()!
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
