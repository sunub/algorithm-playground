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

console.log(
    maxScore(
        [79, 76, 41, 28, 41, 66, 44, 30, 25],
        [25, 0, 69, 67, 55, 0, 9, 77, 26],
        7
    )
)
