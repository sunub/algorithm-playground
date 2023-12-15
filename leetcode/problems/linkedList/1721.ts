/**
 * @example
 * You are given the head of a linked list, and an integer k.
 * Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).
 *
 * @argument { Input: head = [1,2,3,4,5], k = 2 }
 * @returns { Output: [1,4,3,2,5] }
 */

class ListNode {
    val?: number | 0
    next?: null | number

    constructor(val?: number, next?: null | number) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

var swapNodes = function (head: ListNode, k: number) {
    const nodes: any = []
    const queue: any = [head]
    while (queue.length) {
        const node: any = queue.pop()

        nodes.push(node.val)
        if (node.next !== null) {
            queue.push(node.next)
        }
    }

    ;[nodes[k - 1], nodes[nodes.length - k]] = [
        nodes[nodes.length - k],
        nodes[k - 1],
    ]
    const answer = new ListNode(nodes.shift(), null)
    answer.next = insert(new ListNode(), nodes)
    return answer
}

function insert(cur, nodes) {
    if (nodes.length) {
        cur.val = nodes.shift()
        cur.next = insert(new ListNode(), nodes)
        return cur
    }
    return null
}
