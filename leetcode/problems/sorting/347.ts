// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

/**
 * @argument { Input: nums = [1,1,1,2,2,3], k = 2 }
 * @returns { Output: [1,2] }
 */

/**
 * @argument { Input: nums = [1], k = 1 }
 * @returns { Output: [1] }
 */

var topKFrequent = function (nums: number[], k: number) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        map.has(nums[i])
            ? map.set(nums[i], map.get(nums[i]) + 1)
            : map.set(nums[i], 1)
    }

    const answer: number[] = []
    const frequents = [...map.entries()].sort((a, b) => b[1] - a[1])
    for (let i = 0; i < k; i++) {
        if (frequents.length) {
            const frequent: number[] = frequents.shift()!
            answer.push(frequent[0])
        }
    }
    return answer
}

class Heap {
    root: number[]
    constructor() {
        this.root = []
    }

    add(num: number[]) {
        this.root = [...this.root, ...num]
        for (let i = 0; i < this.root.length; i++) {
            this.sort()
        }
    }

    get() {
        return this.root.shift()
    }

    sort() {
        const n = this.root.length
        let i = n - 1
        while (i >= 0) {
            const parent = Math.floor(i / 2)
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
                if (this.root[left] < this.root[right]) {
                    ;[this.root[left], this.root[right]] = [
                        this.root[right],
                        this.root[left],
                    ]
                }
            }

            i -= 2
        }
    }
}
