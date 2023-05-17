/**
 * @example
 * In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.
 * For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.
 * The twin sum is defined as the sum of a node and its twin.
 * Given the head of a linked list with even length, return the maximum twin sum of the linked list.
 *
 * @argument { Input: head = [5,4,2,1] }
 * @returns { Output: 6 }
 */

class ListNode {
    val?: number | 0
    next?: null | number

    constructor(val?: number, next?: null | number) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

type listnode = {
    val?: number | 0
    next?: null | number
}

var pairSum = function (head) {
    let n = 1
    const queue = [head]
    const nodes: any = []
    while (queue.length) {
        const cur: listnode = queue.pop()

        nodes.push(cur.val)
        n += 1
        if (cur.next) {
            queue.push(cur.next)
        }
    }
    if (n === 1) {
        return nodes[0] + nodes[1]
    }

    n = n - 1
    let answer = -Infinity
    for (let i = 0; i < n; i++) {
        let twin = n - 1 - i
        let twinSum = nodes[i] + nodes[twin]
        console.log(twin, twinSum)
        answer = Math.max(answer, twinSum)
    }

    return answer
}
