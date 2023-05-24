"use strict";
function maxScore(nums1, nums2, k) {
    const n = nums1.length;
    const pairs = Array.from({ length: n }, (v, _) => (v = Array.from({ length: 2 }, (v, _) => (v = 0))));
    for (let i = 0; i < n; i++) {
        pairs[i] = [nums1[i], nums2[i]];
    }
    pairs.sort((a, b) => b[1] - a[1]);
    console.log(pairs);
}
class MinHeap {
    constructor() {
        this.root = [];
    }
    add(val) {
        this.root.push(val);
        if (this.root.length > 2) {
            this.sort();
        }
        else {
            this.root.sort((a, b) => a - b);
        }
    }
    sort() {
        const n = this.root.length;
        let i = n - 1;
        while (i >= 0) {
            const parent = i - 1;
            const left = parent + 1;
            const right = parent + 2;
            if (this.root[left] > this.root[right]) {
                this.swap(left, right);
            }
            if (this.root[left] < this.root[parent]) {
                this.swap(left, parent);
            }
            i -= 2;
        }
    }
    swap(idx1, idx2) {
        ;
        [this.root[idx1], this.root[idx2]] = [this.root[idx2], this.root[idx1]];
    }
}
console.log(maxScore([79, 76, 41, 28, 41, 66, 44, 30, 25], [25, 0, 69, 67, 55, 0, 9, 77, 26], 7));
const a = new MinHeap();
a.add(10);
a.add(4);
a.add(3);
a.add(11);
a.add(1);
//# sourceMappingURL=app.js.map