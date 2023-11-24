class PriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueue(element, priority) {
        const newItem = new QueueItem(element, priority);

        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > priority) {
                // 기존에 있던 아이템의 인덱스에 새로운 아이템 추가
                this.items.splice(i, 0, newItem);
                return;
            }
        }

        this.items.push(newItem);
    }

    dequeue() {
        if (this.isEmpty()) return;
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

class QueueItem {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}
