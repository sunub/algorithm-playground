class MinHeap {
    constructor() {
        this.root = [];
        this.map = new Map();
        this.bubbleUp(this.root.length - 1);
    }

    /**
     *
     * @param {number} val
     * @param {number} i
     * @param {number} j
     */
    insert(val, i, j) {
        this.root.push(val);
        this.map.has(val)
            ? this.map.set(val, [...this.map.get(val), [i, j]])
            : this.map.set(val, [[i, j]]);
        this.bubbleUp(this.root.length - 1);
    }

    /**
     *
     * @param {number} index
     */
    bubbleUp(index) {
        while (index > 0) {
            let parent = Math.floor((index + 1) / 2) - 1;
            if (this.root[parent] > this.root[index]) {
                let temp = this.root[parent];
                this.root[parent] = this.root[index];
                this.root[index] = temp;
            }
            index = parent;
        }
    }

    extractMin() {
        var min = this.root[0];
        this.root[0] = this.root.pop();

        const curr = this.map.get(min);
        let minValue;
        if (curr.length > 0) {
            minValue = curr.shift();
        } else {
            minValue = curr;
        }
        this.bubbleDown(0);
        return minValue;
    }

    /**
     *
     * @param {number} index
     */
    bubbleDown(index) {
        while (true) {
            let child = (index + 1) * 2;
            let sibling = child - 1;
            let toSwap = null;
            if (this.root[index] > this.root[child]) {
                toSwap = child;
            }
            if (
                this.root[index] > this.root[sibling] &&
                (this.root[child] == null ||
                    (this.root[child] !== null &&
                        this.root[sibling] < this.root[child]))
            ) {
                toSwap = sibling;
            }
            if (toSwap == null) {
                break;
            }
            let temp = this.root[toSwap];
            this.root[toSwap] = this.root[index];
            this.root[index] = temp;
            index = toSwap;
        }
    }
}
