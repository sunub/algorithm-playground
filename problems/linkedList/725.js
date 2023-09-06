// 725. Split Linked List in Parts

// Given the head of a singly linked list and an integer k, split the linked list into k consecutive linked list parts.

// The length of each part should be as equal as possible: no two parts should have a size differing by more than one. This may lead to some parts being null.

// The parts should be in the order of occurrence in the input list, and parts occurring earlier should always have a size greater than or equal to parts occurring later.

// Return an array of the k parts.

// Example 1:

// Input: head = [1,2,3], k = 5
// Output: [[1],[2],[3],[],[]]
// Explanation:
// The first element output[0] has output[0].val = 1, output[0].next = null.
// The last element output[4] is null, but its string representation as a ListNode is [].

// Input: head = [1,2,3,4,5,6,7,8,9,10], k = 3
// Output: [[1,2,3,4],[5,6,7],[8,9,10]]
// Explanation:
// The input has been split into consecutive parts with size difference at most 1, and earlier parts are a larger size than the later parts.

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
    const splitedParts = Array.from({ length: k }, () => null)
    const nodes = []
    let count = 0,
        node = head
    while (node) {
        nodes.push(node.val)
        node = node.next
        count += 1
    }

    const dividedNum = dividK(k, count)

    let i = 0
    while (i < k) {
        const node = new ListNode()
        let n = node,
            j = 0,
            isInserted = false
        while (j < dividedNum[i]) {
            const num = nodes.shift()
            ;[n.val, isInserted] = [num, true]

            j + 1 < dividedNum[i] ? (n.next = new ListNode()) : null

            ;[n, j] = [n.next, j + 1]
        }

        isInserted ? (splitedParts[i] = node) : null
        i += 1
    }

    return splitedParts
}

function dividK(k, count) {
    const dividedK = Array.from({ length: k }, () => null)

    let i = 0
    while (count > 0) {
        if (i === k) i = 0
        dividedK[i] += 1
        count -= 1
        i += 1
    }

    return dividedK
}
