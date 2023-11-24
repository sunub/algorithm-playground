class PriorityQueue {
    constructor() {
        this.collection = [];
    }

    enqueue(element, priority) {
        let contains = false;
        for (let i = 0; i < this.collection.length; i++) {
            if (this.collection[i].priority > priority) {
                this.collection.splice(i, 0, { element, priority });
                contains = true;
                break;
            }
        }
        if (!contains) {
            this.collection.push({ element, priority });
        }
    }

    dequeue() {
        return this.collection.shift();
    }

    isEmpty() {
        return this.collection.length === 0;
    }
}
