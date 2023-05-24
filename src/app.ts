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
            let toSwap = null
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

console.log(maxScore([1, 3, 3, 2], [2, 1, 3, 4], 3))
