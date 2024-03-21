class PriorityQueue {
    constructor(comparator) {
        this.comparator = comparator;
        this.queue = [];
    }

    enqueue(element) {
        this.queue.push(element);
        this.queue.sort(this.comparator);
    }

    dequeue() {
        return this.queue.shift();
    }

    get length() {
        return this.queue.length;
    }
}

module.exports = PriorityQueue;
