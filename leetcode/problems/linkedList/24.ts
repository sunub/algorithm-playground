/**
 * @example
 * Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
 *
 * @argument { [1,2,3,4] }
 * @returns { [2,1,4,3] }
 */

class ListNode {
    val?: number | 0
    next?: null | number

    constructor(val?: number, next?: null | number) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

var recursive = function (head) {
    if (!head || head.next == null) {
        return head
    }

    const firstNode = head
    const secondNode = head.next

    firstNode.next = recursive(secondNode?.next)
    secondNode.next = firstNode

    return secondNode
}

var interative = function (head) {
    const dummy = new ListNode(-1)
    dummy.next = head

    let prevNode = dummy

    while (head && head.next !== null) {
        const firstNode = head
        const secondNode = head.next

        prevNode.next = secondNode
        firstNode.next = secondNode.next
        secondNode.next = firstNode

        prevNode = firstNode
        head = firstNode.next
    }

    return dummy.next
}

;(() => {
    var mySolution = function (head) {
        const queue: any = [head]
        const nodes: any = []

        if (!head || head.next == null) {
            return head
        }

        while (queue.length) {
            const cur: any = queue.pop()
            nodes.push(cur.val)
            if (cur.next) {
                queue.push(cur.next)
            }
        }

        for (let i = 0; i < nodes.length; i += 2) {
            if (i + 1 < nodes.length) {
                ;[nodes[i], nodes[i + 1]] = [nodes[i + 1], nodes[i]]
            }
        }

        const answer = new ListNode(nodes.shift(), null)
        answer.next = insert(answer.next, nodes)
        return answer
    }

    function insert(cur, nodes) {
        if (nodes.length) {
            cur = new ListNode(nodes.shift(), null)
            cur.next = insert(cur.next, nodes)
            return cur
        }
        return cur
    }
})()
