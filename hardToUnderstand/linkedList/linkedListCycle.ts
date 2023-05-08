class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = this.val === undefined ? 0 : this.val
        this.next = this.next === undefined ? null : this.next
    }
}

var detectCycle = function (head) {
    const visited = new Set()

    let node = head
    while (node !== null) {
        if (visited.has(node)) {
            return node
        }
        visited.add(node)
        node = node.next
    }

    return null
}

function IntersectWay(head: ListNode | null): ListNode | null {
    let intersect = getIntersect(head)
    if (intersect == null) {
        return null
    }

    let ptr1 = head
    let ptr2 = intersect
    while (ptr1 !== ptr2) {
        ptr1 = ptr1.next
        ptr2 = ptr2.next
    }
    return ptr1
}

function getIntersect(head: ListNode | null) {
    let slow = head
    let fast = head

    while (fast !== null && fast.next !== null) {
        slow = slow?.next
        fast = fast?.next?.next
        if (slow == fast) {
            return slow
        }
    }
    return null
}
